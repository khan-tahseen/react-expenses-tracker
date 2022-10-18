import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHaldler = (enterdExpenseData) => {
    const expensedata = {
      ...enterdExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expensedata);
    setIsEditing(false); 
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditinghandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHaldler}
          onCancle={stopEditinghandler}
        />
      )}
    </div>
  );
};
export default NewExpense;
