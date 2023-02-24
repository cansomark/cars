import { createSlice } from "@reduxjs/toolkit";
import { AddCar } from "./carsSlice";
const formSlice=createSlice({
    name:'form',
    initialState:{
        name:'',
        cost:0
    },
    reducers:{
        changeName(state,action){
            state.name=action.payload
        },
        changeCost(state,action){
            state.cost=action.payload
        }
    },
    extraReducers(builder){
        builder.addCase(AddCar,(state,action)=>{
            state.cost=0;
            state.name=""
        })
    }
});

export const {changeCost,changeName}=formSlice.actions;
export const formSliceReducer=formSlice.reducer;