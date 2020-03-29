import {combineReducers} from "redux";
import catalog from "./fetch";
import header from "./header";
import search from "./search";

export default combineReducers({catalog, header, search});