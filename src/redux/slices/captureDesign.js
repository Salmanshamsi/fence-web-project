import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  saveDesign : [],
  FinalLineRecord : [],
  DesignId : null,
};

export const captureDesign = createSlice({
  name: 'captureDesign',
  initialState,
  reducers: {
    captureDesignFromMap: (state,action) => {
      state.saveDesign.push(action.payload) 
    },
    setDesignId: (state,action) => {
      state.DesignId = action.payload 
    },
    setFinalLineRecord: (state,action) => {
      state.FinalLineRecord = action.payload
    }
  },
});

// Action creators are generated for each case reducer function
export const {captureDesignFromMap, setFinalLineRecord, setDesignId} = captureDesign.actions;

export default captureDesign.reducer;