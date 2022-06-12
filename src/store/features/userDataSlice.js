import { createSlice } from "@reduxjs/toolkit";
import { fetchUserConstellations } from "../../API/userService";

const userDataSlice = createSlice({
  name: "userData",
  initialState: {
    loading: false,
    isLoaded: false,
    favConstellations: [],
    errMssg: "",
  },
  reducers: {},
  extraReducers: {
    [fetchUserConstellations.pending]: (state) => {
      state.loading = true;
    },
    [fetchUserConstellations.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.isLoaded = true;
      state.favConstellations = payload.data;
    },
    [fetchUserConstellations.rejected]: (state, { payload }) => {
      state.loading = false;
      state.isLoaded = false;
      state.errMssg = payload;
    },
  },
});
export default userDataSlice;
