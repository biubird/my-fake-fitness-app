import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function teacherReducer(state = initialState.teachers, action) {
  switch (action.type) {
    case types.LOAD_TEACHERS_SUCCESS:
      return action.teachers;
    default:
      return state;
  }
}
