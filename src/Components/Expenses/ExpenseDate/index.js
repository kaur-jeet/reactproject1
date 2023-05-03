import React from "react";
import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  console.log("date", props, props?.date?.getFullYear());
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props?.date?.getFullYear();

  console.log("The type of variable is", typeof date);

  return (
    <div className="expense-date">
      <div className="expense-date-month">{month}</div>
      <div className="expense-date-year">{year}</div>
      <div className="expense-date-day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
