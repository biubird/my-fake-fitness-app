import { combineReducers } from "redux";
import courses from "./courseReducer";
import teachers from "./teacherReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  courses,
  teachers,
  apiCallsInProgress,
});

export default rootReducer;
