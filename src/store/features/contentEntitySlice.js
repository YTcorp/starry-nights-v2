import { createSlice } from "@reduxjs/toolkit";
import { fetchContentEntity } from "../../API/entityService";
import { fetchConstellationNames } from "../../API/constellationService";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    loading: false,
    isSuccess: false,
    data: [],
    dataNames: [],
    errMssg: "",
  },
  reducers: {},
  extraReducers: {
    [fetchContentEntity.pending]: (state) => {
      state.loading = true;
    },
    [fetchContentEntity.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.isSuccess = true;
      state.data = payload.data;
    },
    [fetchContentEntity.rejected]: (state, { payload }) => {
      state.loading = false;
      state.isSuccess = false;
      state.errMssg = payload;
    },
    [fetchConstellationNames.pending]: (state) => {
      state.loading = true;
    },
    [fetchConstellationNames.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.isSuccess = true;
      state.dataNames = payload.data;
    },
    [fetchConstellationNames.rejected]: (state, { payload }) => {
      state.loading = false;
      state.isSuccess = false;
      state.errMssg = payload;
    },
  },
});
export default loginSlice;
