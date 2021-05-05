import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'

const Expenses = (props) => {
  const [setYear, selectedYear] = useState('2020')
  const [setExpenses, selectedExpenses] = useState(props.expenses)

  const selectedYearListener = (year) => {
    const yearExpenses = props.expenses.filter((i) =>
      i.date.getFullYear().toString() === year.toString() ? i : null,
    )
    const setNewYear = async () =>
      selectedYear(() => {
        return year
      });
      
      setNewYear().then(() => {
      selectedExpenses(()=>{
        return yearExpenses;
      })
    })
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={setYear}
          className="expense-filter"
          onYearChange={selectedYearListener}
        />
        {setExpenses.map((i) => (
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
