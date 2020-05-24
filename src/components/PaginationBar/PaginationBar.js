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
    border-radius: 10px;
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

const Info = styled.div`
    background-color: lightslategrey;
    border-radius: 10px;
    border: 2px solid gray;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    padding: 5px 10px;
    margin: 5px;
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
            <Info>
                <span>
                    Page:
                    {parseInt(offset / 20 + 1.5)}/{Math.ceil(itemsNumber / 20)}
                </span>
                <span>Results: {itemsNumber}</span>
            </Info>
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
