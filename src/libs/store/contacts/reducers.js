import { dataContacts } from "../../data/data";
import { ACTIONS } from "./actions";
const initialState = {
  contacts: dataContacts,
};
export function contactReducer(state = initialState, action) {
  const { ADD_CONTACT } = ACTIONS;
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [action.payload.contact, ...state.contacts],
      };
    default:
      console.log(state);
      return state;
  }
}
