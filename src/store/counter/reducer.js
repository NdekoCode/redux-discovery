import { DECREMENT, INCREMENT } from "./typesActions";

export function counterReducer(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      if (state > 0) {
        return state - 1;
      }
      return state;
    default:
      return state;
  }
}
