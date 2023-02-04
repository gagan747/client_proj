import Header from "./Header.js"
import Sidebar from "./Sidebar.jsx";
import ProductDescriptionModal from "./ProductDescriptionModal.js";
import {combineReducers} from "redux"
const rootReducer=combineReducers({Header, Sidebar, ProductDescriptionModal});
export default rootReducer;