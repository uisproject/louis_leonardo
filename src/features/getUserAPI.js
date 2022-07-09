import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux/";
import { BASE_URL } from "@/api/api";

const initialState = {
  userData: null,
  isLoading: true,
};

export const getUserService = createAsyncThunk(
  "api/getUser",
  async (action, thunkAPI) => {
    const fetchURL = await fetch(`${BASE_URL}/users/uisproject`);
    const data = await fetchURL.json();
    return data;
  }
);

const getUserAPISlice = createSlice({
  name: "api/getUser",
  initialState,
  reducers: {},
  extraReducers: {
    [getUserService.fulfilled]: (state, { payload }) => {
      state.userData = payload;
      state.isLoading = false;
    },
    [getUserService.rejected]: (state, action) => {
      state.isLoading = true;
    },
  },
});

export const useGetUserAPI = () => {
  const state = useSelector((state) => state.getUserAPI);
  return state;
};

export default getUserAPISlice.reducer;
