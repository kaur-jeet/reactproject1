import React from "react";
import ExpenseItems from "../ExpenseItems";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="Expenses-content">Found no expenses.</h2>;
  }
  return (
    <ul className="Expense-List">
      {props.items.map((expense) => (
        <ExpenseItems
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};
export default ExpensesList;
