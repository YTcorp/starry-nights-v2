import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../utils/axios";

export const fetchConstellations = createAsyncThunk(
  "constellation/getAllConstellations",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get("/constellation/");
      return { data: data };
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

// export const fetchConstellationsNames = createAsyncThunk(
//   "constellation/getAllNamesIDs",
//   async (_, { rejectWithValue }) => {
//     try {
//       const { data } = await api.get("/constellation/names");
//       return { data: data };
//     } catch (error) {
//       return rejectWithValue(error.response.data.message);
//     }
//   }
// );

export const authService = {
  fetchConstellations,
  // fetchConstellationsNames,
};
export default authService;
