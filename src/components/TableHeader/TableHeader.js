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
    align-items: center;
    width: 30%;
`;

const Info = styled.div`
    display: flex;
    align-items: center;
    margin-left: 10px;
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
    box-shadow: 2px 2px #aaaaaa;
    &:hover {
        transform: scale(1.1);
    }
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
                    <Info>Clear filters</Info>
                </ClearButton>
            </HeaderElement>
            <HeaderElement>
                <LoupIcon />
                <Info>
                    Filter: {!filterPhr && "none"}
                    {filterProp &&
                        filterPhr !== "" &&
                        `"${filterPhr}" in "${propertyNamesMap[filterProp]}"`}
                </Info>
            </HeaderElement>
            <HeaderElement>
                <DescendingIcon />
                <Info>
                    Sort: {!sortProp && "none"}
                    {sortProp && (
                        <>
                            <span>
                                {`${directionNamesMap[sortDir]} in ${propertyNamesMap[sortProp]}`}
                            </span>
                        </>
                    )}
                </Info>
            </HeaderElement>
        </HeaderBody>
    );
};

export default TableHeader;
