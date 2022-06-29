import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../utils/axios";
import { saveState } from "../helpers/localStorage";

export const logoutUser = createAsyncThunk(
  "user/logoutUser",
  async (_, { rejectWithValue, getState }) => {
    console.log("on logout", getState().login.token.token);
    const token = getState().login.token.token;
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
    console.log("on FetchFavsConsts", getState().login.token.token);
    const token = getState().login.token.token;
    try {
      return await api
        .get("/constellation/favorite", {
          headers: { authorization: token },
        })
        .then((res) => {
          console.log("on FetchFavs, res:", res);
          if (res.status === 200) {
            return res.data;
          }
        });
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const postUserFavoriteConstellation = createAsyncThunk(
  "user/postNewFavoriteUserConstellation",
  async ({ constellation_id }, { rejectWithValue, getState }) => {
    console.log("on postfavconst", getState().login.token.token);
    const token = getState().login.token.token;
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
    console.log("on gelete fav const", getState().login.token.token);
    const token = getState().login.token.token;
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
    console.log("on getProfileuser", getState().login.token.token);
    const token = getState().login.token.token;
    try {
      return await api
        .get("/user/", {
          headers: { authorization: token },
        })
        .then((res) => {
          console.log("on getUser");
          saveState("user_details", res.data);
          return res.data;
        });
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

export const patchProfileUser = createAsyncThunk(
  "user/modifyProfileUser",
  async (
    { firstname, lastname, email, notification },
    { rejectWithValue, getState }
  ) => {
    console.log("on patchUser", getState().login.token.token);
    const token = getState().login.token.token;
    try {
      return await api
        .patch("/user/", {
          headers: { authorization: token },
        })
        .then((res) => {
          console.log("on patchUser");
          return res.data;
        });
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);
