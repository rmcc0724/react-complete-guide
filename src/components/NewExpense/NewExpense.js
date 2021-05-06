import React from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };
    props.onAddExpense(expenseData);
  };
  return (
    <div className='new-expense'>
      {/* onSaveExpenseData is passed up from the ExpenseFrom component */}
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
  )
} 
export default NewExpense