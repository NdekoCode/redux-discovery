import React from "react";
import { connect } from "react-redux";
import {
  decrementAction,
  incrementAction,
} from "../../libs/store/counter/actions";
import { getCount } from "../../libs/store/counter/selectors";
const CounterContent = ({ count, increment, decrement }) => {
  return (
    <div className="p-12 shadow-lg rounded-lg flex items-center justify-center">
      <div className="custom-number-input  w-32">
        <label
          htmlFor="custom-input-number"
          className="w-full text-gray-700 text-sm font-semibold"
        >
          Counter Input
        </label>
        <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
          <button
            onClick={decrement}
            data-action="decrement"
            className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
          >
            <span className="m-auto text-2xl font-thin">−</span>
          </button>
          <div className=" flex justify-center outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default items-center text-gray-700  ">
            {count}
          </div>
          <button
            onClick={increment}
            data-action="increment"
            className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
          >
            <span className="m-auto text-2xl font-thin">+</span>
          </button>
        </div>
      </div>
    </div>
  );
};
const CounterStore = connect(getCount, (dispatch) => ({
  increment: () => dispatch(incrementAction),
  decrement: () => dispatch(decrementAction),
}))(CounterContent);
export default CounterStore;
