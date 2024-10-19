import { combineReducers } from "redux"; //Root Reducers
import user from "./user";
import movie from "./movie";
import tvSeries from "./tvseries";

export default combineReducers(user, tvSeries);
