import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
name:"cart",
initialState: {
    items: [],
},reducers:{
    addItem :(state,action)=>{
        //modifing state here
        state.items.push(action.payload)
    },
    removeIem :(state)=>{
        state.items.pop()
    },
    clearCart :(state)=>{
        state.items.length = 0
        //or return []
    },
}

});
export const {addItem,removeIem,clearCart} = cartSlice.actions;
export default cartSlice.reducer;