import React, { useState } from "react";

import "./Expenses.css";
import Card from "../../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";
const Expenses = (props) => {
  const [FilteredYear, SetFilteredYear] = useState(2020);
  const FilterChangeHandler = (selectedYear) => {
    console.log(Expenses.js);
    console.log(selectedYear);
    SetFilteredYear(selectedYear);
  };
  const FilteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === FilteredYear;
  });
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={FilteredYear}
        OnFilterChange={FilterChangeHandler}
      />
      <ExpenseChart expenses={FilteredExpenses} />
      <ExpensesList items={FilteredExpenses} />
    </Card>
  );
};

export default Expenses;
