export const ACTIONS = {
  ADD_CONTACT: "ADD_CONTACT",
  EDIT_CONTACT: "EDIT_CONTACT",
};
export function addContact(contact) {
  const { ADD_CONTACT } = ACTIONS;
  return {
    type: ADD_CONTACT,
    payload: { contact },
  };
}
export function editContact(contact) {
  const { EDIT_CONTACT } = ACTIONS;
  return {
    type: EDIT_CONTACT,
    payload: contact,
  };
}
