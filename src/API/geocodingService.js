import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../utils/axios";

export const fetchLocation = createAsyncThunk(
  "address/getOneAddressLocation",
  async (address, { rejectWithValue }) => {
    try {
      const { data } = await api.get("/geocoding/forward/", {
        params: { address: address.address },
      });
      const result = {
        latitude: data[0].latitude,
        longitude: data[0].longitude,
      };
      return result;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const fetchAddress = createAsyncThunk(
  "address/getOneLocationAddress",
  async ({ latitude, longitude }, { rejectWithValue }) => {
    try {
      const { data } = await api.get(
        `/geocoding/reverse/?gps=${latitude},${longitude}`
      );
      return data[0].label;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const geocodingService = {
  fetchLocation,
  fetchAddress,
};
export default geocodingService;
