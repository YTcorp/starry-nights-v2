import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../utils/axios";

export const logoutUser = createAsyncThunk(
  "user/logoutUser",
  async (_, { rejectWithValue, getState }) => {
    console.log("on logout");
    const token = getState().login.token;
    try {
      return await api
        .get("/user/logout", {
          headers: { authorization: token },
        })
        .then((res) => {
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
  async (_, { rejectWithValue, getState }) => {
    console.log("on FetchFavsConsts");
    const token = getState().login.token;
    try {
      return await api
        .get("/constellation/favorite", {
          headers: { authorization: token },
        })
        .then((res) => {
          return res.data;
        });
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const postUserFavoriteConstellation = createAsyncThunk(
  "user/postNewFavoriteUserConstellation",
  async ({ constellation_id }, { rejectWithValue, getState }) => {
    console.log("on postfav");
    const token = getState().login.token;
    try {
      const { data } = await api.post(
        "/constellation/favorite",
        {
          constellation_id,
        },
        {
          headers: { authorization: token },
        }
      );
      return { data: data };
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const deleteUserFavoriteConstellation = createAsyncThunk(
  "user/deleteOneFavoriteUserConstellation",
  async ({ id }, { rejectWithValue, getState }) => {
    console.log("on deletefav");
    const token = getState().login.token;
    try {
      const { data } = await api.delete(`/constellation/favorite/${id}`, {
        headers: { authorization: token },
      });
      return { data: data };
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const getProfileUser = createAsyncThunk(
  "user/getProfileUser",
  async (_, { rejectWithValue, getState }) => {
    console.log("on getProfile");
    const token = getState().login.token;
    try {
      return await api
        .get("/user/", {
          headers: { authorization: token },
        })
        .then((res) => {
          return res.data;
        });
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);
