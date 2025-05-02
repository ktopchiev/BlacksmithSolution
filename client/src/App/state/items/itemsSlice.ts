import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import SearchParams from "../../models/item/SearchParams";

function initParams(): SearchParams {
    return {
        CurrentPageNumber: 1,
        ItemsOnPage: 12,
        OrderBy: "alphaAsc",
        Category: "",
        Material: "",
        Color: "",
    }
}

export const itemsSlice = createSlice({
    name: "items",
    initialState: {
        searchParams: initParams(),
    },
    reducers: {
        setSearchParams: (state, action: PayloadAction<Partial<SearchParams>>) => {
            state.searchParams = { ...state.searchParams, ...action.payload };
        }
    },
});

export const { setSearchParams } = itemsSlice.actions