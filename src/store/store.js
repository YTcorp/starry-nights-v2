import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./features/loginSlice";
import signupSlice from "./features/signupSlice";
import constellationSlice from "./features/constellationSlice";
import userDataSlice from "./features/userDataSlice";

const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    signup: signupSlice.reducer,
    constellation: constellationSlice.reducer,
    userData: userDataSlice.reducer,
  },
});

export default store;
