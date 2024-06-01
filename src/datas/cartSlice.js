import { createSlice } from "@reduxjs/toolkit";

export const cartSlice= createSlice(
    {
        name: "cart",
        initialState: {
            value:[
                // { name: "Banana", amount: 5, price: 2},
                // { name: "Banana", amount: 5, price: 2},
                // { name: "Banana", amount: 5, price: 2},
            ]
        },
        reducers: {
            add: (state, newValue)=>{
                state.value.push(newValue.payload) 
            },

            remove: (state, id)=>{
                // SALVA SOLO I DATI DA NON CANCELLARE
                let result=[]
                state.value.map((el, index)=> {
                    if (index != id.payload){ 
                        result.push( el )
                    }
                })
                // SOVRASCRIVI
                state.value=result
            },
            
            reset: (state)=>{
                state.value=[]
            }
        }
    }
)

export const {add, remove}= cartSlice.actions
export const cartReducer= cartSlice.reducer