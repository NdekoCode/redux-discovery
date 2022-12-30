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
      const contacts = state.contacts.map((contact) => {
        if (contact.id.toString() === action.payload.id.toString()) {
          console.log(action.payload);
          contact.name = action.payload.name;
          contact.email = action.payload.email;
          contact.phone = action.payload.phone;
          contact.category = action.payload.category;
          console.log(contact);
          return contact;
        }
        return contact;
      });
      return { ...state, contacts };
    case DELETE_CONTACT:
      const newContacts = state.contacts.filter(
        (contact) => contact.id !== action.payload.id
      );
      return { ...state, contacts: newContacts };
    default:
      return state;
  }
}
