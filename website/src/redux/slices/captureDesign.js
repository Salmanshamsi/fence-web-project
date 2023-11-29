import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  saveDesign : [],
};

export const captureDesign = createSlice({
  name: 'captureDesign',
  initialState,
  reducers: {
    captureDesignFromMap: (state,action) => {
      state.saveDesign.push(action.payload) 
    }
  },
});

// Action creators are generated for each case reducer function
export const {captureDesignFromMap} = captureDesign.actions;

export default captureDesign.reducer;
