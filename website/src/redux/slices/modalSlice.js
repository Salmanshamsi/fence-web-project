import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  nextside: 0,
  doneside:0
}

export const modalSlice = createSlice({
  name: 'stateValue',
  initialState,
  reducers: {

    nextSide: (state , action) => {
       state.nextside += action.payload;
    },

    
    doneSide: (state , action) => {
       state.doneside += action.payload;
    },
   
  },
})

// Action creators are generated for each case reducer function
export const { nextSide, doneSide } = modalSlice.actions;

export default modalSlice.reducer
