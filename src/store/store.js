import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./features/login/loginSlice";

const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
  },
});

export default store;
