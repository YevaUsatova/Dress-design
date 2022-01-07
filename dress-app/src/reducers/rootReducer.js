import {combineReducers} from "redux";
import usersReducer from "./usersReducer"
import dressReducer from "./dress.Reducer";

const rootReducer = combineReducers({
    usersReducer,
    dressReducer
})

export default rootReducer