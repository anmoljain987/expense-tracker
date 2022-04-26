import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
function NewExpense({ onAddExpenseData }) {
  const [isEditing, setIsEditing] = useState(false);
  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: uuid(),
    };
    onAddExpenseData(expenseData);
    setIsEditing(false);
  }
  function showButtonHandler() {
    setIsEditing(true);
  }
  function stopEditingHandler() {
    setIsEditing(false);
  }
  return (
    <div className="new-expense">
      {isEditing ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      ) : (
        <button onClick={showButtonHandler}>Add Expenses</button>
      )}
    </div>
  );
}

export default NewExpense;
