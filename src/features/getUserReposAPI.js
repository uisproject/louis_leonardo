import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux/";
import { BASE_URL } from "@/api/api";

const initialState = {
  userRepos: [],
  filteredRepo: [],
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
  reducers: {
    setSearch: (state, { payload }) => {
      state.isLoading = true;
      const newData = state.userRepos.filter((repo) =>
        repo.name.includes(payload)
      );

      state.filteredRepo = newData;
      state.isLoading = false;
    },
  },
  extraReducers: {
    [getUserReposService.fulfilled]: (state, { payload }) => {
      state.userRepos = payload;
      state.filteredRepo = payload;
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

export const { setSearch } = getUserReposAPISlice.actions;

export default getUserReposAPISlice.reducer;
