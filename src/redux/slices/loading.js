// selectionSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const LoadingSlice = createSlice({
  name: "LoadingSlice",
  initialState: {
    isLoading: false,
  },
  reducers: {
    setIsLoading:(state,action) => {
      console.log(        state.isLoading)
        state.isLoading = action.payload;
    }
  },
});

export const {setIsLoading} = LoadingSlice.actions;

export default LoadingSlice.reducer;
