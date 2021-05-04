import React, {useState} from 'react';
import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
  const [setYear, selectedYear] = useState('2020');

  const selectedYearListener = (year) => {
    selectedYear(year);
  }


console.log(setYear);
  return (
  <div>
  <Card className='expenses'>
  <ExpensesFilter selected={setYear} className='expense-filter' onYearChange={selectedYearListener}/>
{props.expenses.map((i) => (
    <ExpenseItem
      key={i.id}
      title={i.title}
      amount={i.amount}
      date={i.date}
    />))}

</Card>
  </div>
  )
}
export default Expenses
