import * as ADD from "./actionTypes";

const Task_Loading = () => {
  return {
    type: ADD.ADD_TASK_LOADING,
  };
};

const Task_Success = (payload) => {
  return {
    type: ADD.ADD_TASK_SUCCESS,
    payload,
  };
};

const Task_Error = () => {
  return {
    type: ADD.ADD_TASK_ERROR,
  };
};

export { Task_Loading, Task_Success, Task_Error };
