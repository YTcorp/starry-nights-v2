import { configureStore } from "@reduxjs/toolkit";
// import { throttle } from "lodash";

// import { loadState, saveState } from "../helpers/localStorage";
// import authMiddleware from "./features/authMiddleware";
import loginSlice from "./features/loginSlice";
import signupSlice from "./features/signupSlice";
import constellationSlice from "./features/constellationSlice";
import mythSlice from "./features/mythSlice";
import userDataSlice from "./features/userDataSlice";
import modalSlice from "./features/modalSlice";
import addressSlice from "./features/addressSlice";

// const persistedState = loadState();
const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    signup: signupSlice.reducer,
    constellation: constellationSlice.reducer,
    myth: mythSlice.reducer,
    userData: userDataSlice,
    modal: modalSlice,
    address: addressSlice,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(authMiddleware),
  // persistedState,
});

// store.subscribe(
//   throttle(() => {
//     saveState({
//       newFavConst: store.getState().userData.favConstellations,
//     });
//   }, 1000)
// );

export default store;
