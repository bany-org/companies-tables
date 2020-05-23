import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import Table from "./Table/Table";

const AppBody = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
    font-family: sans-serif;

    @media (max-width: 1024px) {
        font-size: 10px;
    }
`;

function App() {
    const [isLoading, changeLoading] = useState(true);
    const [companiesList, updateCompaniesList] = useState([]);
    const [companiesData, updateCompaniesData] = useState([]);

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

                        let lastMonthIncome = 0;

                        const sumOfIncomes = elem.data.incomes
                            .map((income) => {
                                const data = new Date(income.date);

                                const year = data.getFullYear();
                                const month = data.getMonth();

                                if (
                                    year === new Date().getFullYear() &&
                                    month === 0 // month === new Date().getMonth()
                                ) {
                                    lastMonthIncome += parseFloat(income.value);
                                }

                                return income.value;
                            })
                            .reduce(
                                (prev, curr) =>
                                    parseFloat(prev) + parseFloat(curr)
                            );

                        const updated = Object.assign(companyToUpdate, {
                            totalIncome: Number(sumOfIncomes).toFixed(2),
                            averageIncome: Number(
                                sumOfIncomes / elem.data.incomes.length
                            ).toFixed(2),
                            lastMonthIncome: Number(lastMonthIncome).toFixed(2),
                        });

                        return updated;
                    });

                    updateCompaniesData(updatedCompanies);
                    changeLoading(false);
                })
            )
            .catch((errors) => {
                console.log(errors);
                changeLoading(false);
            });
    }, [companiesList]);

    return (
        <AppBody>
            {isLoading && <h1>loading</h1>}
            {!isLoading && <Table companiesData={companiesData} />}
            <div>
                <div>
                    Icons made by{" "}
                    <a
                        href="https://www.flaticon.com/authors/freepik"
                        title="Freepik"
                    >
                        Freepik
                    </a>{" "}
                    from{" "}
                    <a href="https://www.flaticon.com/" title="Flaticon">
                        www.flaticon.com
                    </a>
                </div>
            </div>
        </AppBody>
    );
}

export default App;
