import {
  COMPANY_LOAD_FAIL,
  COMPANY_LOAD_REQUEST,
  COMPANY_LOAD_RESET,
  COMPANY_LOAD_SINGLE_FAIL,
  COMPANY_LOAD_SINGLE_REQUEST,
  COMPANY_LOAD_SINGLE_RESET,
  COMPANY_LOAD_SINGLE_SUCCESS,
  COMPANY_LOAD_SUCCESS,
  REGISTER_COMPANY_FAIL,
  REGISTER_COMPANY_REQUEST,
  REGISTER_COMPANY_RESET,
  REGISTER_COMPANY_SUCCESS,
} from "../constants/companyConstant";

export const loadCompanyReducer = (state = { companys: [] }, action) => {
  switch (action.type) {
    case COMPANY_LOAD_REQUEST:
      return { loading: true };
    case COMPANY_LOAD_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        page: action.payload.page,
        pages: action.payload.pages,
        count: action.payload.count,
        setUniqueLocation: action.payload.setUniqueLocation,
        companys: action.payload.companys,
      };
    case COMPANY_LOAD_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case COMPANY_LOAD_RESET:
      return {};
    default:
      return state;
  }
};

// single company reducer
export const loadCompanySingleReducer = (state = { company: {} }, action) => {
  switch (action.type) {
    case COMPANY_LOAD_SINGLE_REQUEST:
      return { loading: true };
    case COMPANY_LOAD_SINGLE_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        singleCompany: action.payload.company,
      };
    case COMPANY_LOAD_SINGLE_FAIL:
      return { loading: false, error: action.payload };
    case COMPANY_LOAD_SINGLE_RESET:
      return {};
    default:
      return state;
  }
};

//Registred company;
export const registerAcompanyReducer = (state = {}, action) => {
  switch (action.type) {
    case REGISTER_COMPANY_REQUEST:
      return { loading: true };
    case REGISTER_COMPANY_SUCCESS:
      return {
        loading: false,
        company: action.payload,
      };
    case REGISTER_COMPANY_FAIL:
      return { loading: false, error: action.payload };
    case REGISTER_COMPANY_RESET:
      return {};
    default:
      return state;
  }
};
