import { createSlice } from "@reduxjs/toolkit";

export const cartSlice= createSlice(
    {
        name: "cart",
        initialState: {
            value:{
                signalman: false,
                list: [
                // { name: "Banana", amount: 5, price: 2},
                // { name: "Banana", amount: 5, price: 2},
                // { name: "Banana", amount: 5, price: 2},
            ]
            }

        },
        reducers: {
            add: (state, newValue)=>{
                state.value.list.push(newValue.payload) 
            },

            remove: (state, id)=>{
                // SALVA SOLO I DATI DA NON CANCELLARE
                let result=[]
                state.value.list.map((el, index)=> {
                    if (index != id.payload){ 
                        result.push( el )
                    }
                })
                // SOVRASCRIVI
                state.value.list =result
            },
            
            resetSignalman: (state)=>{ state.value.signalman =false },
            activeSignalman: (state)=>{ state.value.signalman =true },
        }
    }
)

export const {add, remove, resetSignalman, activeSignalman}= cartSlice.actions
export const cartReducer= cartSlice.reducer