import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../utils/axios";

export const fetchRandomMyth = createAsyncThunk(
  "myth/getOneRandomMyth",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/myth/random");
      console.log("on mythService", data.data);
      return { data: data };
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const authService = {
  fetchRandomMyth,
};
export default authService;
