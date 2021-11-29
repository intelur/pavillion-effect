import React from 'react'
import './ExpenseDate.css'

function ExpenseDate(props) {
    const month= props.datum.toLocaleString('sr-latn', {month:'long'});
    const day= props.datum.toLocaleString('sr-latn', {day:'2-digit'});
    const year= props.datum.getFullYear();
    return (
        <div className="expense-date">   
        <div className="expense-date-day">{day}</div>
        <div className="expense-date-month">{month}</div>
        <div className="expense-date-year">{year}</div>
    </div>
    )
}

export default ExpenseDate;
