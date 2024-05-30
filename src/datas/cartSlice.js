import { createSlice } from "@reduxjs/toolkit";

export const cartSlice= createSlice(
    {
        name: "cart",
        initialState: {
            value:[{}]
        },
        reducers: {
            add: (state, newValue)=>{
                console.log('action', newValue);
                state.value.push(newValue.payload) 
            },
            remove: (state, id)=>{
                // SALVA SOLO I DATI DA NON CANCELLARE
                let result=[]
                state.value.map(el=> {
                    if (el.id != id.payload){ 
                        result.push( el )
                    }
                })
                // SOVRASCRIVI
                state.value=result
            },
        }
    }
)

export const {add, remove}= cartSlice.actions
export const cartReducer= cartSlice.reducer