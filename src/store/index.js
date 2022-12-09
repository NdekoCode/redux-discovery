import { combineReducers, createStore } from "redux";
import todoReducer from "./todoReducer";

// Je créer mes actions
export const ADD_TODO_ACTION = "ADD_TODO_ACTION";
export const DELETE_TODO_ACTION = "DELETE_TODO_ACTION";
export const UPDATE_TODO_ACTION = "UPDATE_TODO_ACTION";
export const COMPLETE_TODO_ACTION = "COMPLETE_TODO_ACTION";

export const store = createStore(
  combineReducers({
    todos: todoReducer,
    filter: (state = 0, action) => state,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
