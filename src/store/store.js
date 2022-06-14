import { configureStore } from "@reduxjs/toolkit";

import authMiddleware from "./features/authMiddleware";
import loginSlice from "./features/loginSlice";
import signupSlice from "./features/signupSlice";
import constellationSlice from "./features/constellationSlice";
import mythSlice from "./features/mythSlice";
import userDataSlice from "./features/userDataSlice";
import modalSlice from "./features/modalSlice";

const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    signup: signupSlice.reducer,
    constellation: constellationSlice.reducer,
    myth: mythSlice.reducer,
    userData: userDataSlice,
    modal: modalSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authMiddleware),
});

export default store;
