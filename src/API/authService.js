import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../utils/axios";

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
            localStorage.setItem(
              "token_user",
              res.headers.authorization.match(/Bearer\s(.*)/)[1]
            );
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
// the "users/fetchByEmail&Pass" is the type
// the rest ({ email, password }, { rejectWithValue }) => {...  is the action.payload
