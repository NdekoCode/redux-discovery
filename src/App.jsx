import { useState } from "react";
import { Provider } from "react-redux";
import "./App.css";
import TodoList from "./components/todos/TodoList";
import store from "./store";
function App() {
  const [count, setCount] = useState(0);

  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
}

export default App;
