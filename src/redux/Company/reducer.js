import {
  GET_COMPANY_DATA,
  GET_COMPANY_DATA_SUCCESS,
  SET_CHOOSE_COMPANY,
} from "../../constants/actions";

const initialState = {
  companies: [],
  chooseCompany: {},
  loading: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_COMPANY_DATA:
      return {
        ...state,
        loading: false,
      };

    case GET_COMPANY_DATA_SUCCESS:
      return {
        ...state,
        companies: payload,
        loading: true,
      };

    case SET_CHOOSE_COMPANY:
      const chooseC = state.companies.find((company) => company.id === payload);

      return {
        ...state,
        chooseCompany: chooseC,
      };

    default:
      return {
        ...state,
      };
  }
};
