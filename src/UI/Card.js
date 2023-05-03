import React from "react";
import "./Card.css";
import "../Components/Expenses/ExpenseItems/ExpenseItems.css";

const Card = (props) => {
  const classes = `card ${props.className}`;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
