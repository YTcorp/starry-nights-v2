import { createReducer } from "@reduxjs/toolkit";
import { windowWidth } from "../actions/widthActions";

console.log(windowWidth("test"));

const initialState = {
  mediumLarge: false,
  miniLarge: false,
};

const widthReducer = createReducer(initialState, (builder) => {
  builder.addCase(windowWidth, (state, action) => {
    state.measure = action.payload;
  });
  // .addCase(deleteBooks, (state, action) => {
  //   state.books = state.books.filter((book) => book.id !== action.payload.id);
  // });
});

export default widthReducer;
