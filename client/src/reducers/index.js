import Header from "./Header.js"
import Sidebar from "./Sidebar.jsx";
import {combineReducers} from "redux"
const rootReducer=combineReducers({Header, Sidebar});
export default rootReducer;