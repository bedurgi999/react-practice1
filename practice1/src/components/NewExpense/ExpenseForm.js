import "./ExpenseForm.css";
import { useState } from "react";

function ExpenseForm({ onSaveExpenseData, onCancel }) {
  const [expense, setExpense] = useState({
    id: "",
    title: "",
    amount: 0,
    date: "",
  });
  const expenseChangeHandler = (event) => {
    const { name, value } = event.target;
    setExpense((cur) => {
      const newExpense = { ...cur };
      newExpense[name] = value;
      return newExpense;
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    onSaveExpenseData({
      ...expense,
      id: Math.random().toString(),
      amount: +expense.amount,
      date: new Date(expense.date),
    });
    setExpense({
      id: "",
      title: "",
      amount: 0,
      date: "",
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={expense.title}
            onChange={expenseChangeHandler}
          />
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input
            type="number"
            name="amount"
            value={expense.amount}
            min="0.01"
            step="0.01"
            onChange={expenseChangeHandler}
          />
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input
            type="date"
            name="date"
            value={expense.date}
            min="2019-01-01"
            max="2022-12-31"
            onChange={expenseChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
