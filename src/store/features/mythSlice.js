import { createSlice } from "@reduxjs/toolkit";
import { fetchRandomMyth } from "../../API/mythService";

const mythSlice = createSlice({
  name: "myth",
  initialState: {
    loading: false,
    isSuccess: false,
    randomMyth: [],
    errMssg: "",
  },
  reducers: {},
  extraReducers: {
    [fetchRandomMyth.pending]: (state) => {
      state.loading = true;
    },
    [fetchRandomMyth.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.isSuccess = true;
      state.randomMyth = payload.data;
    },
    [fetchRandomMyth.rejected]: (state, { payload }) => {
      state.loading = false;
      state.isSuccess = false;
      state.errMssg = payload;
    },
  },
});
export default mythSlice;
