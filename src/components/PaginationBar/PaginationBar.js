import React from "react";
import styled from "styled-components";

const PaginationBar = ({ changeOffset, offset, displayedElementsNumber }) => {
    const Bar = styled.div`
        display: flex;
        justify-content: space-around;
        background-color: lightblue;
        margin: 10px;
        padding: 10px;
        width: 100%;
    `;

    return (
        <Bar>
            <button
                onClick={() => changeOffset(offset - displayedElementsNumber)}
            >
                Prev {displayedElementsNumber}
            </button>
            <div>
                Page:
                {parseInt(offset / displayedElementsNumber + 1.5)}
            </div>
            <button
                onClick={() => changeOffset(offset + displayedElementsNumber)}
            >
                Next {displayedElementsNumber}
            </button>
        </Bar>
    );
};

export default PaginationBar;
