import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../../API/authService";
import { logoutUser } from "../../API/userService";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    data: [],
    isConnected: false,
    errMssg: "",
    loading: false,
  },
  reducers: {},
  extraReducers: {
    // we can change our state cause reduxjs already uses Immer to handle immutable states
    [loginUser.pending]: (state) => {
      state.loading = true;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload.login;
      state.isConnected = true;
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.errMssg = payload;
      state.loading = false;
      state.isConnected = false;
    },
    [logoutUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.isConnected = false;
      state.data = payload;
    },
  },
});
export default loginSlice;
