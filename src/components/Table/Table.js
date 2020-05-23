import React, { useState, useEffect } from "react";

import PaginationBar from "../PaginationBar/PaginationBar";
import TableHeader from "../TableHeader/TableHeader";
import TableSortingRow from "../TableSortingRow/TableSortingRow";
import TableFilteringRow from "../TableFilteringRow/TableFilteringRow";
import TableContetRow from "../TableContetRow/TableContetRow";

const Table = ({ companiesData, displayNumber }) => {
    const [sortProperty, changeSortProperty] = useState(null);
    const [sortDirection, changeSortDirection] = useState(null);
    const [filterPhrase, changeFiltePhrase] = useState(null);
    const [filterProperty, changeFilterProperty] = useState(null);
    const [firmy, zmienFirmy] = useState([...companiesData]);
    const [offset, changeOffset] = useState(0);
    const [filteredCompaniesNumber, changeFilteredCompaniesNumber] = useState(
        20
    );

    useEffect(() => {
        let updatedList = [...companiesData];

        if (filterProperty) {
            updatedList = updatedList.filter(filterFunction);
        }

        if (sortProperty) {
            updatedList.sort(sortFunction);
        }

        changeFilteredCompaniesNumber(updatedList.length);

        zmienFirmy(updatedList.slice(offset, offset + 20));
    }, [filterPhrase, filterProperty, sortDirection, sortProperty, offset]);

    const filterFunction = (comp) => {
        if (filterPhrase === "") {
            return true;
        }

        return comp[filterProperty]
            .toString()
            .toLowerCase()

            .includes(filterPhrase);
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

    const clearFilters = () => {
        changeOffset(0);
        changeFilterProperty(null);
        changeFiltePhrase(null);
        changeSortDirection(null);
        changeSortProperty(null);
    };

    return (
        <>
            <TableHeader
                clear={clearFilters}
                sortProp={sortProperty}
                sortDir={sortDirection}
                filterProp={filterProperty}
                filterPhr={filterPhrase}
            />
            <table>
                <thead>
                    <TableSortingRow
                        onSortChange={onSortChange}
                        sortProperty={sortProperty}
                        sortDirection={sortDirection}
                    />
                    <TableFilteringRow
                        onFilterChange={onFilterChange}
                        filterProperty={filterProperty}
                        filterPhrase={filterPhrase}
                    />
                </thead>
                <tbody>
                    {firmy.map((elem, index) => (
                        <TableContetRow
                            company={elem}
                            index={index}
                            offset={offset}
                        />
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
