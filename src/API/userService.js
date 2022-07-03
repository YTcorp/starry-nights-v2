import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../utils/axios";

export const logoutUser = createAsyncThunk(
  "user/logoutUser",
  async (_, { rejectWithValue, getState }) => {
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
      rejectWithValue(error.response.data);
    }
  }
);

export const fetchUserFavoritesConstellations = createAsyncThunk(
  "user/getAllFavoritesUserConstellations",
  async (_, { rejectWithValue, getState }) => {
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
    const token = getState().login.token;
    try {
      const { data } = await api.post(
        "/constellation/favorite",
        {
          constellation_id: constellation_id,
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

export const patchProfileUser = createAsyncThunk(
  "user/modifyProfileUser",
  async (
    { firstname, lastname, email, password, notification },
    { rejectWithValue, getState }
  ) => {
    const token = getState().login.token;
    try {
      const { data } = await api.patch(
        "/user/",
        {
          firstname: firstname,
          lastname: lastname,
          email: email,
          oldPassword: password,
          notification: notification,
        },
        {
          headers: { authorization: token },
        }
      );
      return { data: data };
    } catch (error) {
      console.log(error);
      rejectWithValue(error.response.data);
    }
  }
);

export const saveFavoritePlace = createAsyncThunk(
  "user/savePlace",
  async ({ name, address }, { rejectWithValue, getState }) => {
    const token = getState().login.token;
    console.log("on saveFavPlace", name, address);
    try {
      const { data } = await api.post(
        "/place/",
        { name: name, address: address },
        { headers: { authorization: token } }
      );
      console.log(data);
      return data;
    } catch (error) {
      rejectWithValue(error.reponse.data);
    }
  }
);
