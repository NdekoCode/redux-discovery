import React from "react";
import { Provider } from "react-redux";
import counterStore from "../../store/counter";
import CounterStore from "../counter/CounterContent";

const Counter = () => {
  return (
    <Provider store={counterStore}>
      <CounterStore />
    </Provider>
  );
};
export default Counter;
