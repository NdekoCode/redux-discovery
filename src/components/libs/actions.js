import { createAction } from "@reduxjs/toolkit";
const actions = {
  counterIncrement: createAction("INCREMENT"),
  counterDecrement: createAction("DECREMENT"),
};
const bum = "Lol";
const myContentFunc = {
  [bum]: function () {
    console.log("Function expressement créer pour faire bu,");
  },
};
export const { Lol } = myContentFunc;
export default actions;
