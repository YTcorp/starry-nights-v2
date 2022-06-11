import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./features/login/loginSlice";
// import authMiddleware from "./features/login/authMiddleware";

const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(authMiddleware),
});

export default store;
