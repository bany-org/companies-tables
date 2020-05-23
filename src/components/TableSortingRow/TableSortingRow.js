import React from "react";
import styled from "styled-components";
import DescendingIcon from "../assets/DescendingIcon/DescendingIcon";
import AscendingIcon from "../assets/AscendingIcon/AscendingIcon";

const Row = styled.tr`
    display: flex;
`;

const DataCell = styled.td`
    max-width: 100%;
    border: 1px solid green;
    cursor: pointer;
    align-items: center;
    background-color: ${(props) => (props.active ? "greenyellow" : "")};
`;

const TableSortingRow = ({ onSortChange, sortProperty, sortDirection }) => {
    return (
        <tr>
            <DataCell>
                <DescendingIcon />
            </DataCell>
            <DataCell
                onClick={() => onSortChange("name")}
                active={sortProperty === "name"}
            >
                <span>Name</span>
                <span>
                    {sortProperty === "name" &&
                        (sortDirection === "ASC" ? (
                            <AscendingIcon />
                        ) : (
                            <DescendingIcon />
                        ))}
                </span>
            </DataCell>
            <DataCell
                onClick={() => onSortChange("city")}
                active={sortProperty === "city"}
            >
                <span>City</span>
                <span>
                    {sortProperty === "city" &&
                        (sortDirection === "ASC" ? (
                            <AscendingIcon />
                        ) : (
                            <DescendingIcon />
                        ))}
                </span>
            </DataCell>
            <DataCell
                onClick={() => onSortChange("totalIncome")}
                active={sortProperty === "totalIncome"}
            >
                <span>Total Income</span>
                <span>
                    {sortProperty === "totalIncome" &&
                        (sortDirection === "ASC" ? (
                            <AscendingIcon />
                        ) : (
                            <DescendingIcon />
                        ))}
                </span>
            </DataCell>
            <DataCell onClick={() => onSortChange("averageIncome")}>
                Average Income
            </DataCell>
            <DataCell onClick={() => onSortChange("lastMonthIncome")}>
                Last month totalIncome
            </DataCell>
            <DataCell onClick={() => onSortChange("id")}>Id</DataCell>
        </tr>
    );
};

export default TableSortingRow;
