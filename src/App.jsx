import { useState } from "react";
import { Provider } from "react-redux";
import "./App.css";
import { TodoFilterStore } from "./components/todos/TodoFilter";
import { TodoListStore } from "./components/todos/TodoList";
import store from "./store";
function App() {
  const [count, setCount] = useState(0);

  return (
    <Provider store={store}>
      <TodoFilterStore />
      <TodoListStore />
    </Provider>
  );
}

export default App;
