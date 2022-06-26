import { createAsyncThunk } from "@reduxjs/toolkit";
import { api_restricted } from "../utils/axios";
import { logout } from "../helpers/logout";
import { saveState } from "../helpers/localStorage";

export const logoutUser = createAsyncThunk(
  "user/logoutUser",
  async (_, { rejectWithValue }) => {
    try {
      return await api_restricted.get("/user/logout").then((res) => {
        logout();
        return res.data;
      });
    } catch (error) {
      console.log("logout error:", error);
      rejectWithValue(error.response.data);
    }
  }
);

export const fetchUserFavoritesConstellations = createAsyncThunk(
  "user/getAllFavoritesUserConstellations",
  async (_, { rejectWithValue }) => {
    console.log("on FetchFavsConsts");
    try {
      return await api_restricted.get("/constellation/favorite").then((res) => {
        saveState("favs_consts", res.data);
        return res.data;
      });
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const postUserFavoriteConstellation = createAsyncThunk(
  "user/postNewFavoriteUserConstellation",
  async ({ constellation_id }, { rejectWithValue }) => {
    try {
      const { data } = await api_restricted
        .post("/constellation/favorite", {
          constellation_id,
        })
        .then((res) => {
          return { data: data };
        });
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const deleteUserFavoriteConstellation = createAsyncThunk(
  "user/deleteOneFavoriteUserConstellation",
  async ({ id }, { rejectWithValue }) => {
    try {
      const { data } = await api_restricted.delete(
        `/constellation/favorite/${id}`
      );
      return { data: data };
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const getProfileUser = createAsyncThunk(
  "user/getProfileUser",
  async (_, { rejectWithValue }) => {
    try {
      return await api_restricted.get("/user/").then((res) => {
        console.log("on getUser");
        saveState("user_details", res.data);
        return res.data;
      });
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);
