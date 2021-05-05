import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'

const Expenses = (props) => {
  const [setYear, selectedYear] = useState('2020')

  const selectedYearListener = (year) => {
    selectedYear(year)
  }

  const filteredExpenses = props.expenses.filter((i) => {
    return i.date.getFullYear().toString() === setYear
  })

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={setYear}
          className="expense-filter"
          onYearChange={selectedYearListener}
        />
        {filteredExpenses.map((i) => (
          <ExpenseItem
            key={i.id}
            title={i.title}
            amount={i.amount}
            date={i.date}
          />
        ))}
      </Card>
    </div>
  )
}
export default Expenses
