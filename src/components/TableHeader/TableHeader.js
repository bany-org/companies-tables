import React from "react";
import styled from "styled-components";
import DescendingIcon from "../assets/DescendingIcon/DescendingIcon";
import LoupIcon from "../assets/LoupIcon/LoupIcon";
import ClearIcon from "../assets/ClearIcon/ClearIcon";
import { PROPERTIES_NAMES_MAP, DIRECTION_NAMES_MAP } from "../constants";

const HeaderBody = styled.div`
    display: flex;
    justify-content: space-around;
    background-color: lightblue;
    padding: 10px;
    border-radius: 10px;
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
                        `"${filterPhr}" in "${PROPERTIES_NAMES_MAP[filterProp]}"`}
                </Info>
            </HeaderElement>
            <HeaderElement>
                <DescendingIcon />
                <Info>
                    Sort: {!sortProp && "none"}
                    {sortProp && (
                        <>
                            <span>
                                {`${DIRECTION_NAMES_MAP[sortDir]} in ${PROPERTIES_NAMES_MAP[sortProp]}`}
                            </span>
                        </>
                    )}
                </Info>
            </HeaderElement>
        </HeaderBody>
    );
};

export default TableHeader;
