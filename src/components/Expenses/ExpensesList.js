import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
    let expensesContent = <p>No expenses found</p>;
  
    if(props.expensesList.length > 0) {
      expensesContent = props.expensesList.map((i) => (
        <ExpenseItem
          key={i.id}
          title={i.title}
          amount={i.amount}
          date={i.date}
        />
      ))
    }
    return (
        <div>{expensesContent}</div>
    )
}
export default ExpensesList;