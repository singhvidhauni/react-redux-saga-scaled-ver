import { combineReducers } from "redux";
import empReducer from "./empReducer";
import crudStatusReducer from "./crudStatusReducer";
import delEmpReducer from "./delEmpReducer";
import createEmpReducer from "./createEmpReducer";
import updateEmpReducer from "./updateEmpReducer";
import navReducer from "./navReducer";
export default combineReducers({
  employees: empReducer,
  crudStatus: crudStatusReducer,
  delEmp: delEmpReducer,
  createEmp: createEmpReducer,
  updateEmp: updateEmpReducer,
  nav:navReducer,
});
