import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../utils/axios";

export const fetchContentEntity = createAsyncThunk(
  "entity/getAllWithNameOfEntity",
  async ({ name }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/common/${name}`);
      return { data: data };
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
