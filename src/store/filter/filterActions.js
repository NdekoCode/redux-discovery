import { UPDATE_FILTER } from "./filterReducer";

export const setFilterAction = (filter) => ({
  type: UPDATE_FILTER,
  payload: filter,
});
