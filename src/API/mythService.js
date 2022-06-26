import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../utils/axios";

export const fetchRandomMyth = createAsyncThunk(
  "myth/getOneRandomMyth",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get("/myth/random");
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
