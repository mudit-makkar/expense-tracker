import React, { useContext, useState } from "react";
import { GlobalContext } from "../../GlobalContext";
import { Transaction } from "../Transaction/Transaction";
import styles from "./style.module.css";
export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  const [numberOfLoadedTransactions, setNumberOfLoadedTransactions] =
    useState(5);

  const loadMoreTransactions = () => {
    setNumberOfLoadedTransactions(numberOfLoadedTransactions + 5);
  };

  return (
    <div className={styles.container}>
      <h3>Transaction History</h3>
      <hr />
      <ul className={styles.transactionList}>
        {transactions
          .slice(0, numberOfLoadedTransactions)
          .map((transaction) => {
            return (
              <li key={transaction.id}>
                <Transaction transaction={transaction} />
              </li>
            );
          })}
      </ul>
      {numberOfLoadedTransactions < transactions.length ? (
        <button
          onClick={loadMoreTransactions}
          className={styles.loadMoreButton}
        >
          Load More Transactions
        </button>
      ) : (
        ""
      )}
    </div>
  );
};
