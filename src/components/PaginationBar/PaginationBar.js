import React from "react";
import styled from "styled-components";

const Bar = styled.div`
    display: flex;
    justify-content: space-around;
    background-color: lightblue;
    margin: 10px;
    padding: 10px;
    width: 100%;
`;

const PaginationBar = ({ changeOffset, offset, displayedCompaniesNumber }) => {
    return (
        <Bar>
            <button
                onClick={() => changeOffset(offset - displayedCompaniesNumber)}
            >
                Prev {displayedCompaniesNumber}
            </button>
            <div>
                Page:
                {parseInt(offset / displayedCompaniesNumber + 1.5)}
            </div>
            <button
                onClick={() => changeOffset(offset + displayedCompaniesNumber)}
            >
                Next {displayedCompaniesNumber}
            </button>
        </Bar>
    );
};

export default PaginationBar;
