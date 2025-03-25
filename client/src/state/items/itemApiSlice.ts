import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Item } from "../../models/Item";

export const itemsApiSlice = createApi({
    reducerPath: "items",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5146/api",
    }),
    tagTypes: ['Items'],
    endpoints: (builder) => {
        return {
            getAllItems: builder.query<Item[], void>({
                query: () => `/items`,
                providesTags: ['Items']
            }),

            getItemById: builder.query<Item, string>({
                query: itemId => `/items/${itemId}`,
                providesTags: ['Items']
            }),

            addItem: builder.mutation({
                query: (item) => ({
                    url: "/items",
                    method: "POST",
                    body: item,
                }),
                invalidatesTags: ['Items']
            }),
        }
    }
});

export const { useGetAllItemsQuery, useGetItemByIdQuery, useAddItemMutation } = itemsApiSlice;