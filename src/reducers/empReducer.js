import {
  FETCH_EMP_SUCCESS,
  FETCH_EMP_FAILURE,
  FETCH_EMPS_SUCCESS,
  FETCH_EMPS_FAILURE,
} from "../utils/actionType";
const initialState = {
  employees: [],
  error: null,
};
const empReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EMP_SUCCESS:
      return {
        ...state,
        employees: {
          ...state.employees,
          [action.payload.id]: action.payload,
        },
        loading: false,
        error: null,
      };
    case FETCH_EMPS_SUCCESS:
      return {
        ...state,
        employees: action.payload.emps,
        loading: false,
        error: null,
      };
    case FETCH_EMPS_FAILURE:
      return {
        ...state,
        employees: { ...state.employees },
        loading: false,
        error: action.payload,
      };
    case FETCH_EMP_FAILURE:
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
export default empReducer;
