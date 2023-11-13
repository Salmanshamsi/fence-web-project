import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalDrawLength : 0,
  panelPrice : 0,
  fencePrice : 0,
  optionPrice : 0,
  totalPrice : 0,
};

export const FencePriceSlice = createSlice({
  name: 'selected',
  initialState,
  reducers: {
    totalDrawLength : (state , action) => {
      state.totalDrawLength = action.payload
    },
    PanelPrice : (state , action) => {
        state.panelPrice = action.payload
      },
      FencePrice : (state , action) => {
        state.fencePrice = action.payload
      },
      optionPrice : (state , action) => {
        state.optionPrice = action.payload
      },
    TotalPrice : (state) => {
      state.totalPrice = state.fencePrice + state.panelPrice + state.optionPrice
    }
  },
});

// Action creators are generated for each case reducer function
export const {totalDrawLength, TotalPrice, PanelPrice, FencePrice, optionPrice } = FencePriceSlice.actions;

export default FencePriceSlice.reducer;
