import "./ExpenseItem.css";
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import React from 'react';

const ExpenseItem = (props) => {

  let title = props.title;

  const clickHandler = () => {
    console.log('Clicked!');
    title = 'Updated';
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
}

export default ExpenseItem;
