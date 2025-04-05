import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import SearchParams from "../../models/SearchParams";

function initParams(): SearchParams {
    return {
        CurrentPageNumber: 1,
        ItemsOnPage: 12,
        OrderBy: "alphaAsc"
    }
}

export const itemsSlice = createSlice({
    name: "items",
    initialState: {
        itemsParams: initParams(),
    },
    reducers: {
        setItemsParams: (state, action: PayloadAction<Partial<SearchParams>>) => {
            state.itemsParams = { ...state.itemsParams, ...action.payload };
        }
    },
});

export const { setItemsParams } = itemsSlice.actions