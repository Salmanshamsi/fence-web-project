// FenceDesignSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  imgSource: '',
  designText: '',
  gateDetails: {}, // Details for each gate
};

export const FenceDesignSlice = createSlice({
  name: 'selecteddesigns',
  initialState,
  reducers: {
    imgValue: (state, action) => {
      state.imgSource = action.payload;
    },
    textValue: (state, action) => {
      state.designText = action.payload;
    },
    setGateDetails: (state, action) => {
      state.gateDetails = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { imgValue, textValue, setGateDetails } = FenceDesignSlice.actions;

export default FenceDesignSlice.reducer;
