import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
  ////These are the state functions

  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')
  const [enteredDate, setEnteredDate] = useState('')

  ////These are the functions for the event handlers
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value)
  }
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value)
  }
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault()
    ////This object sets the values of the state props
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    ////This function is passed up to the NewExpense component
    props.onSaveExpenseData(expenseData)

    ////After the form is submitted, clear the fields, close this form
    setEnteredTitle('')
    setEnteredAmount('')
    setEnteredDate('')
  }

  const cancelFormHandler = () => {
    props.onCancelForm();
  }

  return (
<form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              onChange={titleChangeHandler}
              value={enteredTitle}
              required
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              onChange={amountChangeHandler}
              value={enteredAmount}
              required
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              onChange={dateChangeHandler}
              value={enteredDate}
              required
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={cancelFormHandler}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
  )
}
export default ExpenseForm