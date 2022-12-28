import { createAction } from "@reduxjs/toolkit";
const actions = {
  counterIncrement: createAction("INCREMENT"),
  counterDecrement: createAction("DECREMENT"),
};
export default actions;
