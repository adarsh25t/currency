import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const Currency = createSlice({
    name:"currency",
    initialState:[],
    reducers:{
        AllCurrency:(state,action)=>{
            state.push(action.payload)
        }
    }
})

export const {AllCurrency} = Currency.actions;
export default Currency.reducer;