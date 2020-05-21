import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
    const [isLoading, changeLoading] = useState(true);
    const [companies, updateCompanies] = useState([]);
    const [displayedCompanies, changeDisplayedCompanies] = useState([]);
    const [displayedElementsNumber, changeDisplayedElementsNumber] = useState(
        10
    );
    const [offset, changeOffset] = useState(0);

    useEffect(() => {
        axios
            .get(`https://recruitment.hal.skygate.io/companies`)
            .then((res) => {
                updateCompanies(res.data);
                changeDisplayedCompanies(res.data);
                changeLoading(false);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        const selectedCompanies = companies
            .sort((a, b) => a.id - b.id)
            .slice(offset, offset + displayedElementsNumber);

        axios
            .all(
                selectedCompanies.map((elem) =>
                    axios.get(
                        `https://recruitment.hal.skygate.io/incomes/${elem.id}`
                    )
                )
            )
            .then(
                axios.spread((...responses) => {
                    const companiesData = [...responses];

                    const updatedCompanies = companiesData.map((elem) => {
                        const companyToUpdate = selectedCompanies.find(
                            (company) => company.id === elem.data.id
                        );

                        const sumOfIncomes = elem.data.incomes.map(
                            (income) => income.value
                        );

                        const sum = sumOfIncomes.reduce(
                            (prev, curr) => parseFloat(prev) + parseFloat(curr)
                        );

                        console.log("element month", elem.data);

                        // const currentMonth
                        // const lastMonthSum

                        const updated = Object.assign(companyToUpdate, {
                            suma: sum,
                            avrg: sum / elem.data.incomes.length,
                        });

                        return updated;
                    });

                    changeDisplayedCompanies(updatedCompanies);
                })
            )
            .catch((errors) => {
                // react on errors.
            });
    }, [companies, offset, displayedElementsNumber]);

    console.log("render", displayedCompanies);

    return (
        <div className="App">
            <div>
                ile na stronie
                <select
                    onChange={(event) =>
                        changeDisplayedElementsNumber(
                            parseInt(event.target.value)
                        )
                    }
                    value={displayedElementsNumber}
                >
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                </select>
            </div>

            {isLoading && <h1>loading</h1>}
            {!isLoading &&
                displayedCompanies.map((elem) => (
                    <p key={elem.id}>
                        id:{elem.id} Income: {Number(elem.suma).toFixed(2)}{" "}
                        średnia: {Number(elem.avrg).toFixed(2)}
                    </p>
                ))}

            <div>
                <button
                    onClick={() =>
                        changeOffset(offset - displayedElementsNumber)
                    }
                >
                    Offset -{displayedElementsNumber}
                </button>
                <button
                    onClick={() =>
                        changeOffset(offset + displayedElementsNumber)
                    }
                >
                    Offset +{displayedElementsNumber}
                </button>
            </div>
        </div>
    );
}

export default App;
