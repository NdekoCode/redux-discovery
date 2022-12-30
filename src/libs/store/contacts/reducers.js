import { dataContacts } from "../../data/data";
import { ACTIONS } from "./actions";
const initialState = {
  contacts: dataContacts,
};
export function contactReducer(state = initialState, { type, payload }) {
  const { ADD_CONTACT, EDIT_CONTACT, DELETE_CONTACT } = ACTIONS;
  switch (type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [payload.contact, ...state.contacts],
      };
    case EDIT_CONTACT:
      const edit = (contact) =>
        contact.id === payload.id ? { contact, ...payload } : contact;
      return { ...state, contacts: state.contacts.map(edit) };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter((contact) => contact.id !== payload.id),
      };
    default:
      return state;
  }
}
