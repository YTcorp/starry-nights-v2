import { createSlice } from "@reduxjs/toolkit";
import { fetchUserFavoritesConstellations } from "../../API/userService";

const userDataSlice = createSlice({
  name: "userData",
  initialState: {
    loading: false,
    isLoaded: false,
    favConstellations: [],
    errMssg: "",
  },
  reducers: {
    setFavoritesConstellations(state, action) {
      console.log("new favs constellations:", action.payload);
      state.favConstellations = action.payload;
    },
  },
  extraReducers: {
    [fetchUserFavoritesConstellations.pending]: (state) => {
      state.loading = true;
    },
    [fetchUserFavoritesConstellations.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.isLoaded = true;
      state.favConstellations = payload.data;
    },
    [fetchUserFavoritesConstellations.rejected]: (state, { payload }) => {
      state.loading = false;
      state.isLoaded = false;
      state.errMssg = payload;
    },
  },
});
export const { setFavoritesConstellations } = userDataSlice.actions;
export default userDataSlice.reducer;
