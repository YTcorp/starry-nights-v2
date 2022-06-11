import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./features/loginSlice";
import signupSlice from "./features/signupSlice";

const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    signup: signupSlice.reducer,
  },
});

export default store;
