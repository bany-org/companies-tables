import React, { useState, useEffect } from "react";
import axios from "axios";

import Table from "./Table/Table";
import PaginationBar from "./PaginationBar/PaginationBar";
import TableHeader from "./TableHeader/TableHeader";

function App() {
    const [isLoading, changeLoading] = useState(true);
    const [companiesList, updateCompaniesList] = useState([]);
    const [displayedCompanies, changeDisplayedCompanies] = useState([]);
    const [displayedCompaniesNumber, changeDisplayedCompaniesNumber] = useState(
        10
    );
    const [offset, changeOffset] = useState(0);

    useEffect(() => {
        changeLoading(true);
        axios
            .get(`https://recruitment.hal.skygate.io/companies`)
            .then((res) => {
                updateCompaniesList(res.data);
                changeLoading(false);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        changeLoading(true);
        axios
            .all(
                companiesList.map((elem) =>
                    axios.get(
                        `https://recruitment.hal.skygate.io/incomes/${elem.id}`
                    )
                )
            )
            .then(
                axios.spread((...responses) => {
                    const companiesIncomes = responses;

                    const updatedCompanies = companiesIncomes.map((elem) => {
                        const companyToUpdate = companiesList.find(
                            (company) => company.id === elem.data.id
                        );

                        const sumOfIncomes = elem.data.incomes
                            .map((income) => income.value)
                            .reduce(
                                (prev, curr) =>
                                    parseFloat(prev) + parseFloat(curr)
                            );

                        const updated = Object.assign(companyToUpdate, {
                            totalIncome: Number(sumOfIncomes).toFixed(2),
                            averageIncome: Number(
                                sumOfIncomes / elem.data.incomes.length
                            ).toFixed(2),
                        });

                        return updated;
                    });

                    changeDisplayedCompanies(updatedCompanies);
                    changeLoading(false);
                })
            )
            .catch((errors) => {
                console.log(errors);
                changeLoading(false);
            });
    }, [companiesList]);

    return (
        <div className="App">
            <TableHeader
                changeDisplayedCompaniesNumber={changeDisplayedCompaniesNumber}
                displayedCompaniesNumber={displayedCompaniesNumber}
            />

            {isLoading && <h1>loading</h1>}
            {!isLoading && (
                <Table
                    displayedCompanies={displayedCompanies}
                    offset={offset}
                    displayedCompaniesNumber={displayedCompaniesNumber}
                />
            )}

            <PaginationBar
                changeOffset={changeOffset}
                offset={offset}
                displayedCompaniesNumber={displayedCompaniesNumber}
            />
        </div>
    );
}

export default App;
