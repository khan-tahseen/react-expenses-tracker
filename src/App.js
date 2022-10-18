import { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  { id: "e1", title: "Bike", amount: 130.6, date: new Date(2020, 3, 14) },
  {
    id: "e2",
    title: "Car Insurance",
    amount: 760.6,
    date: new Date(2021, 3, 14),
  },
  { id: "e3", title: "Jacket", amount: 15.2, date: new Date(2021, 6, 24) },
  { id: "e4", title: "Smart TV", amount: 40.6, date: new Date(2020, 1, 10) },
  { id: "e5", title: "Blazer", amount: 21.2, date: new Date(2022, 5, 12) },
  {
    id: "e4",
    title: "Washing Machine",
    amount: 30,
    date: new Date(2021, 12, 5),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
