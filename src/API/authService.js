import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../utils/axios";
import { login } from "../helpers/login";

export const registerUser = createAsyncThunk(
  "signup/postWithFirstName-LastName-Email-Pass",
  async ({ firstname, lastname, email, password }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/user/", {
        firstname,
        lastname,
        email,
        password,
      });
      return { data: data };
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/postByEmail-Pass",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      return await axios
        .post("/user/login", {
          email,
          password,
        })
        .then((res) => {
          if (res.status === 200) {
            login(res);
          }
          return res.data;
        });
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const authService = {
  registerUser,
  loginUser,
};
export default authService;

// loginUser, registerUser are the actions
// the ({ email, password }, { rejectWithValue }) => {...  is the action.payload
// the "users/fetchByEmail&Pass" is the type
