import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Item } from "../../models/Item";

export const itemsApiSlice = createApi({
    reducerPath: "items",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5146/api",
    }),
    endpoints: (builder) => {
        return {
            getAllItems: builder.query<Item[], void>({
                query: () => `/items`,
            }),

            getItem: builder.query<Item, string>({
                query: itemId => `/items/${itemId}`
            }),

            addItem: builder.mutation({
                query: (item) => ({
                    url: "/items",
                    method: "POST",
                    body: item,
                }),
            }),
        }
    }
});

export const { useGetAllItemsQuery, useGetItemQuery, useAddItemMutation } = itemsApiSlice;