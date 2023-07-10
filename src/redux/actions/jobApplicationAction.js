import axios from "../../api/base";
import { toast } from "react-toastify";
import {
  JOBAPPLICATION_LOAD_FAIL,
  JOBAPPLICATION_LOAD_REQUEST,
  JOBAPPLICATION_LOAD_SINGLE_FAIL,
  JOBAPPLICATION_LOAD_SINGLE_REQUEST,
  JOBAPPLICATION_LOAD_SINGLE_SUCCESS,
  JOBAPPLICATION_LOAD_SUCCESS,
  REGISTER_JOBAPPLICATION_FAIL,
  REGISTER_JOBAPPLICATION_REQUEST,
  REGISTER_JOBAPPLICATION_SUCCESS,
  UPDATE_JOBAPPLICATION_FAIL,
  UPDATE_JOBAPPLICATION_REQUEST,
  UPDATE_JOBAPPLICATION_SUCCESS,
  DELETE_JOBAPPLICATION_FAIL,
  DELETE_JOBAPPLICATION_REQUEST,
  DELETE_JOBAPPLICATION_SUCCESS,
} from "../constants/jobApplicationConstant";

export const jobApplicationLoadAction = () => async (dispatch) => {
  dispatch({ type: JOBAPPLICATION_LOAD_REQUEST });
  try {
    const { data } = await axios.get(`jobapplication/all`);
    dispatch({
      type: JOBAPPLICATION_LOAD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: JOBAPPLICATION_LOAD_FAIL,
      payload: error.response.data.error,
    });
  }
};

// single jobApplication action
export const jobApplicationLoadSingleAction = (id) => async (dispatch) => {
  dispatch({ type: JOBAPPLICATION_LOAD_SINGLE_REQUEST });
  try {
    const { data } = await axios.get(`/jobapplication/view/${id}`);
    dispatch({
      type: JOBAPPLICATION_LOAD_SINGLE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: JOBAPPLICATION_LOAD_SINGLE_FAIL,
      payload: error.response.data.error,
    });
  }
};

// register jobApplication action
export const registerAjobApplicationAction =
  (jobApplication) => async (dispatch) => {
    console.log("registerAjobApplicationAction");
    dispatch({ type: REGISTER_JOBAPPLICATION_REQUEST });

    try {
      const { data } = await axios.post(
        "/jobapplication/create",
        jobApplication
      );
      dispatch({
        type: REGISTER_JOBAPPLICATION_SUCCESS,
        payload: data,
      });
      toast.success("JobApplication created successfully");
    } catch (error) {
      dispatch({
        type: REGISTER_JOBAPPLICATION_FAIL,
        payload: error.response.data.error,
      });
    }
  };

// Update jobApplication action
export const updateJobApplicationAction =
  (jobApplication) => async (dispatch) => {
    dispatch({ type: UPDATE_JOBAPPLICATION_REQUEST });

    try {
      const { data } = await axios.put(
        "/jobapplications/update",
        jobApplication
      );
      dispatch({
        type: UPDATE_JOBAPPLICATION_SUCCESS,
        payload: data,
      });
      toast.success("JobApplication updated successfully");
    } catch (error) {
      dispatch({
        type: UPDATE_JOBAPPLICATION_FAIL,
        payload: error.response.data.error,
      });
      toast.error(error.response.data.error);
    }
  };

// Delete jobApplication action
export const deleteJobApplicationAction =
  (jobApplication) => async (dispatch) => {
    dispatch({ type: DELETE_JOBAPPLICATION_REQUEST });

    try {
      await axios.delete(
        `/jobapplication/delete?job_id=${jobApplication.job_id}&user_id=${jobApplication.user_id}`
      );
      dispatch({ type: DELETE_JOBAPPLICATION_SUCCESS });
      toast.success("JobApplication deleted successfully");
    } catch (error) {
      dispatch({
        type: DELETE_JOBAPPLICATION_FAIL,
        payload: error.response.data.error,
      });
      toast.error(error.response.data.error);
    }
  };
