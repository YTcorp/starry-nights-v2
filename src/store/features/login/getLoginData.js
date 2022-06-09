import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../utils/axios";

const getLoginData = createAsyncThunk(
  "users/fetchByEmail&Pass",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const { data, headers } = await axios.post("/user/login", {
        email,
        password,
      });
      return { data: data, headers: headers };
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);
export default getLoginData;

// getLoginData is the action
// the "users/fetchByEmail&Pass" is the type
// the rest ({ email, password }, { rejectWithValue }) => {...  is the payload
