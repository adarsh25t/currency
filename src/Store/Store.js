import { configureStore } from "@reduxjs/toolkit";
import ShowAddCurrency from "./ShowAddCurrency";


const store = configureStore({
    reducer:{
        show:ShowAddCurrency
    }
})

export default store;