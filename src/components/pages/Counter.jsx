import React from "react";
import { Provider } from "react-redux";
import counterStore from "../../store/counter";
import CounterContent from "../CounterContent";

const Counter = () => {
  return (
    <Provider store={counterStore}>
      <CounterContent />
    </Provider>
  );
};
export default Counter;
