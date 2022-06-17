import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../utils/axios";

export const fetchAddress = createAsyncThunk(
  "address/getOneAddressLocation",
  async (address, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/geocoding/forward/", {
        params: { address: address },
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

export const geocodingService = {
  fetchAddress,
};
export default geocodingService;
