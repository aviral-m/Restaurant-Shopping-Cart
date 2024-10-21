import { createSlice } from "@reduxjs/toolkit";
import { data } from "../App";

const initialState = {
    items: {
        1:0,
        2:0,
        3:0,
        4:0,
        5:0,
        6:0,
        7:0,
        8:0,
        9:0,
    },
    totalItems: 0,
    totalAmount : 0,
    showModal : false,
}

const itemcountSlice = createSlice({
    name : "itemcount",
    initialState,
    reducers : {

        addItem : (state,action) => {
            state.items = {...state.items, 
                [action.payload] : state.items[action.payload] + 1}
            state.totalItems = Object.values(state.items).
            reduce((a, b) => a + b, 0)
            state.totalAmount += data.find((item) => item.id == action.payload).price

        },
        rmvItem : (state,action) => {
            state.items = {...state.items, 
                [action.payload] : state.items[action.payload] - 1}
            state.totalItems = Object.values(state.items).
            reduce((a, b) => a + b, 0)
            state.totalAmount -= data.find((item) => item.id == action.payload).price
            
        },
        clearItem : (state,action) => {
            state.totalAmount -= (data.find((item) => item.id == action.payload).price*
            state.items[action.payload])
            state.items = {...state.items, 
                [action.payload] : 0}
            state.totalItems = Object.values(state.items).
            reduce((a, b) => a + b, 0)
            
        },
        clearAllItems : (state,action) =>{
            for(var key in state.items) {
                state.items[key] = 0;
              }
            state.totalItems = 0
            state.totalAmount = 0
            state.showModal = false
            state.imageBorder = 'food-img'
        },
        displayModal : (state,action) =>{
            state.showModal = true
        },
    }
})

export const {addItem,rmvItem,clearItem,updateAmount,clearAllItems,displayModal} = itemcountSlice.actions;
export default itemcountSlice.reducer;