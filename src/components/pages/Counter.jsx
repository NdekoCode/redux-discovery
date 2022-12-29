import React from "react";
import { Provider } from "react-redux";
import counterStore from "../../libs/store/counter";
import CounterStore from "../counter/CounterContent";
console.log(counterStore.getState());
const Counter = () => {
  return (
    <Provider store={counterStore}>
      <CounterStore />
    </Provider>
  );
};
export default Counter;
