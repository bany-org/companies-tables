import React from "react";
import styled from "styled-components";

const HeaderBody = styled.div`
    display: flex;
    justify-content: space-around;
    background-color: lightblue;
    padding: 10px;
`;

const propertyNamesMap = {
    name: "Name",
    city: "City",
    totalIncome: "Total Income",
    averageIncome: "Average Income",
    lastMonthIncome: "Last Month Income",
    id: "Id",
};

const directionNamesMap = {
    ASC: "Ascending",
    DESC: "Descending",
};

const TableHeader = ({ clear, filterProp, filterPhr, sortProp, sortDir }) => {
    return (
        <HeaderBody>
            <div>
                <button onClick={clear}> Clear filters</button>
            </div>
            <div>
                {filterProp &&
                    filterPhr !== "" &&
                    `Filter for "${filterPhr}" in "${propertyNamesMap[filterProp]}"`}
            </div>
            <div>
                {sortProp &&
                    `Sort ${directionNamesMap[sortDir]} in ${propertyNamesMap[sortProp]}`}
            </div>
        </HeaderBody>
    );
};

export default TableHeader;
