import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
  isVisible: false,
  options: {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  },
};

const useObserverSlice = createSlice({
  name: "useObserver",
  initialState,
  reducers: {
    setIsVisible: (state, { payload }) => {
      state.isVisible = payload;
    },
  },
});
export const { setIsVisible, setElement } = useObserverSlice.actions;

export const useObserverSelector = () => {
  const state = useSelector((state) => state.useObserver);
  return state;
};

export default useObserverSlice.reducer;
