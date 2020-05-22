import React, { useState, useEffect } from "react";

const Table = ({ companiesData, offset, displayNumber }) => {
    const [sortProperty, changeSortProperty] = useState(null);
    const [sortDirection, changeSortDirection] = useState(null);
    const [filterPhrase, changeFiltePhrase] = useState();
    const [filterProperty, changeFilterProperty] = useState();
    const [firmy, zmienFirmy] = useState([...companiesData]);

    useEffect(() => {
        let xxx = [...companiesData];

        if (filterProperty) {
            xxx = xxx.filter(filterFunction);
        }

        if (sortProperty) {
            xxx.sort(sortFunction);
        }

        const aaa = xxx.slice(offset, offset + displayNumber);

        console.log("ile elementów", xxx.length);

        zmienFirmy(aaa);
    }, [filterPhrase, filterProperty, sortDirection, sortProperty, offset]);

    const filterFunction = (comp) => {
        console.log("filtrowanie", comp, typeof filterPhrase, filterProperty);

        if (filterPhrase === 0 || filterPhrase === "") {
            return true;
        }

        if (typeof filterPhrase === "number") {
            return parseInt(comp[filterProperty]) === filterPhrase;
        }

        if (typeof filterPhrase === "string") {
            return comp[filterProperty].toLowerCase().includes(filterPhrase);
        }
    };

    const sortFunction = (a, b) => {
        return sortDirection === "ASC"
            ? a[sortProperty] > b[sortProperty]
                ? 1
                : -1
            : a[sortProperty] < b[sortProperty]
            ? 1
            : -1;
    };

    return (
        <table>
            <thead>
                <tr>
                    <td>Lp</td>
                    <td
                        onClick={() => {
                            if (sortProperty === "name") {
                                if (sortDirection === "ASC") {
                                    changeSortDirection("DESC");
                                } else if (sortDirection === "DESC") {
                                    changeSortDirection(null);
                                    changeSortProperty(null);
                                } else {
                                    changeSortDirection("ASC");
                                }
                            } else {
                                changeSortDirection("ASC");
                                changeSortProperty("name");
                            }
                        }}
                    >
                        Name
                    </td>
                    <td
                        onClick={() => {
                            if (sortProperty === "city") {
                                if (sortDirection === "ASC") {
                                    changeSortDirection("DESC");
                                } else if (sortDirection === "DESC") {
                                    changeSortDirection(null);
                                    changeSortProperty(null);
                                } else {
                                    changeSortDirection("ASC");
                                }
                            } else {
                                changeSortDirection("ASC");
                                changeSortProperty("city");
                            }
                        }}
                    >
                        City
                    </td>
                    <td
                        onClick={() => {
                            if (sortProperty === "totalIncome") {
                                if (sortDirection === "ASC") {
                                    changeSortDirection("DESC");
                                } else if (sortDirection === "DESC") {
                                    changeSortDirection(null);
                                    changeSortProperty(null);
                                } else {
                                    changeSortDirection("ASC");
                                }
                            } else {
                                changeSortDirection("ASC");
                                changeSortProperty("totalIncome");
                            }
                        }}
                    >
                        Total income
                    </td>
                    <td
                        onClick={() => {
                            if (sortProperty === "averageIncome") {
                                if (sortDirection === "ASC") {
                                    changeSortDirection("DESC");
                                } else if (sortDirection === "DESC") {
                                    changeSortDirection(null);
                                    changeSortProperty(null);
                                } else {
                                    changeSortDirection("ASC");
                                }
                            } else {
                                changeSortDirection("ASC");
                                changeSortProperty("averageIncome");
                            }
                        }}
                    >
                        Average income{" "}
                        {sortProperty === "averageIncome"
                            ? sortDirection
                            : null}
                    </td>
                    <td>Last month income</td>
                    <td
                        onClick={() => {
                            if (sortProperty === "id") {
                                if (sortDirection === "ASC") {
                                    changeSortDirection("DESC");
                                } else if (sortDirection === "DESC") {
                                    changeSortDirection(null);
                                    changeSortProperty(null);
                                } else {
                                    changeSortDirection("ASC");
                                }
                            } else {
                                changeSortDirection("ASC");
                                changeSortProperty("id");
                            }
                        }}
                    >
                        Id {sortProperty === "id" ? sortDirection : null}
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <input
                            type="text"
                            onChange={(e) => {
                                changeFilterProperty("name");
                                changeFiltePhrase(e.target.value.toLowerCase());
                            }}
                        />
                    </td>
                    <td>
                        <input
                            type="text"
                            onChange={(e) => {
                                changeFilterProperty("city");
                                changeFiltePhrase(e.target.value.toLowerCase());
                            }}
                        />
                    </td>
                    <td>
                        <input
                            type="text"
                            onChange={(e) => {
                                changeFilterProperty("totalIncome");
                                changeFiltePhrase(
                                    parseInt(e.target.value) || 0
                                );
                            }}
                        />
                    </td>
                    <td>
                        <input
                            type="text"
                            onChange={(e) => {
                                changeFilterProperty("averageIncome");
                                changeFiltePhrase(
                                    parseInt(e.target.value) || 0
                                );
                            }}
                        />
                    </td>
                    <td>
                        <input type="text" />
                    </td>
                    <td>
                        <input
                            type="text"
                            onChange={(e) => {
                                changeFilterProperty("id");
                                changeFiltePhrase(
                                    parseInt(e.target.value) || 0
                                );
                            }}
                        />
                    </td>
                </tr>
            </thead>
            <tbody>
                {firmy.map((elem, index) => (
                    <tr key={elem.id}>
                        <td>{offset + index + 1}</td>
                        <td>{elem.name}</td>
                        <td>{elem.city}</td>
                        <td>{elem.totalIncome}</td>
                        <td>{elem.averageIncome}</td>
                        <td>TODO</td>
                        <td>{elem.id}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
