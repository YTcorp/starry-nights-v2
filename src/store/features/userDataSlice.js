import { createSlice } from "@reduxjs/toolkit";
import {
  fetchUserFavoritesConstellations,
  getProfileUser,
} from "../../API/userService";

const userDataSlice = createSlice({
  name: "userData",
  initialState: {
    favLoading: false,
    favSuccess: false,
    favConstellations: [],
    detailsLoading: false,
    detailsSuccess: false,
    userDetails: [],
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
      state.favConstellations = payload;
    },
    [fetchUserFavoritesConstellations.rejected]: (state, { payload }) => {
      state.favLoading = false;
      state.errMssg = payload;
    },
    [getProfileUser.pending]: (state) => {
      state.detailsLoading = true;
    },
    [getProfileUser.fulfilled]: (state, { payload }) => {
      state.detailsLoading = false;
      state.detailsSuccess = true;
      state.userDetails = payload;
    },
    [getProfileUser.rejected]: (state, { payload }) => {
      state.detailsLoading = false;
      state.detailsSuccess = false;
      state.errMssg = payload;
    },
  },
});
export const { setFavoritesConstellations } = userDataSlice.actions;
export default userDataSlice.reducer;
