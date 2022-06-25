import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../utils/axios";
import { authHeader } from "../helpers/authHeader";
import { response401 } from "../helpers/response401";
import { logout } from "../helpers/logout";
import { loadState, saveState } from "../helpers/localStorage";

export const logoutUser = createAsyncThunk(
  "user/logoutUser",
  async (_, { rejectWithValue }) => {
    try {
      return await axios
        .get("/user/logout", { headers: authHeader() })
        .then((res) => {
          if (res.status === 200) {
            logout();
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
    console.log("on FetchFavsConsts");
    try {
      return await axios
        .get("/constellation/favorite", {
          headers: authHeader(),
        })
        .then((res) => {
          // if (res.status === 200) {
          //   loadState("favsConsts");
          //   // const data = JSON.stringify(res.data);
          //   // console.log(data);
          //   // localStorage.setItem("favsConsts", data);
          // }
          return res.data;
        });
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

export const getProfileUser = createAsyncThunk(
  "user/getProfileUser",
  async (_, { rejectWithValue }) => {
    try {
      return await axios
        .get("/user/", { headers: authHeader() })
        .then((res) => {
          return res.data;
        });
    } catch (error) {
      response401(error);
      console.log(error);
      rejectWithValue(error.response.data);
    }
  }
);
