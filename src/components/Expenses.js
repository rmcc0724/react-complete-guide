import ExpenseItem from './ExpenseItem'
import './Expenses.css'


function Expenses(props) {
  const allExpenses = props.expenses.map((i) => (
    <ExpenseItem
      key={i.id}
      title={i.title}
      amount={i.amount}
      date={i.date}
    ></ExpenseItem>
  ))
  return <div className="expenses">{allExpenses}</div>
}
export default Expenses
