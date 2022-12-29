import { dataContacts } from "../../../components/contacts/libs/data";
import { ACTIONS } from "./actions";

export function contactReducer(state = dataContacts, action) {
  const { ADD_CONTACT } = ACTIONS;
  switch (action.type) {
    case ADD_CONTACT:
      return [action.payload, ...state];
    default:
      return state;
  }
}
