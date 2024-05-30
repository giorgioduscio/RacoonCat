import { configureStore } from "@reduxjs/toolkit";

import { productsReducer } from "./productsSlice";
import { cartReducer } from "./cartSlice";
import { cronologyReducer } from "./cronologySlice";
import { tablesReducer } from "./tablesSlice";


export default configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer,
        cronology: cronologyReducer,
        tables: tablesReducer,
    }
})