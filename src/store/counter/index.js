import { legacy_createStore as createStore } from "redux";
import { decrementAction, incrementAction } from "./actions";
import { counterReducer } from "./reducer";

const counterStore = createStore(
  counterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export const increment = () => counterStore.dispatch(incrementAction);
export const decrement = () => counterStore.dispatch(decrementAction);
export default counterStore;
