import { configureStore } from "@reduxjs/toolkit";
import { itemsApi } from "./items/itemsApi";
import { rtkQueryErrorLogger } from "./middleware/rtkQueryErrorLogger";
import { itemsSlice } from "./items/itemsSlice";
import { useDispatch, useSelector } from "react-redux";
import { userSlice } from "./user/userSlice";
import { userApi } from "./user/userApi";

export const store = configureStore({
    reducer: {
        items: itemsSlice.reducer,
        [itemsApi.reducerPath]: itemsApi.reducer,
        user: userSlice.reducer,
        [userApi.reducerPath]: userApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({})
            .concat([
                itemsApi.middleware,
                userApi.middleware
            ])
            .prepend(rtkQueryErrorLogger);
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();