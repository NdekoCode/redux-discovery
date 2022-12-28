import { Provider } from "react-redux";
import "../../App.css";
import store from "../../store";
import { TodoFilterStore } from "../todos/TodoFilter";
import { TodoListStore } from "../todos/TodoList";
function Todos() {
  return (
    <Provider store={store}>
      <main className="p-5">
        <TodoFilterStore />
        <TodoListStore />
      </main>
    </Provider>
  );
}

export default Todos;