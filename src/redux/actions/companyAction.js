import axios from "../../api/base";
import { toast } from "react-toastify";
import {
  COMPANY_LOAD_FAIL,
  COMPANY_LOAD_REQUEST,
  COMPANY_LOAD_SINGLE_FAIL,
  COMPANY_LOAD_SINGLE_REQUEST,
  COMPANY_LOAD_SINGLE_SUCCESS,
  COMPANY_LOAD_SUCCESS,
  REGISTER_COMPANY_FAIL,
  REGISTER_COMPANY_REQUEST,
  REGISTER_COMPANY_SUCCESS,
} from "../constants/companyConstant";


export const companyLoadAction =
  (pageNumber, keyword = "", cat = "", location = "") =>
  async (dispatch) => {
    dispatch({ type: COMPANY_LOAD_REQUEST });
    try {
      const { data } = await axios.get(
        `/company/all`
      );
      dispatch({
        type: COMPANY_LOAD_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: COMPANY_LOAD_FAIL,
        payload: error.response.data.error,
      });
    }
  };

// single company action
export const companyLoadSingleAction = (id) => async (dispatch) => {
  dispatch({ type: COMPANY_LOAD_SINGLE_REQUEST });
  try {
    const { data } = await axios.get(`/company/${id}`);
    dispatch({
      type: COMPANY_LOAD_SINGLE_SUCCESS,
      payload: data,
    });
    console.log("checkinggg",data);
  } catch (error) {
    dispatch({
      type: COMPANY_LOAD_SINGLE_FAIL,
      payload: error.response.data.error,
    });
  }
};

// register company action
export const registerAcompanyAction = (company) => async (dispatch) => {
  dispatch({ type: REGISTER_COMPANY_REQUEST });

  try {
    const { data } = await axios.post("/company/create", company);
    dispatch({
      type: REGISTER_COMPANY_SUCCESS,
      payload: data,
    });
    toast.success("Company created successfully");
  } catch (error) {
    dispatch({
      type: REGISTER_COMPANY_FAIL,
      payload: error.response.data.error,
    });
    toast.error(error.response.data.error);
  }
};
