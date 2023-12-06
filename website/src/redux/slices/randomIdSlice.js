import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  grandomId: 0,
};

export const randomIdSlice = createSlice({
  name: "randomidslice",
  initialState,
  reducers: {
    randomIdGET: (state, action) => {
      state.grandomId = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { randomIdGET } = randomIdSlice.actions;

export default randomIdSlice.reducer;