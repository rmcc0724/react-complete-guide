import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'

const Expenses = (props) => {
  const [setYear, selectedYear] = useState('2020')

  ///If the year us changed, update the state with the selected year
  const selectedYearListener = (year) => {
    selectedYear(year)
  }

  ///After the state is updated with the current year, re-render the component and show expenses for the selected year
  const filteredExpenses = props.expenses.filter((i) => {
    return i.date.getFullYear().toString() === setYear
  })

  let expensesContent = <p>No expenses found</p>;
  
  if(filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((i) => (
      <ExpenseItem
        key={i.id}
        title={i.title}
        amount={i.amount}
        date={i.date}
      />
    ))
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={setYear}
          className="expense-filter"
          onYearChange={selectedYearListener}
        />
        {expensesContent}
      </Card>
    </div>
  )
}
export default Expenses
