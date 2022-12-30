import { dataContacts } from "../../data/data";
import { ACTIONS } from "./actions";
const initialState = {
  contacts: dataContacts,
};
export function contactReducer(state = initialState, action) {
  const { ADD_CONTACT, EDIT_CONTACT } = ACTIONS;
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [action.payload.contact, ...state.contacts],
      };
    case EDIT_CONTACT:
      state.contacts.map((contact) => {
        if (contact.id === action.payload.id) {
          contact.name = action.payload.name;
          contact.email = action.payload.email;
          contact.phone = action.payload.phone;
          contact.category = action.payload.category;
        }
        return contact;
      });
      return state;
    default:
      return state;
  }
}
