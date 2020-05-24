import React from "react";
import styled from "styled-components";

const Bar = styled.div`
    display: flex;
    justify-content: space-around;
    background-color: lightblue;
    padding: 10px;
    border-radius: 10px;
`;

const Button = styled.button`
    background-color: lightgreen;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 10px;
    cursor: pointer;
    border: 1px solid green;
    &:hover {
        background-color: green;
    }
    box-shadow: 2px 2px #aaaaaa;
`;

const PaginationBar = ({ changeOffset, offset, itemsNumber }) => {
    return (
        <Bar>
            <Button
                onClick={() => changeOffset(0)}
                disabled={offset === 0 ? true : false}
            >
                {"<< First page"}
            </Button>
            <Button
                onClick={() => changeOffset(offset - 20)}
                disabled={offset - 20 < 0 ? true : false}
            >
                {"< Prev"}
            </Button>
            <div>
                Page:
                {parseInt(offset / 20 + 1.5)}/{Math.ceil(itemsNumber / 20)}
                <br />
                Results: {itemsNumber}
            </div>
            <Button
                onClick={() => changeOffset(offset + 20)}
                disabled={offset >= itemsNumber - 20 ? true : false}
            >
                {"Next >"}
            </Button>
            <Button
                onClick={() => changeOffset(itemsNumber - 20)}
                disabled={offset >= itemsNumber - 20 ? true : false}
            >
                {"Last page >>"}
            </Button>
        </Bar>
    );
};

export default PaginationBar;
