import { dataContacts } from "../../data/data";
import { ACTIONS } from "./actions";
const initialState = {
  contacts: dataContacts,
};
export function contactReducer(state = initialState, action) {
  const { ADD_CONTACT, EDIT_CONTACT, DELETE_CONTACT } = ACTIONS;
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [action.payload.contact, ...state.contacts],
      };
    case EDIT_CONTACT:
      const edit = (contact) =>
        contact.id === action.payload.id
          ? { contact, ...action.payload }
          : contact;
      return { ...state, contacts: state.contacts.map(edit) };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
}
