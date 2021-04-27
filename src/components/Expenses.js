import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import Card from './Card'

function Expenses(props) {
  const allExpenses = props.expenses.map((i) => (
    <ExpenseItem
      key={i.id}
      title={i.title}
      amount={i.amount}
      date={i.date}
    />
  ))
  return (
  <Card className="expenses">{allExpenses}</Card>
  )
}
export default Expenses
