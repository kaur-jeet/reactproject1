import React, { useState } from "react";
import "./NewExpenseForm.css";
const NewExpenseForm = (props) => {
  const [enteredTitle, setenteredTitle] = useState(" ");
  const [enteredAmount, setenteredAmount] = useState(" ");
  const [enteredDate, setenteredDate] = useState(" ");

  const TitleChangeHandler = (event) => {
    setenteredTitle(event.target.value);
  };
  const AmountChangeHandler = (event) => {
    setenteredAmount(event.target.value);
  };
  const DateChangeHandler = (event) => {
    setenteredDate(event.target.value);
  };
  const FormSubmitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      // ehnu date object bnayegi te fr e getFullYear function lggu, oh puraneya items te lgi janda hi new te fail hon dya hi
      date: new Date(enteredDate),
    };
    console.log("expenseData", expenseData);
    props.onSaveExpenseHandler(expenseData);
    setenteredTitle("");
    setenteredAmount("");
    setenteredDate("");
  };
  return (
    <div className="expense-form">
      <form onSubmit={FormSubmitHandler}>
        <div className="Title-amount">
          <div className="form-expense-items">
            <label className="label">Title</label>
            <input
              type="text"
              className="input-box"
              onChange={TitleChangeHandler}
              value={enteredTitle}
            ></input>
          </div>
          <div className="amount">
            <label className="label">Amount</label>
            <input
              type="number"
              className="input-box"
              onChange={AmountChangeHandler}
              value={enteredAmount}
            ></input>
          </div>
        </div>
        <div>
          <div className="form-expense-items">
            <label className="label">Date</label>
            <input
              type="date"
              className="input-box"
              onChange={DateChangeHandler}
              value={enteredDate}
              min="01-01-2020"
              max="01-12-2025"
            ></input>
          </div>
        </div>
        <div className="buttons-set">
          <button className="exp-add-button">Submit</button>
          <button className="exp-add-button">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default NewExpenseForm;
