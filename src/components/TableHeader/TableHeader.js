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
    word-break: break-all;
`;

const ClearButton = styled.div`
    display: flex;
    align-items: center;
    border-radius: 10px;
    border: solid darkgoldenrod 1px;
    background-color: orange;
    padding: 5px 8px;
    color: white;
    cursor: pointer;
    box-shadow: 2px 2px #aaaaaa;
    &:hover {
        transform: scale(1.1);
    }
`;

const Wrapper = styled.div`
    border-radius: 10px;
    border: solid darkgoldenrod 1px;
    background-color: orange;
    display: flex;
    padding: 5px 8px;
    font-weight: 600;
    box-shadow: 2px 2px #aaaaaa;
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
                <Wrapper>
                    <LoupIcon />
                    <Info>
                        {!filterPhr && "Filter: none"}
                        {filterProp &&
                            filterPhr !== "" &&
                            `Filter: "${filterPhr}" in "${PROPERTIES_NAMES_MAP[filterProp]}"`}
                    </Info>
                </Wrapper>
            </HeaderElement>
            <HeaderElement>
                <Wrapper>
                    <DescendingIcon />
                    <Info>
                        {!sortProp && "Sort: none"}
                        {sortProp && (
                            <>
                                <span>
                                    {`Sort: ${DIRECTION_NAMES_MAP[sortDir]} in ${PROPERTIES_NAMES_MAP[sortProp]}`}
                                </span>
                            </>
                        )}
                    </Info>
                </Wrapper>
            </HeaderElement>
        </HeaderBody>
    );
};

export default TableHeader;
