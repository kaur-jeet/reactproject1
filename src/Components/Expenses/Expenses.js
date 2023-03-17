import React, { useState } from "react";
import ExpenseItems from "./ExpenseItems";
import "./Expenses.css";
import Card from "../../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
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
      {FilteredExpenses.map((expense) => (
        <ExpenseItems
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
