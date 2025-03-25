import { configureStore } from "@reduxjs/toolkit";
import { itemsApiSlice } from "./items/itemApiSlice";

export const store = configureStore({
    reducer: {
        [itemsApiSlice.reducerPath]: itemsApiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(itemsApiSlice.middleware);
    }
})