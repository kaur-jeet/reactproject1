import React, { useState } from "react";
import "./App.css";
import Expenses from "./Components/Expenses/Expenses";

import AddNewExpense from "./Components/NewExpense/AddNewExpense";

const App = (props) => {
  const [expenses, setExpenses] = useState([]);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });

    console.log(expense);
  };

  return (
    <div className="main">
      <AddNewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
