import React, { useState } from 'react';
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const changeTitleHandler = () => {
    setTitle('Updated');
    console.log(title);
  }

// class ExpenseItem extends React.Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       title: this.props.title
//     }
//   }

  // changeTitleHandler() {
  //   this.setState({
  //     title: 'Updated !!!!'
  //   });
  //   console.log('Title Updated');
  // }

  // render () {
    return (
      <Card className="expense-item">
        <ExpenseDate date={props.date}/>
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">{props.amount}</div>
        </div>
        <button onClick={changeTitleHandler}>Change Title</button>
      </Card>
    )
    // }

}

export default ExpenseItem
