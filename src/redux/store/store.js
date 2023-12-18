import {configureStore } from '@reduxjs/toolkit';
import ptCodeReducer from "../slices/ptCodeSlice"
import fenceDesignReducer from '../slices/FenceDesignSlice';
import FencePrice from '../slices/FencePrice';
import CartSlice from '../slices/CartSlice';
import billingInfoReducer from "../slices/BillingInfoSlice"
import selectionReducer from "../slices/SelectionSlice"
import canvasReducer from "../slices/canvasLine"
import GetCoordinatesReducer from "../slices/GetCoordinatesSlice"
import CanvasDesignReducer from "../slices/ContinueToCanvasSlice"
import captureDesign from '../slices/captureDesign';
import randomIdSlice from '../slices/randomIdSlice';
import loading from '../slices/loading';
import selectedData from '../slices/selectedData';
import continueBtnHandling from '../slices/continueBtnHandling';
import selectedMaterials from '../slices/selectedMaterials';

export const store = configureStore({
  reducer: {
    selectedMaterials:selectedMaterials,
    continueBtnHandling:continueBtnHandling,
    selectedData:selectedData,
    price:FencePrice,
    ptCode:ptCodeReducer,
    selecteddesigns:fenceDesignReducer,
    allCartData:CartSlice,
    billinginfo: billingInfoReducer,
    selection: selectionReducer,
    canvas: canvasReducer,
    corrdinates:GetCoordinatesReducer,
    canvasDesign : CanvasDesignReducer,
    captureDesign:captureDesign,
    randomIdSlice:randomIdSlice,
    loading:loading
  }})