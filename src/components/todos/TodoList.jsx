import React, { useState } from "react";
import { connect } from "react-redux";
import {
  ADD_TODO_ACTION,
  COMPLETE_TODO_ACTION,
  DELETE_TODO_ACTION,
  UPDATE_TODO_ACTION,
} from "../../store";
import { todosSelectors } from "../../store/todos/todoSelectors";
import TodoItem from "./TodoItem";
const TodoList = ({ todos, onDelete, onToggle, allCompleted, addTodo }) => {
  const [newTodo, setTodo] = useState("");
  const handleTodo = (evt) => {
    const value = evt.target.value;
    setTodo(value);
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (newTodo.length > 2) {
      addTodo(newTodo);

      setTodo("");
    }
  };
  return (
    <>
      {JSON.stringify(todos)}
      <form
        onSubmit={handleSubmit}
        className="flex items-center w-56 py-2 px-4 min-w-max"
      >
        <input
          type="text"
          className="px-2 w-full py-2 shadow border-t"
          value={newTodo}
          onChange={handleTodo}
        />
        <button type="submit" className="text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ionicon h-8 w-8"
            viewBox="0 0 512 512"
          >
            <title>Add Circle</title>
            <path
              d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
              fill="none"
              stroke="currentColor"
              strokeMiterlimit={10}
              strokeWidth={32}
            />
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={32}
              d="M256 176v160M336 256H176"
            />
          </svg>
        </button>
      </form>
      <h2
        onClick={allCompleted}
        className="mb-2 text-lg font-semibold text-gray-900 dark:text-white flex items-center"
      >
        complete All
        <button className="mx-3 cursor-pointer">
          <svg
            className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </h2>
      <ul className="space-y-1 max-w-3xl list-inside text-gray-500 dark:text-gray-400">
        {todos.map((todo) => (
          <TodoItem
            onToggle={onToggle}
            onDelete={onDelete}
            todo={todo}
            key={todo.id}
          />
        ))}
      </ul>
    </>
  );
};
export const TodoStore = connect(
  (state) => ({
    todos: todosSelectors(state),
  }),
  (dispatch) => ({
    onToggle: (todo) =>
      dispatch({
        type: UPDATE_TODO_ACTION,
        payload: { ...todo, completed: !todo.completed },
      }),
    addTodo: (newTodo) =>
      dispatch({
        type: ADD_TODO_ACTION,
        payload: { title: newTodo },
      }),
    onDelete: (id) =>
      dispatch({
        type: DELETE_TODO_ACTION,
        payload: { id },
      }),
    allCompleted: () => dispatch({ type: COMPLETE_TODO_ACTION }),
  })
)(TodoList);

export default TodoList;
