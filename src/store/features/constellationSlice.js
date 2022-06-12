import { createSlice } from "@reduxjs/toolkit";
import {
  fetchConstellations,
  fetchConstellationsNames,
} from "../../API/constellationService";

const constellationSlice = createSlice({
  name: "login",
  initialState: {
    loading: false,
    isLoaded: false,
    constellations: [],
    constellationsNames: [],
    errMssg: "",
  },
  reducers: {},
  extraReducers: {
    [fetchConstellations.pending]: (state) => {
      state.loading = true;
    },
    [fetchConstellations.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.isLoaded = true;
      state.constellations = payload.data;
    },
    [fetchConstellations.rejected]: (state, { payload }) => {
      state.loading = false;
      state.isLoaded = false;
      state.errMssg = payload;
    },
    [fetchConstellationsNames.pending]: (state) => {
      state.loading = true;
    },
    [fetchConstellationsNames.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.isLoaded = true;
      state.constellationsNames = payload.data;
    },
    [fetchConstellationsNames.rejected]: (state, { payload }) => {
      state.loading = false;
      state.isLoaded = false;
      state.errMssg = payload;
    },
  },
});
export default constellationSlice;
