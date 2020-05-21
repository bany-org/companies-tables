import React, { useState, useEffect } from "react";

const Table = ({ companies2 }) => {
    // const [sortType, changeSortType] = useState("id");

    // const sortCompanies = (property, direction) => {
    //     const comp = companies2.sort((a, b) => (a.suma < b.suma ? 1 : -1));
    //     console.log("posortowane", comp);
    // };

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>City</td>
                        <td>Total income</td>
                        <td>Average income</td>
                    </tr>
                </thead>
                <tbody>
                    {/* {sortCompanies()} */}
                    {companies2.map((elem) => (
                        <tr key={elem.id}>
                            <td>{elem.id}</td>
                            <td>{elem.name}</td>
                            <td>{elem.city}</td>
                            <td>{Number(elem.suma).toFixed(2)}</td>
                            <td>{Number(elem.avrg).toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
