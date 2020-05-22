import React from "react";
import styled from "styled-components";

const Bar = styled.div`
    display: flex;
    justify-content: space-around;
    background-color: lightblue;
    padding: 10px;
`;

const PaginationBar = ({ changeOffset, offset, displayNumber }) => {
    return (
        <Bar>
            <button onClick={() => changeOffset(offset - displayNumber)}>
                Prev {displayNumber}
            </button>
            <div>
                Page:
                {parseInt(offset / displayNumber + 1.5)}
            </div>
            <button onClick={() => changeOffset(offset + displayNumber)}>
                Next {displayNumber}
            </button>
        </Bar>
    );
};

export default PaginationBar;
