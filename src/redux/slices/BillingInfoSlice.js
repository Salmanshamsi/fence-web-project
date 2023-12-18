// FenceDesignSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    fname:"",
    lname:"",
    businessName:"",
    adresslineOne:"",
    adresslineTwo:"",
    zipCode:"",
    city:"",
    country:"",
    sState:"",
    Bphone:""

};

export const BillingInfoSlice = createSlice({
  name: 'billinginfo',
  initialState,
  reducers: {
    FirstName : (state , action) => {
       state.fname = action.payload
    },
    LastName : (state , action) => {
       state.lname = action.payload
    },
    BusinessName : (state , action) => {
       state.businessName = action.payload
    },
    AdressLineOne : (state , action) => {
       state.adresslineOne = action.payload
    },
    AdressLineTwo : (state , action) => {
       state.adresslineTwo = action.payload
    },
    ZipCode : (state , action) => {
       state.zipCode = action.payload
    },
    City : (state , action) => {
       state.city = action.payload
    },
    Country : (state , action) => {
       state.country = action.payload
    },
    sState : (state , action) => {
       state.sState = action.payload
    },
    BPhone : (state , action) => {
       state.Bphone = action.payload
    },
  },
});

// Action creators are generated for each case reducer function
export const {FirstName , LastName , BusinessName , AdressLineOne , AdressLineTwo , ZipCode , City , Country , sState , BPhone} = BillingInfoSlice.actions;

export default BillingInfoSlice.reducer;
