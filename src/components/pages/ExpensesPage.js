import React, {useState} from "react";
import Expenses from "../Expenses/Expenses.js";
import NewExpense from "../NewExpense/NewExpense.js";
import "../../App.css";
import Navbar from "../Navbar/Navbar";



function ExpensesPage() {
  const DUMMY_ARRAY=[
    {id:1,title:'Running', type:'physical' ,amount:300, datum:new Date(2021, 2, 28)},
  ]
  const [expenses, setExpenses] = useState(DUMMY_ARRAY);
  const addExpenseHandler = (expense)=>{
    setExpenses(prevExpense =>{
      return [expense, ...prevExpense]
    });
  }

  return (
    <div>
    <Navbar/>
    <div className="tasks">
              <h1
          className='display-2 text-center text-white mb-3 task-content'
          style={{ zIndex: 2, paddingTop:'5%', }}
        >
          Track your habits
        </h1>
        <p style={{color:'white', textAlign: 'center', fontSize:'24px'}}> Set your new habit that you want to improve this month.</p>
              <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses}></Expenses>

    </div>
    </div>
  )
}

export default ExpensesPage;


