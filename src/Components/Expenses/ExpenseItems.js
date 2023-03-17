import React from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItems.css";
import Card from "../../UI/Card";
const ExpenseItems = (props) => {
  return (
    <Card className="expense-items">
      <div>
        <ExpenseDate date={props?.date} />
      </div>
      <div className="expense-title">{props.title}</div>
      <div className="expense-amount">
        <h2>${props.amount}</h2>
      </div>
    </Card>
  );
};

export default ExpenseItems;
