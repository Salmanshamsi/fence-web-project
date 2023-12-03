import { createSlice } from '@reduxjs/toolkit';

const canvasLine = createSlice({
  name: 'canvas',
  initialState: {
    lines: [],
  },
  reducers: {
    addLine: (state, action) => {
      state.lines.push(action.payload);
    },
    clearLines: (state) => {
      state.lines = [];
    },
  },
});

export const { addLine, clearLines } = canvasLine.actions;
export default canvasLine.reducer;
