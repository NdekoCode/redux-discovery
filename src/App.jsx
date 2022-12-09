import { useState } from "react";
import "./App.css";
import reactLogo from "./assets/react.svg";
import {
  ADD_TODO_ACTION,
  COMPLETE_TODO_ACTION,
  DELETE_TODO_ACTION,
  store,
  UPDATE_TODO_ACTION,
} from "./store";

// Va permettre d'écouter lorsqu'il y a des nouveaux changement au niveau de votre store, il prend en paramètre une fonction
store.subscribe(() => store.getState());
store.dispatch({
  type: ADD_TODO_ACTION,
  payload: { title: "Apprendre NextJS" },
});

console.log(store);
store.dispatch({ type: DELETE_TODO_ACTION, payload: { id: 3 } });
store.dispatch({
  type: UPDATE_TODO_ACTION,
  payload: { id: 5, title: "Hello guy", completed: true },
});
store.dispatch({ type: COMPLETE_TODO_ACTION });
console.log(store.getState());

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
