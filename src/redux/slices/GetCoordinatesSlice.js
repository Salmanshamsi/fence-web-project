// selectionSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const GetCoordinatesSlice = createSlice({
  name: "getCoordinatesSlice",
  initialState: {
    startX: "",
    startY: "",
    endX: "",
    endY: "",
    allLinesShow: []
  },
  reducers: {
    gCoordinatesStartX: (state, action) => {state.startX = action.payload},
    gCoordinatesStartY: (state, action) => {state.startY = action.payload},
    gCoordinatesEndX: (state, action) => {state.endX = action.payload},
    gCoordinatesEndY: (state, action) => {state.endY = action.payload},
    showAllLine : (state , action) => {state.allLinesShow = action.payload}
  },
});

export const {
  gCoordinatesStartX,
  gCoordinatesStartY,
  gCoordinatesEndX,
  gCoordinatesEndY,
  showAllLine
} = GetCoordinatesSlice.actions;

export default GetCoordinatesSlice.reducer;
