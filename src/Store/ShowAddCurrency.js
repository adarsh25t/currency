const { createSlice } = require("@reduxjs/toolkit");


const ShowAddCurrency = createSlice({
    name:"show",
    initialState:false,
    reducers:{
        showAdd:(state,action)=>{
            return state = true;
        }
    }
});
export const showAdd = ShowAddCurrency.actions;
export default ShowAddCurrency.reducer;