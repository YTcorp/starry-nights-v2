import { createSlice } from "@reduxjs/toolkit";
import getLoginData from "./getLoginData";
import authMiddleware from "./authMiddleware";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    data: [],
    headers: [],
    isSucces: false,
    errMssg: "",
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [getLoginData.pending]: (state, { payload }) => {
      // we can change our state cause reduxjs already uses Immer to handle immutable states
      state.loading = true;
    },
    [getLoginData.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload.data;
      state.headers = payload.headers;
      state.isSuccess = true;
    },
    [getLoginData.rejected]: (state, { payload }) => {
      state.errMssg = payload;
      state.loading = false;
      state.isSuccess = false;
    },
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authMiddleware),
});
export default loginSlice;
