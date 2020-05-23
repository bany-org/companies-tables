import React from "react";
import styled from "styled-components";

const DataCell = styled.td`
    max-width: 100%;
    border-bottom: solid gray 1px;
`;

const TableContetRow = ({ company, index, offset }) => {
    return (
        <tr key={company.id}>
            <DataCell>{offset + index + 1}</DataCell>
            <DataCell>{company.name}</DataCell>
            <DataCell>{company.city}</DataCell>
            <DataCell>{company.totalIncome}</DataCell>
            <DataCell>{company.averageIncome}</DataCell>
            <DataCell>{company.lastMonthIncome}</DataCell>
            <DataCell>{company.id}</DataCell>
        </tr>
    );
};

export default TableContetRow;
