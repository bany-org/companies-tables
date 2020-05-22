import React, { useState, useEffect } from "react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";

const Table = ({ companiesData, offset, displayNumber }) => {
    const [sortProperty, changeSortProperty] = useState(null);
    const [sortDirection, changeSortDirection] = useState(null);
    const [filterPhrase, changeFiltePhrase] = useState();
    const [filterProperty, changeFilterProperty] = useState();
    const [firmy, zmienFirmy] = useState([...companiesData]);

    useEffect(() => {
        console.log(
            "zmiana filtrowania",
            filterPhrase,
            filterProperty,
            sortProperty,
            sortDirection
        );
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
        console.log("filtrowanie", comp, filterPhrase, filterProperty);

        switch (filterProperty) {
            case "id":
                if (filterPhrase === 0) {
                    return true;
                }
                return comp.id === filterPhrase;

            case "name":
                if (filterPhrase === "") {
                    return true;
                }
                return comp.name.toLowerCase().includes(filterPhrase);

            case "city":
                if (filterPhrase === "") {
                    return true;
                }
                return comp.city.toLowerCase().includes(filterPhrase);

            case "totalIncome":
                if (filterPhrase === 0) {
                    return true;
                }
                return parseInt(comp.totalIncome) === filterPhrase;

            case "averageIncome":
                if (filterPhrase === 0) {
                    return true;
                }
                return parseInt(comp.averageIncome) === filterPhrase;

            default:
                return true;
        }
    };

    const sortFunction = (a, b) => {
        switch (sortProperty) {
            case "ID":
                return sortDirection === "ASC"
                    ? a.id > b.id
                        ? 1
                        : -1
                    : a.id < b.id
                    ? 1
                    : -1;

            case "NAME":
                return sortDirection === "ASC"
                    ? a.name > b.name
                        ? 1
                        : -1
                    : a.name < b.name
                    ? 1
                    : -1;

            case "CITY":
                return sortDirection === "ASC"
                    ? a.city > b.city
                        ? 1
                        : -1
                    : a.city < b.city
                    ? 1
                    : -1;

            case "TOT_INC":
                return sortDirection === "ASC"
                    ? a.totalIncome > b.totalIncome
                        ? 1
                        : -1
                    : a.totalIncome < b.totalIncome
                    ? 1
                    : -1;

            case "AVG_INC":
                return sortDirection === "ASC"
                    ? a.averageIncome > b.averageIncome
                        ? 1
                        : -1
                    : a.averageIncome < b.averageIncome
                    ? 1
                    : -1;

            default:
                return true;
        }
    };

    return (
        <table>
            <thead>
                <tr>
                    <td>Lp</td>
                    <td
                        onClick={() => {
                            if (sortProperty === "NAME") {
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
                                changeSortProperty("NAME");
                            }
                        }}
                    >
                        Name
                    </td>
                    <td
                        onClick={() => {
                            if (sortProperty === "CITY") {
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
                                changeSortProperty("CITY");
                            }
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
                                changeSortProperty("AVG_INC");
                            }
                        }}
                    >
                        Average income{" "}
                        {sortProperty === "AVG_INC" ? sortDirection : null}
                    </td>
                    <td>Last month income</td>
                    <td
                        onClick={() => {
                            if (sortProperty === "ID") {
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
                                changeSortProperty("ID");
                            }
                        }}
                    >
                        Id {sortProperty === "ID" ? sortDirection : null}
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
