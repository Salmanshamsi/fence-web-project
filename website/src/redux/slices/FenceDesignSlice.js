// FenceDesignSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  imgSource: '',
  designText: '',
  woodS: '',
  opselect: '',
  gateDetails: {},
  mainInRebate: 120,
  storeName:"",
  storeAdress:"",
  storeDistance:"",
  storePhone:""
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
    mailRebat: (state) => {
      state.mainInRebate
    },
    getStoreName : (state , action) => {
        state.storeName = action.payload;
    },
    getStoreDistance : (state , action) => {
      state.storeDistance = action.payload;
    },
    getStoreAdress : (state , action) => {
      state.storeAdress = action.payload;
    },
    getStorePhone : (state , action) => {
      state.storePhone = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { imgValue, textValue, setGateDetails , woodSelection , optSelect , mailRebat , getStoreName , getStoreDistance , getStoreAdress , getStorePhone} = FenceDesignSlice.actions;

export default FenceDesignSlice.reducer;
