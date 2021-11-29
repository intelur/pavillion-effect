import React from 'react'
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css'

const ExpensesList=(props)=> {

    if(props.items.length === 0){
       return <h2 className="expenses-list_fallback">Nema troškova sa ovim datumom</h2>
    }

    return (
        <ul className="expenses-list">
            {
                props.items.map(expense => <ExpenseItem key={expense.id} title={expense.title} type={expense.type} cijena={expense.amount} datum={expense.datum} />)
            }
        </ul>
    )
}

export default ExpensesList
