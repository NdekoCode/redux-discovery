import { createReducer } from "@reduxjs/toolkit";
import actions from "./actions";
const initialState = 0;
const { counterIncrement, counterDecrement } = actions;
const counterReducer = createReducer(initialState, {
  [counterIncrement.type]: (state) => state + 1,
  [counterDecrement.type]: (state) => (state > 0 ? state - 1 : state),
});
export default counterReducer;
