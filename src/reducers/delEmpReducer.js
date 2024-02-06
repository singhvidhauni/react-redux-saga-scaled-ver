import { DELETE_EMP_SUCCESS, DELETE_EMP_FAILURE } from "../utils/actionType";
const initialState = {
  employees: [],
  error: null,
};
const delEmpReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_EMP_SUCCESS:
      const { [action.payload.id]: removeEmployee, ...remainingEmployees } =
        state.employees;
      return {
        ...state,
        employees: remainingEmployees,
        ...action.payload,
        loading: false,
        error: null,
      };
    case DELETE_EMP_FAILURE:
      const { status, statusText, ...newState } = state;
      return {
        ...newState,
        employees: { ...state.employees },
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default delEmpReducer;
