import { combineReducers } from "redux";
import Company from "./Company/reducer";

const appReducer = combineReducers({
  Company,
});

export default appReducer;
