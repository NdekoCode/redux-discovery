import React, { memo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodoAction,
  allCompletedTodoAction,
  deleteTodoAction,
  toggleTodoAction,
} from "../..//libs/store/todos/todosActions";
import { filteredTodoSelector } from "../../libs/store/todos/todoSelectors";
import AddTodoForm from "./AddTodoForm";
import TodoItem from "./TodoItem";
const TodoList = memo(
  ({ todos, onToggle, onDelete, allCompleted, addTodo }) => {
    return (
      <>
        <AddTodoForm addTodo={addTodo} />
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
  }
);
export const TodoListStore = () => {
  const todos = useSelector(filteredTodoSelector);
  const dispatch = useDispatch();
  const onToggle = useCallback(
    (todo) => dispatch(toggleTodoAction(todo)),
    [dispatch]
  );
  const onDelete = useCallback(
    (id) => dispatch(deleteTodoAction(id)),
    [dispatch]
  );
  const allCompleted = useCallback(
    () => dispatch(allCompletedTodoAction()),
    [dispatch]
  );
  const addTodo = useCallback(
    (newTodo) => dispatch(addTodoAction(newTodo)),
    [dispatch]
  );
  return (
    <TodoList
      todos={todos}
      onDelete={onDelete}
      onToggle={onToggle}
      allCompleted={allCompleted}
      addTodo={addTodo}
    />
  );
};
/**
 * ===== Redux using connect ==============
 */
/* export const TodoStore = connect(
  (state) => ({
    todos: todosSelectors(state),
  }),
  (dispatch) => ({
    onToggle: (todo) => dispatch(toggleTodoAction(todo)),
    addTodo: (newTodo) => dispatch(addTodoAction(newTodo)),
    onDelete: (id) => dispatch(deleteTodoAction(id)),
    allCompleted: () => dispatch(allCompletedTodoAction),
  })
)(TodoList);
 */
export default TodoList;
