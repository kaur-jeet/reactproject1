import React, { useState } from "react";
import "./App.css";
import Expenses from "./Components/Expenses/Expenses";

import AddNewExpense from "./Components/NewExpense/AddNewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Flower Pot",
    amount: 94.12,
    date: new Date(2023, 21, 8),
  },
  {
    id: "e2",
    title: "Car insurance",
    amount: 494.12,
    date: new Date(2023, 22, 8),
  },
  {
    id: "e3",
    title: "rent",
    amount: 339.12,
    date: new Date(2023, 24, 8),
  },
  {
    id: "e4",
    title: "food items",
    amount: 944.67,
    date: new Date(2023, 21, 8),
  },
];
console.log("type of date", typeof date);

const App = (props) => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

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
