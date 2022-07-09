import { configureStore } from "@reduxjs/toolkit";
import getUserAPIReducer from "./getUserAPI";
import getUserReposAPIReducer from "./getUserReposAPI";

const store = configureStore({
  reducer: {
    getUserAPI: getUserAPIReducer,
    getUserRepos: getUserReposAPIReducer,
  },
});

export default store;
