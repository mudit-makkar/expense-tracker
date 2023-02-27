export default function AppReducer(state, action) {
  let newState;
  switch (action.type) {
    case "SET_STATE":
      newState = { ...action.payload };
      break;

    case "ADD_TRANSACTION":
      newState = {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
      break;

    case "DELETE_TRANSACTION":
      newState = {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
      break;
    default:
      newState = state;
  }
  localStorage.setItem("state", JSON.stringify(newState));
  return newState;
}
