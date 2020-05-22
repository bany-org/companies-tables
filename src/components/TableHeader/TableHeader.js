import React from "react";
import styled from "styled-components";

const HeaderBody = styled.div`
    display: flex;
    justify-content: left;
    background-color: lightblue;
    margin: 10px;
    padding: 10px;
    width: 100%;
`;

const TableHeader = ({ changeDisplayedCompaniesNumber }) => {
    return (
        <HeaderBody>
            ile na stronie:
            <button onClick={() => changeDisplayedCompaniesNumber(10)}>
                10
            </button>
            <button onClick={() => changeDisplayedCompaniesNumber(20)}>
                20
            </button>
        </HeaderBody>
    );
};

export default TableHeader;
