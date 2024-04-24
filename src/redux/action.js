import * as ADD from "./actionTypes";

const Task_Success = (payload) => {
  return {
    type: ADD.ADD_TASK_SUCCESS,
    payload,
  };
};

const Delete_Todo = (payload) => {
  return {
    type: ADD.DELETE_TODO_SUCCESS,
    payload,
  };
};

const Toggle_Todo = (payload) => {
  return {
    type: ADD.Toggle_TODO_SUCCESS,
    payload,
  };
};

export { Task_Success, Delete_Todo,Toggle_Todo };
