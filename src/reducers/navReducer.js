import { NAVIGATE_TO } from "../utils/actionType";
const initialState = {
    path:undefined, 
}
const navReducer = (state = initialState, action) => {
    switch(action.type) {
        case NAVIGATE_TO:
            return {
                ...state,
                path:action.payload,
            }
        default: 
         return state;
    }
}
export default navReducer;