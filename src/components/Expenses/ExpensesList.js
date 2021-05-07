import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
      
    if(props.expensesList.length === 0) {
        return <h2>No expenses found</h2>; 
    } else {
        return (
        <ul className="expenses-list">
        {props.expensesList.map((i) => (
            <ExpenseItem
              key={i.id}
              title={i.title}
              amount={i.amount}
              date={i.date}
            />
          ))}
          </ul>
        )}
}
export default ExpensesList;