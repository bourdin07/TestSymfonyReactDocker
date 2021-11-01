import { combineReducers } from "redux";
import userReducer from "./userReducer";
import errorReducer from "./errorReducer";

export const rootReducer = combineReducers({
    user: userReducer,
    error: errorReducer,
})

export default rootReducer;
