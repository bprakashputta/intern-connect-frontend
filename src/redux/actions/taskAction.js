import axios from "../../api/base";
import { toast } from "react-toastify";
import {
  TASK_LOAD_FAIL,
  TASK_LOAD_REQUEST,
  TASK_LOAD_SINGLE_FAIL,
  TASK_LOAD_SINGLE_REQUEST,
  TASK_LOAD_SINGLE_SUCCESS,
  TASK_LOAD_SUCCESS,
  REGISTER_TASK_FAIL,
  REGISTER_TASK_REQUEST,
  REGISTER_TASK_SUCCESS,
} from "../constants/taskConstant";

export const taskLoadAction = () => async (dispatch) => {
  dispatch({ type: TASK_LOAD_REQUEST });
  try {
    const { data } = await axios.get(`task/all`);
    dispatch({
      type: TASK_LOAD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TASK_LOAD_FAIL,
      payload: error.response.data.error,
    });
  }
};

// Task load for specific user
export const tasksForSpecficUserLoadAction = () => async (dispatch) => {
  dispatch({ type: TASK_LOAD_REQUEST });
  try {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    console.log("Fetching tasks for user:", userInfo._id);

    const { data } = await axios.get(`task/${userInfo._id}/all`);
    console.log("Fetched tasks:", data);

    dispatch({
      type: TASK_LOAD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.error("Error fetching tasks:", error);

    dispatch({
      type: TASK_LOAD_FAIL,
      payload: error.response.data.error,
    });
  }
};

// single task action
export const taskLoadSingleAction = (id) => async (dispatch) => {
  dispatch({ type: TASK_LOAD_SINGLE_REQUEST });
  try {
    const { data } = await axios.get(`/task/view/${id}`);
    dispatch({
      type: TASK_LOAD_SINGLE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TASK_LOAD_SINGLE_FAIL,
      payload: error.response.data.error,
    });
  }
};

// register task action
export const registerAtaskAction = (task) => async (dispatch) => {
  dispatch({ type: REGISTER_TASK_REQUEST });

  try {
    const { data } = await axios.post("/tasks/create", task);
    dispatch({
      type: REGISTER_TASK_SUCCESS,
      payload: data,
    });
    toast.success("Task created successfully");
  } catch (error) {
    dispatch({
      type: REGISTER_TASK_FAIL,
      payload: error.response.data.error,
    });
    toast.error(error.response.data.error);
  }
};

// taskActions.js
export const updateTasks = (updatedTasks) => {
  return {
    type: "UPDATE_TASKS",
    payload: updatedTasks,
  };
};
