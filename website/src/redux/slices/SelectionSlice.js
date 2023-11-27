// selectionSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const selectionSlice = createSlice({
  name: 'selection',
  initialState: null,
  reducers: {
    setSelectedFence: (state, action) => action.payload,
  },
});

export const { setSelectedFence } = selectionSlice.actions;

export default selectionSlice.reducer;
