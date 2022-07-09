import { configureStore } from "@reduxjs/toolkit";
import getUserAPIReducer from "./getUserAPI";
import getUserReposAPIReducer from "./getUserReposAPI";
import useObserverReducer from "./useObserver";

const store = configureStore({
  reducer: {
    getUserAPI: getUserAPIReducer,
    getUserRepos: getUserReposAPIReducer,
    useObserver: useObserverReducer,
  },
});

export default store;
