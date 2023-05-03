import React, { useEffect, useState } from "react";

import "./Expenses.css";
import Card from "../../../UI/Card";
import ExpensesFilter from "../ExpensesFilter";
import ExpensesList from "../ExpensesList";
import ExpenseChart from "../ExpenseChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");
  const [filteredExpenses, setFilteredExpenses] = useState([]);

  useEffect(() => {
    const expenses = props.items.filter((expense) => {
      return expense.date.getFullYear().toString() === filteredYear;
    });

    setFilteredExpenses(expenses);
  }, [filteredYear, props.items]);

  const filterChangeHandler = (selectedYear) => {
    console.log(selectedYear);
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        OnFilterChange={filterChangeHandler}
      />
      <ExpenseChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
