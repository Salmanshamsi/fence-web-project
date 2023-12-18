import { createSlice } from '@reduxjs/toolkit';

export const selectedMaterials = createSlice({
  name: 'selection',
  initialState:{
    selectedLines:[],
    Type_M : [
        {
        img:"https://designit.menards.com/media/Fence/selection/type/vinyl.jpg",
        txt:"Wood Picket",
        Details:{
            txt_1:"Wide variety and do-it-yourself installation allows for customization",
            txt_2:"Pickets available in Cedar, Pressure Treated, and Natural Wood",
            txt_3:"Installed heights range from 4' to 8'",
            txt_4:"Add your own stain or paint for the custom look you desire",
        },
    },],
    Fence_M : [
        {
            txt: "4'x8' Cedar Dog Ear",
            img: "https://designit.menards.com/media/Fence/selection/item/wood/1731374_4'%20x%208'%20Cedar%20Dog%20Ear%20Fence%20Panel.jpg",
            price: "96",
            index:0
        }, ],
    Option_M : [{
            txt: "4'x8' Cedar Dog Ear",
            img: "https://designit.menards.com/media/Fence/selection/item/wood/1731374_4'%20x%208'%20Cedar%20Dog%20Ear%20Fence%20Panel.jpg",
            price: "96",
            index:0
        },],
    Gate_M: {},
},
  reducers: {
    setType_M_Data :(state,action) => {
        
        function pushToZerothIndex(arr, element) {
            arr.splice(0, 0, element);
            return arr;
          }          
          pushToZerothIndex(state.Type_M, action.payload)

    },
    setFence_M_Data :(state,action) => {
        function pushToZerothIndex(arr, element) {
            arr.splice(0, 0, element);
            return arr;
          }          
          pushToZerothIndex(state.Fence_M, action.payload)
    },
    setOption_M_Data :(state,action) => {
        function pushToZerothIndex(arr, element) {
            arr.splice(0, 0, element);
            return arr;
          }          
          pushToZerothIndex(state.Option_M, action.payload)
    },
    setSelectedLines:(state,action)=>{
        state.selectedLines =  action.payload
    }
  },
});

export const { setType_M_Data, setFence_M_Data, setOption_M_Data, setSelectedLines } = selectedMaterials.actions;

export default selectedMaterials.reducer;
