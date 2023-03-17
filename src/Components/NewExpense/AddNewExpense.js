import React, { useState } from "react";
import NewExpenseForm from "./NewExpenseForm";
import "./AddNewExpense.css";
const AddNewExpense = (props) => {
  const [newItem, setNewItem] = useState(false);
  const SaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
  };
  const AddNewExpenseHandler = () => {
    setNewItem(true);
  };
  const CancelHandler = () => {
    setNewItem(false);
  };

  return (
    <div className="expenseform">
      <div className="AddExp-button">
        {!newItem && (
          <button className="expense-add-button" onClick={AddNewExpenseHandler}>
            Add Expense
          </button>
        )}
      </div>
      {newItem && (
        <NewExpenseForm
          onSaveExpenseHandler={SaveExpenseDataHandler}
          onCancel={CancelHandler}
        />
      )}
    </div>
  );
};

export default AddNewExpense;
