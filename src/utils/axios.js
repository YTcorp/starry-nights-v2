import axios from "axios";

export const baseURL = "http://localhost:3001";
export const ApiBaseURL = `${baseURL}/v1/api`;

export const api = axios.create({
  baseURL: ApiBaseURL,
  headers: {
    "Content-Type": "application/json",
  },
});
