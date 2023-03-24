import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../GlobalContext";
import { Transaction } from "../Transaction/Transaction";
import styles from "./style.module.css";
export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <div className={styles.container}>
      <h3>Transaction History</h3>
      <hr />
      <ul className={styles.transactionList}>
        {transactions.map((transaction) => {
          return (
            <li key={transaction.id}>
              <Transaction transaction={transaction} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
