import {combineReducers} from "redux";

import post from "./post"
import getAllData from "./post"
const appReducer =  combineReducers({
    post,
    getAllData
});

export default appReducer;