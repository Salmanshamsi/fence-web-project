// selectionSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const selectionSlice = createSlice({
  name: 'selection',
  initialState:{
    _selectedDataImg : null,
    _selectedDataText : null,
    _selectedDataDetails: null,
},
  reducers: {
    SelectedDataImg : (state,actions) => {
        state._selectedDataImg = actions.payload
    },
    SelectedDataText : (state,actions) => {
        state._selectedDataText = actions.payload
    },
    SelectedDataDetails : (state,actions) => {
        state._selectedDataDetails = actions.payload
    },
  },
});
export const { SelectedDataImg, SelectedDataText, SelectedDataDetails } = selectionSlice.actions;

export default selectionSlice.reducer;
