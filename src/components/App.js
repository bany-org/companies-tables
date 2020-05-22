import React, { useState, useEffect } from "react";
import axios from "axios";

import Table from "./Table/Table";
import PaginationBar from "./PaginationBar/PaginationBar";
import TableHeader from "./TableHeader/TableHeader";

function App() {
    const [isLoading, changeLoading] = useState(true);
    const [companies, updateCompanies] = useState([]);
    const [displayedCompanies, changeDisplayedCompanies] = useState([]);
    const [displayedElementsNumber, changeDisplayedElementsNumber] = useState(
        10
    );
    const [offset, changeOffset] = useState(0);
    const [sortProperty, changeSortProperty] = useState("ID");
    const [sortDirection, changeSortDirection] = useState("DESC");

    useEffect(() => {
        axios
            .get(`https://recruitment.hal.skygate.io/companies`)
            .then((res) => {
                updateCompanies(res.data);
                changeDisplayedCompanies(res.data);
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
                companies.map((elem) =>
                    axios.get(
                        `https://recruitment.hal.skygate.io/incomes/${elem.id}`
                    )
                )
            )
            .then(
                axios.spread((...responses) => {
                    const companiesData = [...responses];

                    const updatedCompanies = companiesData.map((elem) => {
                        const companyToUpdate = companies.find(
                            (company) => company.id === elem.data.id
                        );

                        const sumOfIncomes = elem.data.incomes.map(
                            (income) => income.value
                        );

                        const sum = sumOfIncomes.reduce(
                            (prev, curr) => parseFloat(prev) + parseFloat(curr)
                        );

                        const updated = Object.assign(companyToUpdate, {
                            suma: sum,
                            avrg: sum / elem.data.incomes.length,
                        });

                        return updated;
                    });

                    changeDisplayedCompanies(updatedCompanies);
                    changeLoading(false);
                })
            )
            .catch((errors) => {
                // react on errors.
            });
    }, [companies]);

    const sortCompanies = (property, direction) => {
        switch (property) {
            case "ID":
                return direction
                    ? displayedCompanies
                          .sort((a, b) => (a.id > b.id ? 1 : -1))
                          .slice(offset, offset + displayedElementsNumber)
                    : displayedCompanies
                          .sort((a, b) => (a.id < b.id ? 1 : -1))
                          .slice(offset, offset + displayedElementsNumber);

            case "NAME":
                return direction
                    ? displayedCompanies
                          .sort((a, b) => (a.name > b.name ? 1 : -1))
                          .slice(offset, offset + displayedElementsNumber)
                    : displayedCompanies
                          .sort((a, b) => (a.name < b.name ? 1 : -1))
                          .slice(offset, offset + displayedElementsNumber);

            case "CITY":
                return direction
                    ? displayedCompanies
                          .sort((a, b) => (a.city > b.city ? 1 : -1))
                          .slice(offset, offset + displayedElementsNumber)
                    : displayedCompanies
                          .sort((a, b) => (a.city < b.city ? 1 : -1))
                          .slice(offset, offset + displayedElementsNumber);

            case "TOT_INC":
                return direction
                    ? displayedCompanies
                          .sort((a, b) => (a.suma < b.suma ? 1 : -1))
                          .slice(offset, offset + displayedElementsNumber)
                    : displayedCompanies
                          .sort((a, b) => (a.suma > b.suma ? 1 : -1))
                          .slice(offset, offset + displayedElementsNumber);

            case "AVG_INC":
                return direction
                    ? displayedCompanies
                          .sort((a, b) => (a.avrg < b.avrg ? 1 : -1))
                          .slice(offset, offset + displayedElementsNumber)
                    : displayedCompanies
                          .sort((a, b) => (a.avrg > b.avrg ? 1 : -1))
                          .slice(offset, offset + displayedElementsNumber);

            default:
                return displayedCompanies;
        }
    };

    return (
        <div className="App">
            <TableHeader
                changeDisplayedElementsNumber={changeDisplayedElementsNumber}
                displayedElementsNumber={displayedElementsNumber}
            />

            {isLoading && <h1>loading</h1>}
            {!isLoading && (
                <table>
                    <thead>
                        <tr>
                            <td
                                onClick={() => {
                                    if (sortProperty === "ID") {
                                        changeSortDirection(!sortDirection);
                                    } else {
                                        changeSortDirection(true);
                                    }
                                    changeSortProperty("ID");
                                }}
                            >
                                Id
                            </td>
                            <td
                                onClick={() => {
                                    if (sortProperty === "NAME") {
                                        changeSortDirection(!sortDirection);
                                    } else {
                                        changeSortDirection(true);
                                    }
                                    changeSortProperty("NAME");
                                }}
                            >
                                Name
                            </td>
                            <td
                                onClick={() => {
                                    if (sortProperty === "CITY") {
                                        changeSortDirection(!sortDirection);
                                    } else {
                                        changeSortDirection(true);
                                    }
                                    changeSortProperty("CITY");
                                }}
                            >
                                City
                            </td>
                            <td
                                onClick={() => {
                                    if (sortProperty === "TOT_INC") {
                                        changeSortDirection(!sortDirection);
                                    } else {
                                        changeSortDirection(true);
                                    }
                                    changeSortProperty("TOT_INC");
                                }}
                            >
                                Total income
                            </td>
                            <td
                                onClick={() => {
                                    if (sortProperty === "AVG_INC") {
                                        changeSortDirection(!sortDirection);
                                    } else {
                                        changeSortDirection(true);
                                    }
                                    changeSortProperty("AVG_INC");
                                }}
                            >
                                Average income
                            </td>
                            <td>Last month income</td>
                        </tr>
                    </thead>
                    <tbody>
                        {sortCompanies(sortProperty, sortDirection).map(
                            (elem, index) => (
                                <tr key={elem.id}>
                                    <td>{offset + index + 1}</td>
                                    <td>{elem.name}</td>
                                    <td>{elem.city}</td>
                                    <td>{Number(elem.suma).toFixed(2)}</td>
                                    <td>{Number(elem.avrg).toFixed(2)}</td>
                                    <td>TODO</td>
                                </tr>
                            )
                        )}
                    </tbody>
                </table>
            )}

            <PaginationBar
                changeOffset={changeOffset}
                offset={offset}
                displayedElementsNumber={displayedElementsNumber}
            />
        </div>
    );
}

export default App;
