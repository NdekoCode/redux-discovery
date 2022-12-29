import { legacy_createStore as createStore } from "redux";
import { contactReducer } from "./reducers";
const contactStore = createStore(
  contactReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && __REDUX_DEVTOOLS_EXTENSION__()
);
console.log(contactStore.getState());
export default contactStore;
