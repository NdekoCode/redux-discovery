import { combineReducers, legacy_createStore as createStore } from "redux";
import { filterReducer } from "./filter/filterReducer";
import todoReducer from "./todos/todoReducer";

// Je créer mes actions
export const ADD_TODO_ACTION = "ADD_TODO_ACTION";
export const DELETE_TODO_ACTION = "DELETE_TODO_ACTION";
export const UPDATE_TODO_ACTION = "UPDATE_TODO_ACTION";
export const COMPLETE_TODO_ACTION = "COMPLETE_TODO_ACTION";

const incr = function (state = 0, action) {
  if (action.type === "incr") {
    console.log(state);
    return state + 1;
  }
  return state;
};
const store = createStore(
  combineReducers({
    todos: todoReducer,
    filter: filterReducer,
    incr: incr,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const increment = () => store.dispatch({ type: "incr" });
window.setInterval(increment, 1000);
export default store;
