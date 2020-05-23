import React from "react";
import styled from "styled-components";

const HeaderBody = styled.div`
    display: flex;
    justify-content: left;
    background-color: lightblue;
    padding: 10px;
`;

const TableHeader = ({ clear }) => {
    return (
        <HeaderBody>
            Header
            <button onClick={clear}> Clear filters</button>
        </HeaderBody>
    );
};

export default TableHeader;
