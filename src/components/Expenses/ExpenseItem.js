import React from 'react'
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'
import Card from '../UI/Card'

const ExpenseItem=(props) => {


    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate datum={props.datum} />
                <div className="expense-item-desc">
                    <h2>{props.title}</h2>
                    <h2>{props.type}</h2>
                    <div className="expense-item-price">{props.cijena} Points</div>
                </div>
            </Card>
        </li>
    )
}

export default ExpenseItem
