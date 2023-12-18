// FenceDesignSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartData: [],
  value: 1
};

export const FenceDesignSlice = createSlice({
  name: 'allCartData',
  initialState,
  reducers: {
    cartItems : (state , action) => {
        state.cartData.push(action.payload);
    },
    removeCartItem: (state, action) => {
      // Remove the item at the specified index
      state.cartData.splice(action.payload, 1);
    },
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
  },
});

// Action creators are generated for each case reducer function
export const { cartItems , removeCartItem , increment , decrement } = FenceDesignSlice.actions;

export default FenceDesignSlice.reducer;
