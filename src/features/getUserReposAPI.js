import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux/";
import { BASE_URL } from "@/api/api";

const initialState = {
  data: [],
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
    [getUserReposService.pending]: (state, action) => {
      console.log("pending");
    },
    [getUserReposService.fulfilled]: (state, { payload }) => {
      console.log(payload);
      console.log("fulfilled");
    },
    [getUserReposService.rejected]: (state, action) => {
      console.log("rejected");
    },
  },
});

export const useGetUserReposAPI = () => {
  const state = useSelector((state) => state.getUserRepos);
  return state;
};

export default getUserReposAPISlice.reducer;
