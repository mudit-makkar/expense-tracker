import React, { useContext } from "react";
import { GlobalContext } from "../../GlobalContext";
import styles from "./style.module.css";

export const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext);

  //calculating the income
  let income = transactions.reduce((acc, current) => {
    if (current.amount > 0) acc = acc + current.amount;
    return acc;
  }, 0);

  // calculating the expenses
  let expense = transactions.reduce((acc, current) => {
    if (current.amount < 0) acc = acc + current.amount;
    return acc;
  }, 0);

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <h3>INCOME</h3>
        <h3 className={styles.income}>₹{income.toFixed(2)}</h3>
      </div>
      <div className={styles.subContainer}>
        <h3>EXPENSE</h3>
        <h3 className={styles.expense}>₹{Math.abs(expense).toFixed(2)}</h3>
      </div>
    </div>
  );
};
