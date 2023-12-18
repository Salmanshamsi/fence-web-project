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
    cleaDB_lines_design: (state) => {
      state.lines = [];
    },
  },
});

export const { addLine, cleaDB_lines_design } = canvasLine.actions;
export default canvasLine.reducer;
