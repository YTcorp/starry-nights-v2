import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "../../API/authService";

const signupSlice = createSlice({
  name: "login",
  initialState: {
    loading: false,
    isSuccess: false,
    errMssg: "",
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
      state.isSuccess = false;
      state.errMssg = payload;
    },
  },
});
export default signupSlice;
