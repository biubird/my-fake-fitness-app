import * as types from "./actionTypes";
import * as teacherApi from "../../api/teacherApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadTeachersSuccess(teachers) {
  return { type: types.LOAD_TEACHERS_SUCCESS, teachers }; // object shorthand syntax
}

export function loadTeachers() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return teacherApi
      .getTeachers()
      .then((teachers) => {
        dispatch(loadTeachersSuccess(teachers));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
