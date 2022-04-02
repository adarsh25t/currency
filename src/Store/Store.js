import { configureStore } from "@reduxjs/toolkit";
import ShowAddCurrency from "./ShowAddCurrency";
import Currency from "./ShowAllCurrency";



const store = configureStore({
    reducer:{
        show:ShowAddCurrency,
        currency:Currency
    }
})

export default store;