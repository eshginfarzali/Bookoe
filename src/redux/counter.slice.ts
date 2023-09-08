import {createSlice,type PayloadAction} from '@reduxjs/toolkit' 

interface CounterSate{
    count: number;
}
const initialState :CounterSate ={
    count: 0 ,
};

const counter = createSlice({
    name: '@counter',
    initialState,
    reducers:{
        increment :(state) =>{
            state.count++
        },
        decrement :(state) =>{
            state.count--
        },
        incrementByAmount :(state, action:PayloadAction<number>) =>{
            state.count += action.payload
        },
        reset :(state) =>{
            state.count=0
        },

    }
})

export const {increment, decrement,incrementByAmount,reset} =counter.actions

export default counter.reducer

