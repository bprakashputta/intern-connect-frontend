import axios from "../../api/base";
import { toast } from "react-toastify";
import {
  JOB_LOAD_FAIL,
  JOB_LOAD_REQUEST,
  JOB_LOAD_SINGLE_FAIL,
  JOB_LOAD_SINGLE_REQUEST,
  JOB_LOAD_SINGLE_SUCCESS,
  JOB_LOAD_SUCCESS,
  REGISTER_JOB_FAIL,
  REGISTER_JOB_REQUEST,
  REGISTER_JOB_SUCCESS,
} from "../constants/jobConstant";

export const jobLoadAction =
  (pageNumber, keyword = "", cat = "", location = "") =>
  async (dispatch) => {
    dispatch({ type: JOB_LOAD_REQUEST });
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const user_id = userInfo._id;
    try {
      const { data } = await axios.get(
        `/jobs/show/${user_id}?pageNumber=${pageNumber}&keyword=${keyword}&cat=${cat}&location=${location}`
      );
      dispatch({
        type: JOB_LOAD_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: JOB_LOAD_FAIL,
        payload: error.response.data.error,
      });
    }
  };

// load all created jobs by a company "/:companyId/myjobs"
export const myJobsLoadAction = () => async (dispatch) => {
  dispatch({ type: JOB_LOAD_REQUEST });
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  if (userInfo.userType === "company") {
    const company_id = userInfo.company_id;
    try {
      const { data } = await axios.get(`/jobs/${company_id}/myjobs`);
      dispatch({
        type: JOB_LOAD_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: JOB_LOAD_FAIL,
        payload: error.response.data.error,
      });
    }
  } else {
    dispatch({
      type: JOB_LOAD_FAIL,
      payload: "You are not a company",
    });
  }
};

// single job action with status for user
export const jobLoadSingleUserAction = (id) => async (dispatch) => {
  dispatch({ type: JOB_LOAD_SINGLE_REQUEST });
  try {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const { data } = await axios.get(`/jobs/user/${userInfo._id}/view/${id}`);
    console.log("job with applied status", data);
    dispatch({
      type: JOB_LOAD_SINGLE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: JOB_LOAD_SINGLE_FAIL,
      payload: error.response.data.error,
    });
  }
};

// single job action
export const jobLoadSingleAction = (id) => async (dispatch) => {
  dispatch({ type: JOB_LOAD_SINGLE_REQUEST });
  try {
    const { data } = await axios.get(`/jobs/view/${id}`);
    dispatch({
      type: JOB_LOAD_SINGLE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: JOB_LOAD_SINGLE_FAIL,
      payload: error.response.data.error,
    });
  }
};

// register job action
export const registerAjobAction = (job) => async (dispatch) => {
  dispatch({ type: REGISTER_JOB_REQUEST });

  try {
    const { data } = await axios.post("/jobs/create", job);
    dispatch({
      type: REGISTER_JOB_SUCCESS,
      payload: data,
    });
    toast.success("Job created successfully");
  } catch (error) {
    dispatch({
      type: REGISTER_JOB_FAIL,
      payload: error.response.data.error,
    });
    toast.error(error.response.data.error);
  }
};

export const jobsAppliedLoadAction = () => async (dispatch) => {
  dispatch({ type: JOB_LOAD_REQUEST });
  try {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const { data } = await axios.get(
      `/jobapplication/appliedby/${userInfo._id}`
    );
    console.log(data);
    dispatch({
      type: JOB_LOAD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: JOB_LOAD_FAIL,
      payload: error.response.data.error,
    });
  }
};
