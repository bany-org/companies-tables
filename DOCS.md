## General info

Author: Jakub Banasiak

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

It contains icons made by [Freepik](https://www.flaticon.com/authors/freepik). from [www.flaticon.com](https://www.flaticon.com/).

[Project link](https://bany-org.github.io/companies-tables/)

## Project details

Displayed data:

-   `id`,
-   `name`,
-   `city`,
-   `total income (sum of company incomes)`,
-   `average income (average of company incomes)`,
-   `last month income (sum of last month incomes)`,

Table functions:

`Sorting` all properties by clicking on property name.

-   `First click` - enable ascending sort (from `a` to `z` or from smallest to largest number),
-   `second click` - enable descending sort (from `z` to `a` or from largest to smallest number),
-   `third click` - disable sort.

`Filtering` all properties by enter phrase into property search field.

`Clear filters` - (header button) - clears all active sorting and filters.

`Active sorting and filters` - are displayed on table header.

`Pagination` - all results are divided into 20 (or less if filtered) elements per page.

Navigation buttons:

-   `First page` - move to first 20 (or less if filtered) results

-   `Prev` - move to previous 20 results

-   `Next` - move to next 20 results

-   `Last page` - move to last 20 (or less if filtered) results

Pagination info:

-   `Current page` / `Total pages numer for apllied filter`

-   `Number of results for applied filter`

## Data prepare

App component fetch companies list from [ENDPOINT](https://recruitment.hal.skygate.io/companies) and fetching all incomes for each company from [ENDPOINT](https://recruitment.hal.skygate.io/incomes/:id).

Each company income is parsed and counted to `totalIncome`, `averageIncome`, and `lastMonthIncome` <b>- january is hardcoded becouse of no data in next months</b>.

Companies list with all data is passed to Table component.

<pre>
{
    id: [Number],
    name: [String],
    city: [String],
    totalIncomeValue: [String],
    averageIncome: [String]
    lastMonthValue: [String]
}
</pre>
