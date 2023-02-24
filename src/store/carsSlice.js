import { createSlice, nanoid } from "@reduxjs/toolkit";
const CarSlice=createSlice({
    name:'CarList',
    initialState:{
        searchCar:'',
        carList:[]
    },
    reducers:{
        SearchCar(state,action){
            state.searchCar=action.payload
        },

        AddCar(state, action) {
            state.carList.push({
                name:action.payload.name,
                cost:action.payload.cost,
                id:nanoid()
            })
           
        },

        RemoveCar(state,action){           
            const newList=state.carList.filter((car)=>{
                return car.id!==action.payload;
            });
           state.carList=newList
        }
    }

})

export const {SearchCar,AddCar,RemoveCar}=CarSlice.actions;
export const CarSliceReducer=CarSlice.reducer;