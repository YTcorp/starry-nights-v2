import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "../../API/authService";

const signupSlice = createSlice({
  name: "login",
  initialState: {
    isSuccess: false,
    errMssg: "",
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.loading = true;
    },
    [registerUser.fulfilled]: (state) => {
      state.loading = false;
      state.isSuccess = true;
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.errMssg = payload;
      state.isSuccess = false;
    },
  },
});
export default signupSlice;
