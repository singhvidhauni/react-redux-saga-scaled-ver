import { CREATE_EMP_SUCCESS, CREATE_EMP_FAILURE } from "../utils/actionType";
const initialState = {
  employees: [],
  error: null,
};
const createEmpReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_EMP_SUCCESS:
      return {
        ...state,
        employees: {
          ...state.employees,
          [action.payload.id]: action.payload,
        },
        loading: false,
        error: null,
      };
    case CREATE_EMP_FAILURE:
      return {
        ...state,
        employees: { ...state.employees },
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
export default createEmpReducer;
