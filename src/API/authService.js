import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../utils/axios";

export const registerUser = createAsyncThunk(
  "signup/postWithFirstName-LastName-Email-Pass",
  async ({ firstname, lastname, email, password }, { rejectWithValue }) => {
    try {
      const { data } = await api.post("/user/", {
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
      return await api
        .post("/user/login", {
          email,
          password,
        })
        .then((res) => {
          console.log("on login");
          if (res.status === 200) {
            // const token = res.headers.authorization.match(/Bearer\s(.*)/)[1];
            const token = res.headers.authorization;
            return { token };
          }
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
