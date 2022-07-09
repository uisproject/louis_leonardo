import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux/";
import { BASE_URL } from "@/api/api";

const initialState = {
  data: [],
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
    [getUserService.pending]: (state, action) => {
      console.log("pending");
    },
    [getUserService.fulfilled]: (state, { payload }) => {
      console.log(payload);
      console.log("fulfilled");
    },
    [getUserService.rejected]: (state, action) => {
      console.log("rejected");
    },
  },
});

export const useGetUserAPI = () => {
  const state = useSelector((state) => state.getUserAPI);
  return state;
};

export default getUserAPISlice.reducer;
