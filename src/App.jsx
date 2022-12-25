import { Provider } from "react-redux";
import "./App.css";
import { TodoFilterStore } from "./components/todos/TodoFilter";
import { TodoListStore } from "./components/todos/TodoList";
import store from "./store";
function App() {
  return (
    <Provider store={store}>
      <TodoFilterStore />
      <TodoListStore />
    </Provider>
  );
}

export default App;
