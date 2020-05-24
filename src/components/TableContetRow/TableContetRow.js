import React from "react";
import styled from "styled-components";

const IdCell = styled.td`
    max-width: 100%;
    border-bottom: solid gray 1px;
    text-align: canter;
    font-weight: 700;
`;

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
            <IdCell>{offset + index + 1}</IdCell>
            <DataCell>{company.name}</DataCell>
            <DataCell>{company.city}</DataCell>
            <NumberDataCell>
                {Number(company.totalIncome).toFixed(2)}
            </NumberDataCell>
            <NumberDataCell>
                {Number(company.averageIncome).toFixed(2)}
            </NumberDataCell>
            <NumberDataCell>
                {Number(company.lastMonthIncome).toFixed(2)}
            </NumberDataCell>
            <NumberDataCell>{company.id}</NumberDataCell>
        </tr>
    );
};

export default TableContetRow;
