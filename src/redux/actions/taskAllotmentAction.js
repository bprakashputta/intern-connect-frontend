import axios from "../../api/base";
import { toast } from "react-toastify";
import {
  TASKALLOTMENT_LOAD_FAIL,
  TASKALLOTMENT_LOAD_REQUEST,
  TASKALLOTMENT_LOAD_SINGLE_FAIL,
  TASKALLOTMENT_LOAD_SINGLE_REQUEST,
  TASKALLOTMENT_LOAD_SINGLE_SUCCESS,
  TASKALLOTMENT_LOAD_SUCCESS,
  REGISTER_TASKALLOTMENT_FAIL,
  REGISTER_TASKALLOTMENT_REQUEST,
  REGISTER_TASKALLOTMENT_SUCCESS,
} from "../constants/taskAllotmentConstant";

export const taskAllotmentLoadAction =
  (pageNumber, keyword = "", cat = "", location = "") =>
  async (dispatch) => {
    dispatch({ type: TASKALLOTMENT_LOAD_REQUEST });
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const user_id = userInfo._id;
    try {
      const { data } = await axios.get(`/taskallotment/all`);
      console.log("data: ", data);
      dispatch({
        type: TASKALLOTMENT_LOAD_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: TASKALLOTMENT_LOAD_FAIL,
        payload: error.response.data.error,
      });
    }
  };

// single taskAllotment action
export const taskAllotmentLoadSingleAction = (id) => async (dispatch) => {
  dispatch({ type: TASKALLOTMENT_LOAD_SINGLE_REQUEST });
  try {
    const { data } = await axios.get(`/taskAllotments/view/${id}`);
    dispatch({
      type: TASKALLOTMENT_LOAD_SINGLE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TASKALLOTMENT_LOAD_SINGLE_FAIL,
      payload: error.response.data.error,
    });
  }
};

// register taskAllotment action
export const registerAtaskAllotmentAction =
  (taskAllotment) => async (dispatch) => {
    dispatch({ type: REGISTER_TASKALLOTMENT_REQUEST });

    try {
      const { data } = await axios.post(
        "/taskAllotments/create",
        taskAllotment
      );
      dispatch({
        type: REGISTER_TASKALLOTMENT_SUCCESS,
        payload: data,
      });
      toast.success("TaskAllotment created successfully");
    } catch (error) {
      dispatch({
        type: REGISTER_TASKALLOTMENT_FAIL,
        payload: error.response.data.error,
      });
      toast.error(error.response.data.error);
    }
  };

export const taskAllotmentsAppliedLoadAction = () => async (dispatch) => {
  dispatch({ type: TASKALLOTMENT_LOAD_REQUEST });
  try {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const { data } = await axios.get(
      `/taskAllotmentapplication/appliedby/${userInfo._id}`
    );
    console.log(data);
    dispatch({
      type: TASKALLOTMENT_LOAD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TASKALLOTMENT_LOAD_FAIL,
      payload: error.response.data.error,
    });
  }
};
