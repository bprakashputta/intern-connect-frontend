import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  loadJobReducer,
  loadJobSingleReducer,
  registerAjobReducer,
} from "./reducers/jobReducer";

import {
  loadTaskAllotmentReducer,
  loadTaskAllotmentSingleReducer,
  registerAtaskAllotmentReducer,
} from "./reducers/taskAllotmentReducer";

import {
  loadTaskReducer,
  loadTaskSingleReducer,
  registerAtaskReducer,
} from "./reducers/taskReducer";

import {
  loadCompanyReducer,
  loadCompanySingleReducer,
  registerAcompanyReducer,
} from "./reducers/companyReducer";

import {
  createJobTypeReducer,
  loadJobTypeReducer,
} from "./reducers/jobTypeReducer";

import {
  registerAjobApplicationReducer,
  loadJobApplicationReducer,
  loadJobApplicationSingleReducer,
  updateJobApplicationReducer,
  deleteJobApplicationReducer,
} from "./reducers/jobApplicationReducer";

import {
  allUserReducer,
  userApplyJobReducer,
  userReducerLogout,
  userReducerProfile,
  userReducerSignIn,
  userReducerSignUp,
} from "./reducers/userReducer";
import { modeReducer } from "./reducers/themeModeReducer";

// combine reducers
const reducer = combineReducers({
  loadJobs: loadJobReducer,
  loadTasks: loadTaskReducer,
  loadCompanys: loadCompanyReducer,
  loadJobApplications: loadJobApplicationReducer,
  loadTaskAllotments: loadTaskAllotmentReducer,
  jobTypeAll: loadJobTypeReducer,
  signIn: userReducerSignIn,
  logOut: userReducerLogout,
  userProfile: userReducerProfile,
  singleJob: loadJobSingleReducer,
  singleTask: loadTaskSingleReducer,
  singleCompany: loadCompanySingleReducer,
  singleJobApplication: loadJobApplicationSingleReducer,
  singleTaskAllotment: loadTaskAllotmentSingleReducer,
  userJobApplication: userApplyJobReducer,
  allUsers: allUserReducer,
  signUp: userReducerSignUp,
  mode: modeReducer,
  registerJob: registerAjobReducer,
  registerTask: registerAtaskReducer,
  registerCompany: registerAcompanyReducer,
  registerJobApplication: registerAjobApplicationReducer,
  registerTaskAllotment: registerAtaskAllotmentReducer,
  updateJobApplication: updateJobApplicationReducer,
  deleteJobApplication: deleteJobApplicationReducer,
  createJobType: createJobTypeReducer,
});

// initial state
let initialState = {
  signIn: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
  mode: {
    mode: "light",
  },
};

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
