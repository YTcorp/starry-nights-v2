import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../../../API/authService";

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
    [loginUser.pending]: (state, { payload }) => {
      console.log("Pending");
      state.loading = true;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      console.log("fullfill", "payload", payload);
      state.loading = false;
      state.data = payload.login;
      state.isConnected = true;
    },
    [loginUser.rejected]: (state, { payload }) => {
      console.log("rejeced", "payload", payload);
      state.errMssg = payload;
      state.loading = false;
      state.isConnected = false;
    },
  },
});
export default loginSlice;
