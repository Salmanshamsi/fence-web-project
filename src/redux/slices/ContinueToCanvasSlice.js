// FenceDesignSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cdesign : []
};

export const ContinueToCanvasSlice = createSlice({
  name: "continuetocanvs",
  initialState,
  reducers: {
    continueCanvasDesign: (state, action) => {
      state.cdesign.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { continueCanvasDesign } = ContinueToCanvasSlice.actions;

export default ContinueToCanvasSlice.reducer;
