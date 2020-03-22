import {combineReducers} from "redux";
import catalog from "./catalog";
import book from "./book";
import header from "./header";

export default combineReducers({catalog, book, header});