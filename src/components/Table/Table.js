import React, { useState, useEffect } from "react";

import PaginationBar from "../PaginationBar/PaginationBar";
import TableHeader from "../TableHeader/TableHeader";

const Table = ({ companiesData, displayNumber }) => {
    const [sortProperty, changeSortProperty] = useState(null);
    const [sortDirection, changeSortDirection] = useState(null);
    const [filterPhrase, changeFiltePhrase] = useState();
    const [filterProperty, changeFilterProperty] = useState();
    const [firmy, zmienFirmy] = useState([...companiesData]);
    const [offset, changeOffset] = useState(0);
    const [filteredCompaniesNumber, changeFilteredCompaniesNumber] = useState(
        20
    );

    useEffect(() => {
        let xxx = [...companiesData];

        if (filterProperty) {
            xxx = xxx.filter(filterFunction);
        }

        if (sortProperty) {
            xxx.sort(sortFunction);
        }

        changeFilteredCompaniesNumber(xxx.length);

        const aaa = xxx.slice(offset, offset + 20);

        console.log("aaaa", aaa);

        zmienFirmy(aaa);
    }, [filterPhrase, filterProperty, sortDirection, sortProperty, offset]);

    const filterFunction = (comp) => {
        console.log("filtrowanie", filterPhrase);

        if (filterPhrase === "") {
            return true;
        }

        if (typeof filterPhrase === "number") {
            return parseInt(comp[filterProperty]) === filterPhrase;
        }

        if (typeof filterPhrase === "string") {
            return (
                comp[filterProperty]
                    .toString()
                    // .toLowerCase()
                    .includes(filterPhrase)
            );
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
        changeOffset(0);
        changeFilterProperty(filterProp);
        changeFiltePhrase(filterVal);
    };

    console.log("firmy", firmy);

    return (
        <>
            <TableHeader />
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
                            {sortProperty === "totalIncome"
                                ? sortDirection
                                : null}
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
                                        e.target.value.toLowerCase()
                                    )
                                }
                                value={
                                    filterProperty !== "name"
                                        ? ""
                                        : filterPhrase
                                }
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                onChange={(e) =>
                                    onFilterChange(
                                        "city",
                                        e.target.value.toLowerCase()
                                    )
                                }
                                value={
                                    filterProperty !== "city"
                                        ? ""
                                        : filterPhrase
                                }
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                onChange={(e) =>
                                    onFilterChange(
                                        "totalIncome",
                                        e.target.value.toLowerCase()
                                    )
                                }
                                value={
                                    filterProperty !== "totalIncome"
                                        ? ""
                                        : filterPhrase
                                }
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                onChange={(e) =>
                                    onFilterChange(
                                        "averageIncome",
                                        e.target.value.toLowerCase()
                                    )
                                }
                                value={
                                    filterProperty !== "averageIncome"
                                        ? ""
                                        : filterPhrase
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
                                        e.target.value.toLowerCase()
                                    )
                                }
                                value={
                                    filterProperty !== "id" ? "" : filterPhrase
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
            <PaginationBar
                changeOffset={changeOffset}
                offset={offset}
                itemsNumber={filteredCompaniesNumber}
            />
        </>
    );
};

export default Table;
