import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalDrawLength : 0,
  LineLength: 0,
  SelectedDesignID:null,
  totalPrice : 0,
  panelPrice : 0,
  fencePrice : 0,
  optionPrice : 0,
  gatePrice : 0
};

export const FencePriceSlice = createSlice({
  name: 'selected',
  initialState,
  reducers: {
    totalDrawLength : (state , action) => {
      state.totalDrawLength += action.payload;
    },
      PanelPrice : (state , action) => {
        state.panelPrice = action.payload
      },
      FencePrice : (state , action) => {
        state.fencePrice = action.payload
      },
      OptionPrice : (state , action) => {
        state.optionPrice = action.payload
      },
      GatePrice : (state , action) => {
        state.gatePrice = action.payload
      },
    TotalPrice : (state) => {
      state.totalPrice = state.panelPrice + state.fencePrice + state.optionPrice + state.gatePrice;
    }
  },
});

// Action creators are generated for each case reducer function
export const {totalDrawLength, TotalPrice, PanelPrice, FencePrice, GatePrice, OptionPrice ,CanvasTotalLengthCalculation} = FencePriceSlice.actions;

export default FencePriceSlice.reducer;
