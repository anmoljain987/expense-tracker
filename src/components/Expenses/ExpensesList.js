import React from "react";
import { ExpenseItem } from "./ExpenseItem";
import "./ExpensesList.css";
function ExpensesList({ items }) {
  if (items.length === 0) {
    return (
      <h2 className="expenses-list__fallback">
        Going Good😍 ---- No Expenses found{" "}
      </h2>
    );
  }
  return (
    <ul className="expenses-list">
      {items.map((el) => (
        <ExpenseItem
          key={el.id}
          title={el.title}
          amount={el.amount}
          date={el.date}
        />
      ))}
    </ul>
  );
}

export default ExpensesList;
