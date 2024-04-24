import { filteredData, loaddata, savedata } from "../utils/accessLocalStorage";
import * as Todo from "./actionTypes";
const intial_state = {
  loading: false,
  error: false,
  todos: loaddata("todos") || [],
};

const reducer = (state = intial_state, { type, payload }) => {
  switch (type) {
    case Todo.ADD_TASK_SUCCESS:
      savedata("todos", payload);
      return { ...state, todos: [...state.todos, payload] };

    case Todo.DELETE_TODO_SUCCESS:
      filteredData("todos", payload);
      return { ...state, todos: payload };

    case Todo.Toggle_TODO_SUCCESS:
      filteredData("todos", payload);
      return { ...state, todos: payload };
    default:
      return state;
  }
};

export default reducer;
