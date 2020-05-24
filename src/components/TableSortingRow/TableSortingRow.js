import React from "react";
import styled from "styled-components";
import DescendingIcon from "../assets/DescendingIcon/DescendingIcon";
import { PROPERTIES_LIST, PROPERTIES_NAMES_MAP } from "../constants";

const DataCell = styled.td`
    max-width: 100%;
    border: 1px solid green;
    cursor: pointer;
    align-items: center;
    background-color: ${(props) => (props.active ? "greenyellow" : "")};
    &:hover {
        background-color: greenyellow;
    }
    text-align: center;
    font-weight: 600;
    box-shadow: 1px 1px #aaaaaa;
    border-radius: 5px;
`;

const TableSortingRow = ({ onSortChange, sortProperty, sortDirection }) => {
    return (
        <tr>
            <td>
                <DescendingIcon />
            </td>
            {PROPERTIES_LIST.map((property) => (
                <DataCell
                    onClick={() => onSortChange(property)}
                    active={sortProperty === property}
                    key={property}
                >
                    <span>{PROPERTIES_NAMES_MAP[property]}</span>
                </DataCell>
            ))}
        </tr>
    );
};

export default TableSortingRow;
