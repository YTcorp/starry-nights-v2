import { createSlice } from "@reduxjs/toolkit";
import { fetchLocation } from "../../API/geocodingService";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);
var now = dayjs().utc().format("YYYY-MM-DDThh:mm");

const addressSlice = createSlice({
  name: "address",
  initialState: {
    loading: false,
    address: [],
    location: [],
    date: now,
    errMssg: false,
  },
  reducers: {
    setAddress(state, action) {
      state.address = action.payload;
    },
    setLocation(state, action) {
      state.location = action.payload;
    },
    setDate(state, action) {
      state.date = action.payload;
    },
    setLocationError(state, action) {
      state.errMssg = action.payload;
    },
  },
  extraReducers: {
    [fetchLocation.pending]: (state) => {
      state.loading = true;
    },
    [fetchLocation.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.location = payload;
    },
    [fetchLocation.rejected]: (state, { payload }) => {
      state.loading = false;
      state.errMssg = payload;
    },
  },
});
export const { setAddress, setLocation, setDate, setLocationError } =
  addressSlice.actions;
export default addressSlice.reducer;
