import { configureStore } from '@reduxjs/toolkit';
import ptCodeReducer from "../slices/ptCodeSlice"
import fenceDesignReducer from '../slices/FenceDesignSlice';
import FencePrice from '../slices/FencePrice';

export const store = configureStore({
  reducer: {
    price:FencePrice,
    ptCode:ptCodeReducer,
    selecteddesigns: fenceDesignReducer
  },
})