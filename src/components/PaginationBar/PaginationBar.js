import React from "react";
import styled from "styled-components";

const Bar = styled.div`
    display: flex;
    justify-content: space-around;
    background-color: lightblue;
    padding: 10px;
`;

const PaginationBar = ({ changeOffset, offset, itemsNumber }) => {
    return (
        <Bar>
            <button
                onClick={() => changeOffset(0)}
                disabled={offset === 0 ? true : false}
            >
                First page
            </button>
            <button
                onClick={() => changeOffset(offset - 20)}
                disabled={offset - 20 < 0 ? true : false}
            >
                Prev
            </button>
            <div>
                Page:
                {parseInt(offset / 20 + 1.5)}
                of:
                {Math.ceil(itemsNumber / 20)}
                <br />
                Results: {itemsNumber}
            </div>
            <button
                onClick={() => changeOffset(offset + 20)}
                disabled={offset >= itemsNumber - 20 ? true : false}
            >
                Next
            </button>
            <button
                onClick={() => changeOffset(itemsNumber - 20)}
                disabled={offset >= itemsNumber - 20 ? true : false}
            >
                Last
            </button>
        </Bar>
    );
};

export default PaginationBar;
