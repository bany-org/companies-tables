import React from "react";
import styled from "styled-components";

const HeaderBody = styled.div`
    display: flex;
    justify-content: left;
    background-color: lightblue;
    padding: 10px;
`;

const TableHeader = () => {
    return <HeaderBody>Header</HeaderBody>;
};

export default TableHeader;
