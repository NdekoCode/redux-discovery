import { createStore } from "redux";

let id = 10;
const initialValue = [
  {
    id: 1,
    title: "Do something nice for someone I care about",
    completed: true,
  },
  {
    id: 2,
    title: "Memorize the fifty states and their capitals",
    completed: false,
  },
  {
    id: 3,
    title: "Watch a classic movie",
    completed: false,
  },
  {
    id: 4,
    title:
      "Contribute code or a monetary donation to an open-source software project",
    completed: false,
  },
  {
    id: 5,
    title: "Solve a Rubik's cube",
    completed: false,
  },
  {
    id: 6,
    title: "Bake pastries for me and neighbor",
    completed: false,
  },
  {
    id: 7,
    title: "Go see a Broadway production",
    completed: false,
  },
  {
    id: 8,
    title: "Write a thank you letter to an influential person in my life",
    completed: true,
  },
  {
    id: 9,
    title: "Invite some friends over for a game night",
    completed: false,
  },
  {
    id: 10,
    title: "Have a football scrimmage with some friends",
    completed: false,
  },
];
const ADD_TODO_ACTION = "ADD_TODO_ACTION";
const DELETE_TODO_ACTION = "DELETE_TODO_ACTION";
const UPDATE_TODO_ACTION = "UPDATE_TODO_ACTION";
/**
 * @description Est un reducer pour le todoList
 * - Un reducer est une fonction qui prend en paramètre un etat et une action et en fonction de cette action il va modifier l'etat
 * - La modification de l'etat doit nous retourner un nouvel etat donc vous ne pouvez pas faire une mutation, donc pas de array.push
 * - Lorsque vous écrivew un reducer il faut nécessairement que ça soit immutable
 * - L'Action d'un reducer va généralement avec un payload: qui sont considerer comme les paramètres à passer à une action du reducer, par exemple lorsque l'on veut ajouter une nouvelle tache on doit passer cette tache dans le payload
 * @author NdekoCode
 * @param {*} state
 * @param {*} action
 * @return {*}
 */
function todoReducer(state = initialValue, action) {
  switch (action.type) {
    case ADD_TODO_ACTION:
      return [...state, { id: id++, completed: false, ...action.payload }];
      break;
    case DELETE_TODO_ACTION:
      return state.filter((d) => d.id !== action.payload.id);
      break;
    case UPDATE_TODO_ACTION:
      return state.map((d) => {
        if (d.id === action.payload.id) {
          d.title = action.payload.title;
          d.completed = action.payload.completed;
        }
        return d;
      });

    default:
      return state;
  }
}
const myState = todoReducer(undefined, {});
const newState = todoReducer(myState, {
  type: ADD_TODO_ACTION,
  payload: {
    title: "Apprendre typescript",
  },
});

const store = createStore(
  todoReducer,
  +window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// Va permettre d'écouter lorsqu'il y a des nouveaux changement au niveau de votre store
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
console.log(store.getState());
