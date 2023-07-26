import {
  TASKALLOTMENT_LOAD_FAIL,
  TASKALLOTMENT_LOAD_REQUEST,
  TASKALLOTMENT_LOAD_RESET,
  TASKALLOTMENT_LOAD_SINGLE_FAIL,
  TASKALLOTMENT_LOAD_SINGLE_REQUEST,
  TASKALLOTMENT_LOAD_SINGLE_RESET,
  TASKALLOTMENT_LOAD_SINGLE_SUCCESS,
  TASKALLOTMENT_LOAD_SUCCESS,
  REGISTER_TASKALLOTMENT_FAIL,
  REGISTER_TASKALLOTMENT_REQUEST,
  REGISTER_TASKALLOTMENT_RESET,
  REGISTER_TASKALLOTMENT_SUCCESS,
} from "../constants/taskAllotmentConstant";

export const loadTaskAllotmentReducer = (
  state = { taskAllotments: [] },
  action
) => {
  switch (action.type) {
    case TASKALLOTMENT_LOAD_REQUEST:
      return { loading: true };
    case TASKALLOTMENT_LOAD_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        taskAllotments: action.payload,
      };
    case TASKALLOTMENT_LOAD_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case TASKALLOTMENT_LOAD_RESET:
      return {};
    default:
      return state;
  }
};

// single taskAllotment reducer
export const loadTaskAllotmentSingleReducer = (
  state = { taskAllotment: {} },
  action
) => {
  switch (action.type) {
    case TASKALLOTMENT_LOAD_SINGLE_REQUEST:
      return { loading: true };
    case TASKALLOTMENT_LOAD_SINGLE_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        singleTaskAllotment: action.payload.taskAllotment,
      };
    case TASKALLOTMENT_LOAD_SINGLE_FAIL:
      return { loading: false, error: action.payload };
    case TASKALLOTMENT_LOAD_SINGLE_RESET:
      return {};
    default:
      return state;
  }
};

//Registred taskAllotment;
export const registerAtaskAllotmentReducer = (state = {}, action) => {
  switch (action.type) {
    case REGISTER_TASKALLOTMENT_REQUEST:
      return { loading: true };
    case REGISTER_TASKALLOTMENT_SUCCESS:
      return {
        loading: false,
        taskAllotment: action.payload,
      };
    case REGISTER_TASKALLOTMENT_FAIL:
      return { loading: false, error: action.payload };
    case REGISTER_TASKALLOTMENT_RESET:
      return {};
    default:
      return state;
  }
};
