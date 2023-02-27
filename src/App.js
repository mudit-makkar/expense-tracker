import React, { useEffect, useReducer } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Balance } from "./components/Balance/Balance";
import { IncomeExpense } from "./components/IncomeExpense/IncomeExpense";
import { AddTransaction } from "./components/AddTransaction/AddTransaction";
import AppReducer from "./AppReducer";
import { GlobalContext } from "./GlobalContext";
import { TransactionList } from "./components/TransactionList/TransactionList";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const App = () => {
  const initialState = { transactions: [] };
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //on first render getting the state from local storage
  useEffect(() => {
    let appState = localStorage.getItem("state");
    if (appState != null) {
      dispatch({
        type: "SET_STATE",
        payload: JSON.parse(appState),
      });
    }
  }, []);

  const addTransaction = (transaction) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
    toast("Transaction added!");
  };
  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
    toast("Transaction deleted!");
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
        deleteTransaction,
      }}
    >
      <div className="app-container">
        <ToastContainer position="top-right" autoClose={1000} />
        <Header />
        <Balance />
        <IncomeExpense />
        <AddTransaction />
        <TransactionList />
      </div>
    </GlobalContext.Provider>
  );
};

export default App;
