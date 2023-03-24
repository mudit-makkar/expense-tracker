import React, { useContext } from "react";
import { GlobalContext } from "../../GlobalContext";
import styles from "./style.module.css";
export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  let sign = transaction.amount >= 0 ? "+" : "-";

  return (
    <div
      className={styles.transaction}
      style={{
        borderLeft:
          transaction.amount > 0 ? "4px solid green" : "4px solid red",
      }}
    >
      <div className={styles.deleteButtonContainer}>
        <button
          className={styles.deleteButton}
          onClick={() => deleteTransaction(transaction.id)}
        >
          x
        </button>
      </div>
      <div className={styles.textContainer}>{transaction.text}</div>
      <div
        className={styles.amount}
        style={{ color: transaction.amount > 0 ? "green" : "red" }}
      >
        {sign} ₹{Math.abs(transaction.amount).toFixed(2)}
      </div>
    </div>
  );
};
