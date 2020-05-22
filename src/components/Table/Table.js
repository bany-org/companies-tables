import React, { useState, useEffect } from "react";

const Table = ({ companiesData, offset, displayNumber }) => {
    const [sortProperty, changeSortProperty] = useState(null);
    const [sortDirection, changeSortDirection] = useState(null);
    const [filterPhrase, changeFiltePhrase] = useState();
    const [filterProperty, changeFilterProperty] = useState();
    const [firmy, zmienFirmy] = useState([...companiesData]);

    useEffect(() => {
        console.log("wejście do effect po sorcie");

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

    const onSortChange = (sortProp) => {
        if (sortProperty === sortProp) {
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
            changeSortProperty(sortProp);
        }
    };

    const onFilterChange = (filterProp, filterVal) => {
        changeFilterProperty(filterProp);
        changeFiltePhrase(filterVal);
    };

    return (
        <table>
            <thead>
                <tr>
                    <td>Lp</td>
                    <td onClick={() => onSortChange("name")}>
                        Name
                        {sortProperty === "name" ? sortDirection : null}
                    </td>
                    <td onClick={() => onSortChange("city")}>
                        City
                        {sortProperty === "city" ? sortDirection : null}
                    </td>
                    <td onClick={() => onSortChange("totalIncome")}>
                        Total Income
                        {sortProperty === "totalIncome" ? sortDirection : null}
                    </td>
                    <td onClick={() => onSortChange("averageIncome")}>
                        Average Income
                        {sortProperty === "averageIncome"
                            ? sortDirection
                            : null}
                    </td>
                    <td>Last month income</td>
                    <td onClick={() => onSortChange("id")}>
                        Id
                        {sortProperty === "id" ? sortDirection : null}
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <input
                            type="text"
                            onChange={(e) =>
                                onFilterChange(
                                    "name",
                                    e.target.value.toLocaleLowerCase()
                                )
                            }
                        />
                    </td>
                    <td>
                        <input
                            type="text"
                            onChange={(e) =>
                                onFilterChange(
                                    "city",
                                    e.target.value.toLocaleLowerCase()
                                )
                            }
                        />
                    </td>
                    <td>
                        <input
                            type="text"
                            onChange={(e) =>
                                onFilterChange(
                                    "totalIncome",
                                    parseInt(e.target.value) || 0
                                )
                            }
                        />
                    </td>
                    <td>
                        <input
                            type="text"
                            onChange={(e) =>
                                onFilterChange(
                                    "averageIncome",
                                    parseInt(e.target.value) || 0
                                )
                            }
                        />
                    </td>
                    <td>
                        <input type="text" />
                    </td>
                    <td>
                        <input
                            type="text"
                            onChange={(e) =>
                                onFilterChange(
                                    "id",
                                    parseInt(e.target.value) || 0
                                )
                            }
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
