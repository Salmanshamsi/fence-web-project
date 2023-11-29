import {configureStore } from '@reduxjs/toolkit';
import ptCodeReducer from "../slices/ptCodeSlice"
import fenceDesignReducer from '../slices/FenceDesignSlice';
import FencePrice from '../slices/FencePrice';
import CartSlice from '../slices/CartSlice';
import billingInfoReducer from "../slices/BillingInfoSlice"
import selectionReducer from "../slices/SelectionSlice"
import captureDesign from '../slices/captureDesign';

export const store = configureStore({
  reducer: {
    captureDesign:captureDesign,
    price:FencePrice,
    ptCode:ptCodeReducer,
    selecteddesigns:fenceDesignReducer,
    allCartData:CartSlice,
    billinginfo: billingInfoReducer,
    selection: selectionReducer,
  }})