import {
  ADD_TODO_ACTION,
  COMPLETE_TODO_ACTION,
  DELETE_TODO_ACTION,
  UPDATE_TODO_ACTION,
} from "..";

export const toggleTodoAction = (todo) => ({
  type: UPDATE_TODO_ACTION,
  payload: { ...todo, completed: !todo.completed },
});
export const deleteTodoAction = (id) => ({
  type: DELETE_TODO_ACTION,
  payload: { id },
});
export const allCompletedTodoAction = () => ({ type: COMPLETE_TODO_ACTION });
export const addTodoAction = (newTodo) => ({
  type: ADD_TODO_ACTION,
  payload: { title: newTodo },
});
