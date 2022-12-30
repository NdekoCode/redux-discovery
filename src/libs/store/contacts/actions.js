export const ACTIONS = {
  ADD_CONTACT: "ADD_CONTACT",
  EDIT_CONTACT: "EDIT_CONTACT",
  DELETE_CONTACT: "DELETE_CONTACT",
};

const { ADD_CONTACT, EDIT_CONTACT, DELETE_CONTACT } = ACTIONS;
export function addContact(contact) {
  return {
    type: ADD_CONTACT,
    payload: { contact },
  };
}
export function editContact(contact) {
  return {
    type: EDIT_CONTACT,
    payload: contact,
  };
}
export function deleteContact(contact) {
  return {
    type: DELETE_CONTACT,
    payload: contact,
  };
}
