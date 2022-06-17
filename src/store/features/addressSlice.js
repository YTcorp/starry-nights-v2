import { createSlice } from "@reduxjs/toolkit";
import { fetchAddress } from "../../API/geocodingService";

const addressSlice = createSlice({
  name: "address",
  initialState: {
    loading: false,
    address: [],
    errMssg: false,
  },
  reducers: {
    setLocationError(state, action) {
      state.errMssg = action.payload;
    },
    setAddress(state, action) {
      state.address = action.payload;
    },
  },
  extraReducers: {
    [fetchAddress.pending]: (state) => {
      state.loading = true;
    },
    [fetchAddress.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.address = payload;
    },
    [fetchAddress.rejected]: (state, { payload }) => {
      state.loading = false;
      state.errMssg = payload;
    },
  },
});
export const { setAddress, setLocationError } = addressSlice.actions;
export default addressSlice.reducer;
