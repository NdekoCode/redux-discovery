import { ACTIONS } from "..";
import wait from "../../../utils/wait";
const {
  ADD_TODO_ACTION,
  COMPLETE_TODO_ACTION,
  DELETE_TODO_ACTION,
  UPDATE_TODO_ACTION,
} = ACTIONS;
export const toggleTodoAction = (todo) => ({
  type: UPDATE_TODO_ACTION,
  payload: { ...todo, completed: !todo.completed },
});
export const deleteTodoAction = (id) => ({
  type: DELETE_TODO_ACTION,
  payload: { id },
});
export const allCompletedTodoAction = () => ({ type: COMPLETE_TODO_ACTION });
// On vait un traitement asynchrone sur l'ajout d'un todolist
export const addTodoAction = (newTodo) => async (dispatch) => {
  await wait(2000);
  dispatch({
    type: ADD_TODO_ACTION,
    payload: { title: newTodo },
  });
};
