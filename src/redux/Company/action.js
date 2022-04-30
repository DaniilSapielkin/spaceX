import {
  GET_COMPANY_DATA,
  GET_COMPANY_DATA_SUCCESS,
  SET_CHOOSE_COMPANY,
} from "../../constants/actions";

export const getCompanyData = (payload) => ({
  type: GET_COMPANY_DATA,
  payload,
});

export const getCompanyDataSuccess = (payload) => ({
  type: GET_COMPANY_DATA_SUCCESS,
  payload,
});

export const setChooseCompany = (payload) => ({
  type: SET_CHOOSE_COMPANY,
  payload,
});
