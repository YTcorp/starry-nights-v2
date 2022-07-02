import axios from "axios";
// import { setupInterceptorsTo } from "../helpers/interceptors";

export const baseURL = "https://54.38.188.38:5000";
export const ApiBaseURL = `${baseURL}/v1/api`;

// export const api_restricted = setupInterceptorsTo(
//   axios.create({
//     baseURL: ApiBaseURL,
//     headers: {
//       "Content-Type": "application/json",
//     },
//   })
// );

export const api = axios.create({
  baseURL: ApiBaseURL,
  headers: {
    "Content-Type": "application/json",
  },
});
