import React, { useState, useEffect } from "react";

const Table = ({ displayedCompanies, offset, displayedElementsNumber }) => {
    const [sortProperty, changeSortProperty] = useState("ID");
    const [sortDirection, changeSortDirection] = useState("DESC");

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
    );
};

export default Table;
