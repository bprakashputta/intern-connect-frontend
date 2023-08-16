import {
  TASK_LOAD_FAIL,
  TASK_LOAD_REQUEST,
  TASK_LOAD_RESET,
  TASK_LOAD_SINGLE_FAIL,
  TASK_LOAD_SINGLE_REQUEST,
  TASK_LOAD_SINGLE_RESET,
  TASK_LOAD_SINGLE_SUCCESS,
  TASK_LOAD_SUCCESS,
  REGISTER_TASK_FAIL,
  REGISTER_TASK_REQUEST,
  REGISTER_TASK_RESET,
  REGISTER_TASK_SUCCESS,
} from "../constants/taskConstant";

export const loadTaskReducer = (state = { tasks: [] }, action) => {
  switch (action.type) {
    case TASK_LOAD_REQUEST:
      return { loading: true };
    case TASK_LOAD_SUCCESS:
      console.log("Data from API:", action.payload);
      return {
        loading: false,
        success: action.payload.success,
        tasks: action.payload.tasks,
      };
    case TASK_LOAD_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case TASK_LOAD_RESET:
      return {};
    default:
      return state;
  }
};

// single task reducer
export const loadTaskSingleReducer = (state = { task: {} }, action) => {
  switch (action.type) {
    case TASK_LOAD_SINGLE_REQUEST:
      return { loading: true };
    case TASK_LOAD_SINGLE_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        singleTask: action.payload.task,
      };
    case TASK_LOAD_SINGLE_FAIL:
      return { loading: false, error: action.payload };
    case TASK_LOAD_SINGLE_RESET:
      return {};
    default:
      return state;
  }
};

//Registred task;
export const registerAtaskReducer = (state = {}, action) => {
  switch (action.type) {
    case REGISTER_TASK_REQUEST:
      return { loading: true };
    case REGISTER_TASK_SUCCESS:
      return {
        loading: false,
        task: action.payload,
      };
    case REGISTER_TASK_FAIL:
      return { loading: false, error: action.payload };
    case REGISTER_TASK_RESET:
      return {};
    default:
      return state;
  }
};
