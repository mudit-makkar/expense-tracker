import React, { useState, useContext } from "react";
import { GlobalContext } from "../../GlobalContext";
import styles from "./style.module.css";

export const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    let transactionAmount = Number(amount);
    if (selectedOption === "expense") transactionAmount *= -1;
    let newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text: text,
      amount: transactionAmount,
    };
    addTransaction(newTransaction);
    setText("");
    setAmount("");
    setSelectedOption("");
  };

  return (
    <div className={styles.container}>
      <h3>Add new transaction</h3>
      <hr />
      <form onSubmit={handleSubmit}>
        {/* text field */}
        <div>
          <label htmlFor="text" className={styles.label}>
            Text
          </label>{" "}
          <br />
          <input
            type="text"
            name="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className={styles.inputField}
            required
          />
        </div>

        {/* amount field */}
        <div>
          <label htmlFor="amount" className={styles.label}>
            Amount
          </label>{" "}
          <br />
          <input
            type="number"
            name="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className={styles.inputField}
            min="1"
            required
          />
        </div>

        {/* transaction type */}
        <div style={{ margin: "10px 0px", lineHeight: "20px" }}>
          <div>
            {" "}
            <input
              type="radio"
              name="transactionType"
              id="incomeType"
              style={{ cursor: "pointer" }}
              value="income"
              checked={selectedOption === "income"}
              onChange={(e) => setSelectedOption(e.target.value)}
              required
            />
            <label htmlFor="incomeType" className={styles.label}>
              Income
            </label>{" "}
          </div>
          <div>
            <input
              type="radio"
              name="transactionType"
              id="expenseType"
              style={{ cursor: "pointer" }}
              value="expense"
              checked={selectedOption === "expense"}
              onChange={(e) => setSelectedOption(e.target.value)}
              required
            />
            <label htmlFor="expenseType" className={styles.label}>
              Expense
            </label>
          </div>
        </div>

        <div>
          <button type="submit" className={styles.submitButton}>
            Add Transaction
          </button>
        </div>
      </form>
    </div>
  );
};
