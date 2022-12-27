import { v4 as uuid } from "uuid";
import { ACTIONS } from "..";
import { initialTodosValue } from "../defaultValuesState";

/**
 * @description Est un reducer pour le todoList
 * - Un reducer est une fonction qui prend en paramètre un etat et une action et en fonction de cette action il va modifier l'etat
 * - La modification de l'etat doit nous retourner un nouvel etat donc vous ne pouvez pas faire une mutation, donc pas de array.push
 * - Lorsque vous écrivez un reducer il faut nécessairement que ça soit immutable
 * - L'Action d'un reducer va généralement avec un payload: qui sont considerer comme les paramètres à passer à une action du reducer, par exemple lorsque l'on veut ajouter une nouvelle tache on doit passer cette tache dans le payload
 * @author NdekoCode
 * @param {*} state
 * @param {*} action
 * @return {*}
 */
export default function todoReducer(state = initialTodosValue, action = {}) {
  const {
    ADD_TODO_ACTION,
    COMPLETE_TODO_ACTION,
    DELETE_TODO_ACTION,
    UPDATE_TODO_ACTION,
  } = ACTIONS;
  switch (action.type) {
    case ADD_TODO_ACTION:
      return [{ id: uuid(), completed: false, ...action.payload }, ...state];
    case DELETE_TODO_ACTION:
      return state.filter((d) => {
        return d.id !== action.payload.id;
      });
    case UPDATE_TODO_ACTION:
      return state.map((d) => {
        if (d.id === action.payload.id) {
          // Si les identifiant correspondent alors retourne l'objet qui correspond à celui que l'on a dans le store et ajoute y ce que l'on a dans le payload
          return { ...d, ...action.payload };
        }
        return d;
      });
    case COMPLETE_TODO_ACTION:
      return state.map((d) => {
        d.completed = true;
        return d;
      });
    default:
      return state;
  }
}
