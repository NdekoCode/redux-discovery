import { createReducer } from "@reduxjs/toolkit";
import actions from "./actions";
const initialState = 0;
const { counterIncrement, counterDecrement } = actions;
const CounterReducer = createReducer(initialState, {
  [counterIncrement]: (state) => state + 1,
  [counterDecrement]: (state) => (state > 0 ? state - 1 : state),
});
export default CounterReducer;
