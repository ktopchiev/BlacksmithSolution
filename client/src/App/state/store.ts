import { configureStore } from "@reduxjs/toolkit";
import { itemsApiSlice } from "./items/itemApiSlice";
import { rtkQueryErrorLogger } from "./middleware/errorLoggerMiddleware";

export const store = configureStore({
    reducer: {
        [itemsApiSlice.reducerPath]: itemsApiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(itemsApiSlice.middleware).prepend(rtkQueryErrorLogger);
    }
})