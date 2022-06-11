import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./features/loginSlice";
import signupSlice from "./features/signupSlice";
import contentEntitySlice from "./features/contentEntitySlice";

const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    signup: signupSlice.reducer,
    entity: contentEntitySlice.reducer,
  },
});

export default store;
