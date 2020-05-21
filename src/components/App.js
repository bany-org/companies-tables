import React, { useState, useEffect } from "react";
import axios from "axios";

import Table from "./Table/Table";

function App() {
    const [isLoading, changeLoading] = useState(true);
    const [companies, updateCompanies] = useState([]);
    const [displayedCompanies, changeDisplayedCompanies] = useState([]);
    const [displayedElementsNumber, changeDisplayedElementsNumber] = useState(
        10
    );
    const [offset, changeOffset] = useState(0);
    const [sortProperty, changeSortProperty] = useState("id");
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
        // const selectedCompanies = companies
        //     .sort((a, b) => a.id - b.id)
        //     .slice(offset, offset + displayedElementsNumber);

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

    console.log("pass to table", displayedCompanies);

    const sortCompanies = (property, direction) => {
        switch (property) {
            case "id":
                return direction === "DESC"
                    ? displayedCompanies
                          .sort((a, b) => (a.id > b.id ? 1 : -1))
                          .slice(offset, offset + displayedElementsNumber)
                    : displayedCompanies
                          .sort((a, b) => (a.id < b.id ? 1 : -1))
                          .slice(offset, offset + displayedElementsNumber);

            default:
                return displayedCompanies;
        }
        // const comp = displayedCompanies.sort((a, b) => (a.suma < b.suma ? 1 : -1));
        // console.log("posortowane", comp);
    };

    return (
        <div className="App">
            <div>
                ile na stronie
                <select
                    onChange={(event) =>
                        changeDisplayedElementsNumber(
                            parseInt(event.target.value)
                        )
                    }
                    value={displayedElementsNumber}
                >
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                </select>
            </div>

            {isLoading && <h1>loading</h1>}
            {!isLoading && (
                <table>
                    <thead>
                        <tr>
                            <td onClick={() => changeSortDirection("ASC")}>
                                Id
                            </td>
                            <td>Name</td>
                            <td>City</td>
                            <td>Total income</td>
                            <td>Average income</td>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {sortCompanies()} */}
                        {sortCompanies(sortProperty, sortDirection).map(
                            (elem) => (
                                <tr key={elem.id}>
                                    <td>{elem.id}</td>
                                    <td>{elem.name}</td>
                                    <td>{elem.city}</td>
                                    <td>{Number(elem.suma).toFixed(2)}</td>
                                    <td>{Number(elem.avrg).toFixed(2)}</td>
                                </tr>
                            )
                        )}
                    </tbody>
                </table>
            )}

            <div>
                <button
                    onClick={() =>
                        changeOffset(offset - displayedElementsNumber)
                    }
                >
                    Offset -{displayedElementsNumber}
                </button>
                <button
                    onClick={() =>
                        changeOffset(offset + displayedElementsNumber)
                    }
                >
                    Offset +{displayedElementsNumber}
                </button>
            </div>
        </div>
    );
}

export default App;
