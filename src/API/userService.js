import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../utils/axios";
import { authHeader, response401 } from "./authHeader";

export const logoutUser = createAsyncThunk(
  "user/logoutUser",
  async (_, { rejectWithValue }) => {
    try {
      return await axios
        .get("/user/logout", { headers: authHeader() })
        .then((res) => {
          if (res.status === 200) {
            localStorage.removeItem("token_user");
            localStorage.getItem("userConnected") &&
              localStorage.removeItem("userConnected");
          }
          return res.data;
        });
    } catch (error) {
      response401(error);
      rejectWithValue(error.response.data);
    }
  }
);

export const fetchUserFavoritesConstellations = createAsyncThunk(
  "user/getAllFavoritesUserConstellations",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/constellation/favorite", {
        headers: authHeader(),
      });
      return { data: data };
    } catch (error) {
      response401(error);
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const postUserFavoriteConstellation = createAsyncThunk(
  "user/postNewFavoriteUserConstellation",
  async ({ constellation_id }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        "/constellation/favorite",
        { constellation_id },
        {
          headers: authHeader(),
        }
      );
      return { data: data };
    } catch (error) {
      response401(error);
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const deleteUserFavoriteConstellation = createAsyncThunk(
  "user/deleteOneFavoriteUserConstellation",
  async ({ id }, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/constellation/favorite/${id}`, {
        headers: authHeader(),
      });
      return { data: data };
    } catch (error) {
      response401(error);
      return rejectWithValue(error.response.data.message);
    }
  }
);

// export const authService = {
//   logoutUser,
// };
// export default authService;
