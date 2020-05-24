import React from "react";
import styled from "styled-components";

import LoupIcon from "../assets/LoupIcon/LoupIcon";

const SearchField = styled.div`
    display: flex;
`;

const InputField = styled.input`
    border: solid 1px red;
    border-radius: 5px;
    width: 100%;
    background-color: ${(props) => (props.active ? "pink" : "")};
    &:hover {
        background-color: pink;
    }
    box-shadow: 1px 1px #aa8888;

    @media (max-width: 1024px) {
        font-size: 10px;
    }
`;

const DataField = styled.td`
    max-width: 100%;
`;

const TableFilteringRow = ({
    onFilterChange,
    filterProperty,
    filterPhrase,
}) => {
    return (
        <tr>
            <DataField>
                <LoupIcon />
            </DataField>
            <DataField>
                <SearchField>
                    <InputField
                        type="text"
                        onChange={(e) =>
                            onFilterChange("name", e.target.value.toLowerCase())
                        }
                        value={filterProperty !== "name" ? "" : filterPhrase}
                        active={
                            filterProperty === "name" && filterPhrase !== ""
                        }
                        placeholder=" e.g. Hammes"
                    />
                </SearchField>
            </DataField>
            <DataField>
                <InputField
                    type="text"
                    onChange={(e) =>
                        onFilterChange("city", e.target.value.toLowerCase())
                    }
                    value={filterProperty !== "city" ? "" : filterPhrase}
                    active={filterProperty === "city" && filterPhrase !== ""}
                    placeholder=" e.g. East Rose"
                />
            </DataField>
            <DataField>
                <InputField
                    type="text"
                    onChange={(e) =>
                        onFilterChange(
                            "totalIncome",
                            e.target.value.toLowerCase()
                        )
                    }
                    value={filterProperty !== "totalIncome" ? "" : filterPhrase}
                    active={
                        filterProperty === "totalIncome" && filterPhrase !== ""
                    }
                    placeholder=" e.g. 233050"
                />
            </DataField>
            <DataField>
                <InputField
                    type="text"
                    onChange={(e) =>
                        onFilterChange(
                            "averageIncome",
                            e.target.value.toLowerCase()
                        )
                    }
                    value={
                        filterProperty !== "averageIncome" ? "" : filterPhrase
                    }
                    active={
                        filterProperty === "averageIncome" &&
                        filterPhrase !== ""
                    }
                    placeholder=" e.g. 4668"
                />
            </DataField>
            <DataField>
                <InputField
                    type="text"
                    onChange={(e) =>
                        onFilterChange(
                            "lastMonthIncome",
                            e.target.value.toLowerCase()
                        )
                    }
                    value={
                        filterProperty !== "lastMonthIncome" ? "" : filterPhrase
                    }
                    active={
                        filterProperty === "lastMonthIncome" &&
                        filterPhrase !== ""
                    }
                    placeholder=" e.g. 9964"
                />
            </DataField>
            <DataField>
                <InputField
                    type="text"
                    onChange={(e) =>
                        onFilterChange("id", e.target.value.toLowerCase())
                    }
                    value={filterProperty !== "id" ? "" : filterPhrase}
                    active={filterProperty === "id" && filterPhrase !== ""}
                    placeholder=" e.g. 12"
                />
            </DataField>
        </tr>
    );
};

export default TableFilteringRow;
