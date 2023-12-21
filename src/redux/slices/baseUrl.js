import { createSlice } from '@reduxjs/toolkit';

export const _baseUrl = createSlice({
  name: '_baseUrl',
  
  initialState:{
        baseUrl : "http://localhost:5173"
    },

  reducers: {
    setBaseUrl:()=>{}
  },

});

export const { setBaseUrl } = _baseUrl.actions;

export default _baseUrl.reducer;
