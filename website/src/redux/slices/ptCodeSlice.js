import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  pCOdeVal: 0,
}

export const ptCodeSlice = createSlice({
  name: 'ptCode',
  initialState,
  reducers: {
    
    getPtCode: (state,action) => {
        state.value = action.payload;
    },
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    checkStoreValue: (state , action) => {
      state.pCOdeVal = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount,getPtCode , checkStoreValue } = ptCodeSlice.actions

export default ptCodeSlice.reducer
