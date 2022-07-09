import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux/";
import { BASE_URL } from "@/api/api";

const initialState = {
  userRepos: [],
  isLoading: true,
};

export const getUserReposService = createAsyncThunk(
  "api/getUserRepos",
  async (action, thunkAPI) => {
    const fetchURL = await fetch(`${BASE_URL}/users/uisproject/repos`);
    const data = await fetchURL.json();
    return data;
  }
);

const getUserReposAPISlice = createSlice({
  name: "api/getUserRepos",
  initialState,
  reducers: {},
  extraReducers: {
    [getUserReposService.fulfilled]: (state, { payload }) => {
      state.userRepos = payload;
      state.isLoading = false;
    },
    [getUserReposService.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export const useGetUserReposAPI = () => {
  const state = useSelector((state) => state.getUserRepos);
  return state;
};

export default getUserReposAPISlice.reducer;
