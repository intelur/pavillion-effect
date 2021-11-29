import React,{useState} from 'react'
import ExpensesList from './ExpensesList';
import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
    const [filteredYear,setFilteredYear]=useState('2021');

    const filterChangeHandler=selectedYear => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(expense => {
        return expense.datum.getFullYear().toString() === filteredYear;
      });

      

    return (
        <div>
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList items={filteredExpenses}/>

        </Card>
        </div>
    );
}

export default Expenses
