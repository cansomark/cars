import { configureStore } from "@reduxjs/toolkit";
import { changeCost,changeName,formSliceReducer } from "./formSlice";
import { SearchCar,AddCar,RemoveCar,CarSliceReducer } from "./carsSlice"

const store=configureStore({
    reducer:{
        formReducer:formSliceReducer,
        carReducer:CarSliceReducer
    }
});

export  {store, changeCost,changeName,SearchCar,AddCar,RemoveCar}