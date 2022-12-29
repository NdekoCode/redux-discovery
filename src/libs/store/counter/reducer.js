import ACTIONS from "./typesActions";
const initialState = {
  count: 0,
};
export function counterReducer(state = initialState, action) {
  const { INCREMENT, DECREMENT } = ACTIONS;
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      if (state.count > 0) {
        console.log(state);
        return { ...state, count: state.count - 1 };
      }
      return state;
    default:
      return state;
  }
}
