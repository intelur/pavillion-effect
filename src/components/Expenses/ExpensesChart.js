import React from 'react'
import Chart from '../Chart/Chart'

const ExpensesChart = props => {
const chartDataPoints = [
    {label:"Jan", value:0},
    {label:"Feb", value:0},
    {label:"Mar", value:0},
    {label:"Apr", value:0},
    {label:"Maj", value:0},
    {label:"Jun", value:0},
    {label:"Jul", value:0},
    {label:"Aug", value:0},
    {label:"Sep", value:0},
    {label:"Okt", value:0},
    {label:"Nov", value:0},
    {label:"Dec", value:0}
];

for (const expense of props.expenses){
    const expenseMonth = expense.datum.getMonth();
    chartDataPoints[expenseMonth].value += expense.amount;
}

    return (
        <Chart chartPoints={chartDataPoints} />
    )
}


export default ExpensesChart
