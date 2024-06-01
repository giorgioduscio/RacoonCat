import { createSlice } from "@reduxjs/toolkit";

export const tablesSlice =createSlice(
    {
        name: 'tables',
        initialState: {
            value:{
                selected:"",
                list: [
                    { id: 'A123', available: false },
                    { id: 'B198', available: true },
                    { id: 'C491', available: true },
                    { id: 'D778', available: false },
                    { id: 'E973', available: true },
                
                    { id: 'F456', available: true },
                    { id: 'G933', available: true },
                    { id: 'H951', available: false },
                    { id: 'I777', available: true },
                    { id: 'J792', available: true },
                    
                    { id: 'K624', available: true },
                    { id: 'L354', available: true },
                    { id: 'M984', available: true },
                    { id: 'N194', available: true },
                    { id: 'O276', available: true },
                ],
            }
        },
        reducers: {
            selectTable:(state, newValue)=>{
                console.log("tavolo selezionato",newValue.payload);
                state.value.selected =newValue.payload
            }
        }
    }
)

export const {selectTable} =tablesSlice.actions
export const tablesReducer =tablesSlice.reducer