import {configureStore } from '@reduxjs/toolkit';
import selectedStoreData from '../slices/selectedStoreData';
import Loading from '../slices/Loading';
import selectedDesign from '../slices/selectedDesign';
import selectedMaterials from '../slices/selectedMaterials';
import CartData from '../slices/CartData';
import BillingDetails from '../slices/BillingDetails';
import RoutesChecking from '../slices/RoutesChecking';

export const store = configureStore({
  reducer: {
        Loading,
        selectedStoreData,
        selectedDesign,
        selectedMaterials,
        CartData,
        BillingDetails,
        RoutesChecking,
  }})