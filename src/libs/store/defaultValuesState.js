import { v4 as uuid } from "uuid";
export const initialTodosValue = [
  {
    id: uuid(),
    title: "Do something nice for someone I care about",
    completed: true,
  },
  {
    id: uuid(),
    title: "Memorize the fifty states and their capitals",
    completed: false,
  },
  {
    id: uuid(),
    title: "Watch a classic movie",
    completed: false,
  },
  {
    id: uuid(),
    title:
      "Contribute code or a monetary donation to an open-source software project",
    completed: false,
  },
  {
    id: uuid(),
    title: "Solve a Rubik's cube",
    completed: false,
  },
];
