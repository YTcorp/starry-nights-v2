import { createSlice } from "@reduxjs/toolkit";
import {
  fetchUserFavoritesConstellations,
  getProfileUser,
  saveFavoritePlace,
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
    favPlaceLoading: false,
    favPlaces: [],
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
      state.detailsSuccess = false;
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
    [saveFavoritePlace.pending]: (state) => {
      state.favPlaceLoading = true;
    },
    [saveFavoritePlace.fulfilled]: (state, { payload }) => {
      state.favPlaceLoading = false;
    },
    [saveFavoritePlace.rejected]: (state, { payload }) => {
      state.favPlaceLoading = false;
      state.errMssg = payload;
    },
  },
});
export const {
  setFavoritesConstellations,
  setLocalFavPlaceName,
  setLocalFavPlaceAddress,
} = userDataSlice.actions;
export default userDataSlice.reducer;
