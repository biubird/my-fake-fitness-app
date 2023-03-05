import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/teachers/";

export function getTeachers() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}
