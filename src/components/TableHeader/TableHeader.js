import React from "react";
import styled from "styled-components";

const HeaderBody = styled.div`
    display: flex;
    justify-content: left;
    background-color: lightblue;
    padding: 10px;
`;

const TableHeader = ({ changeDisplayNumber }) => {
    return (
        <HeaderBody>
            ile na stronie:
            <button onClick={() => changeDisplayNumber(10)}>10</button>
            <button onClick={() => changeDisplayNumber(20)}>20</button>
        </HeaderBody>
    );
};

export default TableHeader;
