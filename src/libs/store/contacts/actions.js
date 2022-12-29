export const ACTIONS = {
  ADD_CONTACT: "ADD_CONTACT",
};
export function addContact(contact) {
  const { ADD_CONTACT } = ACTIONS;
  return {
    type: ADD_CONTACT,
    payload: contact,
  };
}
