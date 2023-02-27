import React, { useState, useContext } from "react";
import { GlobalContext } from "../../GlobalContext";
import styles from "./style.module.css";

export const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    let newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text: text,
      amount: Number(amount),
    };
    addTransaction(newTransaction);
    setText("");
    setAmount(0);
  };

  return (
    <div className={styles.container}>
      <h3>Add new transaction</h3>
      <hr />
      <form onSubmit={handleSubmit}>
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
        <div>
          <label htmlFor="amount" className={styles.label}>
            Amount (income - positive , expense - negative)
          </label>{" "}
          <br />
          <input
            type="number"
            name="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className={styles.inputField}
            required
          />
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
