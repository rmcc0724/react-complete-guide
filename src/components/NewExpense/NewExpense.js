import React, { useState } from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
  const [formState, setFormState] = useState(false)

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    }
    props.onAddExpense(expenseData)
    setFormState(() => {
      return false;
    })
  }

  const openFormHandler = () => {
    setFormState(() => {
      return true;
    })
  }

  const cancelForm = () => {
    setFormState(() => {
      return false;
    })
  }

  return (
    <div className="new-expense">
      {/* onSaveExpenseData is passed up from the ExpenseForm component */}
      {!formState && <button type="button" onClick={openFormHandler}>
        Add New Expense
      </button>}
      {formState && <ExpenseForm onCancelForm={cancelForm} onSaveExpenseData={saveExpenseDataHandler} />}
    </div>
  )
}
export default NewExpense
