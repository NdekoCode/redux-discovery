import { configureStore } from "@reduxjs/toolkit";
import actions from "./actions";
import counterReducer from "./reducer";

const counterStore = configureStore({
  reducer: counterReducer,
});
counterStore.dispatch(actions.counterIncrement());

console.log(counterStore.getState());
export default counterStore;
