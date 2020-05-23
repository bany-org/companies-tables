import React from "react";
import styled from "styled-components";
import AscendingIcon from "../assets/AscendingIcon/AscendingIcon";
import DescendingIcon from "../assets/DescendingIcon/DescendingIcon";
import LoupIcon from "../assets/LoupIcon/LoupIcon";
import ClearIcon from "../assets/ClearIcon/ClearIcon";

const HeaderBody = styled.div`
    display: flex;
    justify-content: space-around;
    background-color: lightblue;
    padding: 10px;
`;

const HeaderElement = styled.div`
    display: flex;
    width: 30%;
`;

const ClearButton = styled.div`
    display: flex;
    align-items: center;
    border-radius: 10px;
    border: solid darkgoldenrod 1px;
    background-color: orange;
    padding: 2px 5px;
    color: white;
    cursor: pointer;
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
            <HeaderElement>
                <ClearButton onClick={clear}>
                    <ClearIcon />
                    Clear filters
                </ClearButton>
            </HeaderElement>
            <HeaderElement>
                <LoupIcon />
                Filter: {!filterPhr && "none"}
                {filterProp &&
                    filterPhr !== "" &&
                    `"${filterPhr}" in "${propertyNamesMap[filterProp]}"`}
            </HeaderElement>
            <HeaderElement>
                <DescendingIcon />
                Sort: {!sortProp && "none"}
                {sortProp && (
                    <>
                        <span>
                            {`${directionNamesMap[sortDir]} in ${propertyNamesMap[sortProp]}`}
                        </span>
                    </>
                )}
            </HeaderElement>
        </HeaderBody>
    );
};

export default TableHeader;
