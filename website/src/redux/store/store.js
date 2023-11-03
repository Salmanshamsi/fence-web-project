import { configureStore } from '@reduxjs/toolkit';
import ptCodeReducer from "../slices/ptCodeSlice"

export const store = configureStore({
  reducer: {
    ptCode:ptCodeReducer,
  },
})