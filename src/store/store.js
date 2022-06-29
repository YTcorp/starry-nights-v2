import { combineReducers, configureStore } from "@reduxjs/toolkit";

// import authMiddleware from "./features/authMiddleware";
import loginSlice from "./features/loginSlice";
import signupSlice from "./features/signupSlice";
import constellationSlice from "./features/constellationSlice";
import mythSlice from "./features/mythSlice";
import userDataSlice from "./features/userDataSlice";
import modalSlice from "./features/modalSlice";
import addressSlice from "./features/addressSlice";

const combineReducer = combineReducers({
  login: loginSlice.reducer,
  signup: signupSlice.reducer,
  constellation: constellationSlice.reducer,
  myth: mythSlice.reducer,
  userData: userDataSlice,
  modal: modalSlice,
  address: addressSlice,
});

const rootReducer = (state, action) => {
  console.log(action, action.type, state);
  if (action.type === "user/logoutUser/fulfilled") {
    state = undefined;
  }
  return combineReducer(state, action);
};

export default configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
