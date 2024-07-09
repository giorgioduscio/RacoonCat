import { createSlice } from "@reduxjs/toolkit";

export const cronologySlice= createSlice(
    {
        name: "cronology",
        initialState: {
            value:[
                // {
                //     tableSelected: "aaa",
                //     date:"23/45/12", 
                //     cart:[
                //         {amount:10, name:"barbabietola", price:1},
                //         {amount:10, name:"banana", price:1},
                //     ]
                // },
                // {
                //     tableSelected: "bbb",
                //     date:"30/05/14", 
                //     cart:[
                //         {amount:10, name:"banana", price:1},
                //         {amount:10, name:"lampone", price:1},
                //         {amount:10, name:"limone", price:1},
                //     ]
                // },
            ]
        },

        reducers: {
            addCronology: (state, newData)=>{
                state.value.push(newData.payload) 
            },
        }
    }
)

export const {addCronology, removeCronology} =cronologySlice.actions
export const cronologyReducer =cronologySlice.reducer