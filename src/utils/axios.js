import axios from "axios";

export const baseURL = "http://54.38.188.38:5000";
export const ApiBaseURL = `${baseURL}/v1/api`;

export default axios.create({
  baseURL: ApiBaseURL,
});
