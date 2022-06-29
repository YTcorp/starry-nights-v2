import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../../API/authService";
import { logoutUser } from "../../API/userService";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    loading: false,
    isConnected: false,
    token: {},
    errMssg: "",
  },
  reducers: {},
  extraReducers: {
    // we can change our state cause reduxjs already uses Immer to handle immutable states
    [loginUser.pending]: (state) => {
      state.loading = true;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.isConnected = true;
      state.token = payload;
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.isConnected = false;
      state.errMssg = {};
    },
    [logoutUser.fulfilled]: (state, initialState) => {
      state = initialState;
    },
  },
});
export default loginSlice;
