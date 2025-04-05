import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Item } from "../../models/Item";
import { PaginatedList } from "../../models/PaginatedList";
import SearchParams from "../../models/SearchParams";
import ItemFilters from "../../models/ItemFilters";

export const itemsApi = createApi({
    reducerPath: "itemsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5146/api",
    }),
    tagTypes: ['Items'],
    endpoints: (builder) => {
        return {
            getAllItems: builder.query<PaginatedList, SearchParams | null>({
                query: (params) => {
                    const currentPage = params?.CurrentPageNumber;
                    const itemsOnPage = params?.ItemsOnPage;
                    const orderBy = params?.OrderBy;
                    return `items?CurrentPageNumber=${currentPage}&ItemsOnPage=${itemsOnPage}&OrderBy=${orderBy}`;
                },
                providesTags: ['Items']
            }),

            getItemById: builder.query<Item, string>({
                query: itemId => `/items/${itemId}`,
                providesTags: ['Items']
            }),

            getItemFilters: builder.query<ItemFilters, void>({
                query: () => {
                    return `/items/filters`;
                }
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

export const { useGetAllItemsQuery, useGetItemByIdQuery, useAddItemMutation, useGetItemFiltersQuery } = itemsApi;