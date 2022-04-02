const { createSlice } = require("@reduxjs/toolkit");


const ShowAddCurrency = createSlice({
    name:"show",
    initialState:false,
    reducers:{
        showAdd:(state,action)=>{
            return true;
        },
        hideAdd:(state,action)=>{
            return false;
        }
    }
});
export const {showAdd,hideAdd} = ShowAddCurrency.actions;
export default ShowAddCurrency.reducer;