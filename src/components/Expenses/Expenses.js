import React, { useState } from 'react'
import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'

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

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={setYear}
          className="expense-filter"
          onYearChange={selectedYearListener}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList expensesList={filteredExpenses}/>
      </Card>
    </div>
  )
}
export default Expenses
