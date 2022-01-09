import {combineReducers} from "redux";
import usersReducer from "./usersReducer"
import dressReducer from "./dressReducer";

const rootReducer = combineReducers({
    usersReducer,
    dressReducer
})

export default rootReducer