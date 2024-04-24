import * as ADD from "./actionTypes";
const intial_state = {
  loading: false,
  error: false,
  todos: [],
};

const reducer = (state = intial_state, { type, payload }) => {
  switch (type) {
    case ADD.ADD_TASK_SUCCESS:
      return { ...state, todos: [...state.todos, payload] };
    default:
      return state;
  }
};

export default reducer;
