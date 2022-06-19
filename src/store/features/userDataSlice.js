import { createSlice } from "@reduxjs/toolkit";
import { fetchUserFavoritesConstellations } from "../../API/userService";

const userDataSlice = createSlice({
  name: "userData",
  initialState: {
    favLoading: false,
    isLoaded: false,
    favConstellations: [],
    errMssg: "",
  },
  reducers: {
    setFavoritesConstellations(state, action) {
      state.favConstellations = action.payload;
    },
  },
  extraReducers: {
    [fetchUserFavoritesConstellations.pending]: (state) => {
      state.favLoading = true;
    },
    [fetchUserFavoritesConstellations.fulfilled]: (state, { payload }) => {
      state.favLoading = false;
      state.isLoaded = true;
      state.favConstellations = payload.data;
    },
    [fetchUserFavoritesConstellations.rejected]: (state, { payload }) => {
      state.favLoading = false;
      state.isLoaded = false;
      state.errMssg = payload;
    },
  },
});
export const { setFavoritesConstellations } = userDataSlice.actions;
export default userDataSlice.reducer;
