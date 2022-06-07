import { configureStore } from "@reduxjs/toolkit";
import widthReducer from "./reducers/widthReducer";

const store = configureStore({
  reducer: { measure: widthReducer },
});

export default store;
