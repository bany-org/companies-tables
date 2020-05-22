import React from "react";
import styled from "styled-components";

const TableHeader = ({
    changeDisplayedElementsNumber,
    displayedElementsNumber,
}) => {
    const HeaderBody = styled.div`
        display: flex;
        justify-content: left;
        background-color: lightblue;
        margin: 10px;
        padding: 10px;
        width: 100%;
    `;

    return (
        <HeaderBody>
            ile na stronie:
            <button onClick={() => changeDisplayedElementsNumber(10)}>
                10
            </button>
            <button onClick={() => changeDisplayedElementsNumber(20)}>
                20
            </button>
        </HeaderBody>
    );
};

export default TableHeader;
