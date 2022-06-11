import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../utils/axios";

export const fetchConstellationNames = createAsyncThunk(
  "constellation/getAllNamesIDs",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/constellation/names");
      return { data: data };
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
