import axios from "axios";
// import { setupInterceptorsTo } from "../helpers/interceptors";

// export const baseURL = "http://localhost:3001";
export const baseURL = "http://starrynights.tato-api.ovh";
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
