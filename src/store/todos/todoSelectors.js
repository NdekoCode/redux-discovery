import { createSelector } from "reselect";
import { filterSelector } from "../filter/filterSelectors";
// ça sera seulement une fonction qui va exporter des fonction qui vont nous permettre d'avoir accés aux données du store.
export const todosSelectors = ({ todos }) => todos;
/* 
export const filteredTodoSelector = ({ todos, filter }) => {
  if (filter === null) {
    return todos;
  }
  return todos.filter((d) => d.completed === filter);
};
 */
export const filteredTodoSelector = createSelector(
  todosSelectors,
  filterSelector,
  (todos, filter) => {
    if (filter === null) {
      return todos;
    }
    return todos.filter((d) => d.completed === filter);
  }
);
