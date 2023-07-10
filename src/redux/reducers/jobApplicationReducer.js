import {
  JOBAPPLICATION_LOAD_FAIL,
  JOBAPPLICATION_LOAD_REQUEST,
  JOBAPPLICATION_LOAD_RESET,
  JOBAPPLICATION_LOAD_SINGLE_FAIL,
  JOBAPPLICATION_LOAD_SINGLE_REQUEST,
  JOBAPPLICATION_LOAD_SINGLE_RESET,
  JOBAPPLICATION_LOAD_SINGLE_SUCCESS,
  JOBAPPLICATION_LOAD_SUCCESS,
  REGISTER_JOBAPPLICATION_FAIL,
  REGISTER_JOBAPPLICATION_REQUEST,
  REGISTER_JOBAPPLICATION_RESET,
  REGISTER_JOBAPPLICATION_SUCCESS,
  UPDATE_JOBAPPLICATION_FAIL,
  UPDATE_JOBAPPLICATION_REQUEST,
  UPDATE_JOBAPPLICATION_RESET,
  UPDATE_JOBAPPLICATION_SUCCESS,
  DELETE_JOBAPPLICATION_FAIL,
  DELETE_JOBAPPLICATION_REQUEST,
  DELETE_JOBAPPLICATION_SUCCESS,
  DELETE_JOBAPPLICATION_RESET,
} from "../constants/jobApplicationConstant";

export const loadJobApplicationReducer = (state = { jobApplications: [] }, action) => {
  switch (action.type) {
    case JOBAPPLICATION_LOAD_REQUEST:
      return { loading: true };
    case JOBAPPLICATION_LOAD_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        jobApplications: action.payload.jobApplications,
      };
    case JOBAPPLICATION_LOAD_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case JOBAPPLICATION_LOAD_RESET:
      return {};
    default:
      return state;
  }
};

// single jobApplication reducer
export const loadJobApplicationSingleReducer = (state = { jobApplication: {} }, action) => {
  switch (action.type) {
    case JOBAPPLICATION_LOAD_SINGLE_REQUEST:
      return { loading: true };
    case JOBAPPLICATION_LOAD_SINGLE_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        singleJobApplication: action.payload.jobApplication,
      };
    case JOBAPPLICATION_LOAD_SINGLE_FAIL:
      return { loading: false, error: action.payload };
    case JOBAPPLICATION_LOAD_SINGLE_RESET:
      return {};
    default:
      return state;
  }
};

//Registred jobApplication;
export const registerAjobApplicationReducer = (state = {}, action) => {
  switch (action.type) {
    case REGISTER_JOBAPPLICATION_REQUEST:
      return { loading: true };
    case REGISTER_JOBAPPLICATION_SUCCESS:
      return {
        loading: false,
        jobApplication: action.payload,
      };
    case REGISTER_JOBAPPLICATION_FAIL:
      return { loading: false, error: action.payload };
    case REGISTER_JOBAPPLICATION_RESET:
      return {};
    default:
      return state;
  }
};


// Update job application reducer
export const updateJobApplicationReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_JOBAPPLICATION_REQUEST:
      return { loading: true };
    case UPDATE_JOBAPPLICATION_SUCCESS:
      return {
        loading: false,
        jobApplication: action.payload,
      };
    case UPDATE_JOBAPPLICATION_FAIL:
      return { loading: false, error: action.payload };
    case UPDATE_JOBAPPLICATION_RESET:
      return {};
    default:
      return state;
  }
};

// Delete jobApplication reducer
export const deleteJobApplicationReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_JOBAPPLICATION_REQUEST:
      return { loading: true };
    case DELETE_JOBAPPLICATION_SUCCESS:
      return { loading: false, success: true };
    case DELETE_JOBAPPLICATION_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

