import React from "react";
import styled from "styled-components";

const DataCell = styled.td`
    max-width: 100%;
    border-bottom: solid gray 1px;
    text-align: left;
`;

const NumberDataCell = styled.td`
    max-width: 100%;
    border-bottom: solid gray 1px;
    text-align: right;
`;

const TableContetRow = ({ company, index, offset }) => {
    return (
        <tr key={company.id}>
            <DataCell>{offset + index + 1}</DataCell>
            <DataCell>{company.name}</DataCell>
            <DataCell>{company.city}</DataCell>
            <NumberDataCell>{company.totalIncome}</NumberDataCell>
            <NumberDataCell>{company.averageIncome}</NumberDataCell>
            <NumberDataCell>{company.lastMonthIncome}</NumberDataCell>
            <NumberDataCell>{company.id}</NumberDataCell>
        </tr>
    );
};

export default TableContetRow;
