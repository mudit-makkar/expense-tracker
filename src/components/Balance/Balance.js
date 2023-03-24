import React, { useContext } from "react";
import { GlobalContext } from "../../GlobalContext";
import styles from "./style.module.css";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  let balance = transactions.reduce((acc, current) => {
    return acc + current.amount;
  }, 0);

  return (
    <div className={styles.balanceContainer}>
      <h4>YOUR BALANCE</h4>
      <h2>
        {balance < 0 && "-"} ₹{Math.abs(balance).toFixed(2)}
      </h2>
    </div>
  );
};
