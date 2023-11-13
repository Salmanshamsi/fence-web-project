// FenceDesignSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  imgSource: '',
  designText: '',
  woodS: '',
  opselect: '',
  gateDetails: {},
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
    woodSelection: (state , action) => {
      state.woodS = action.payload;
    },
    optSelect : (state , action)  => {
        state.opselect = action.payload
    },
  },
});

// Action creators are generated for each case reducer function
export const { imgValue, textValue, setGateDetails , woodSelection , optSelect } = FenceDesignSlice.actions;

export default FenceDesignSlice.reducer;
