import { Grid2, LinearProgress } from "@mui/material";
import ItemCard from "../item/ItemCard";
import { Item } from "../../App/models/Item";
import { useGetAllItemsQuery, useGetItemFiltersQuery } from "../../App/state/items/itemsApi";
import { PaginatedList } from "../../App/models/PaginatedList";
import { useAppSelector } from "../../App/state/store";
import ItemsFilter from "./components/ItemsFilter";
import SortSelect from "./components/SortSelect";
import ItemsPagination from "./components/ItemsPagination";

interface ItemsQuery {
    data?: PaginatedList;
    isLoading: boolean;
}

export default function Inventory() {

    const { itemsParams } = useAppSelector(store => store.items);
    const { data: items, isLoading }: ItemsQuery = useGetAllItemsQuery(itemsParams);
    const { data: filters } = useGetItemFiltersQuery();

    if (isLoading || !items) return <LinearProgress color="inherit" />

    return (

        <>
            <Grid2 container spacing={2} sx={{ m: 0, p: 0 }}>

                <Grid2 size={2} sx={{ display: "block", mt: "55px" }}>
                    <ItemsFilter title={"Category"} data={filters?.categories} />
                    <ItemsFilter title={"Materials"} data={filters?.materials} />
                    <ItemsFilter title={"Colors"} data={filters?.colors} />
                </Grid2>

                <Grid2 size={10}>
                    <Grid2 container spacing={2} direction={"column"} sx={{ m: 0 }}>

                        <Grid2 sx={{ display: "flex", justifyContent: "space-between" }}>
                            <SortSelect orderBy={itemsParams.OrderBy} />
                            <ItemsPagination totalPages={items.totalPages} currentPageNumber={itemsParams.CurrentPageNumber} />
                        </Grid2>

                        <Grid2 container spacing={2} columns={{ xs: 1, sm: 2, md: 3, lg: 4 }} sx={{ m: 0 }}>
                            {items?.items.map((item: Item) =>
                                <Grid2 size={1} key={item.itemId}>
                                    <ItemCard
                                        key={item.itemId}
                                        item={item}
                                    />
                                </Grid2>
                            )}
                        </Grid2 >

                        <Grid2 size={12} sx={{ display: "flex", justifyContent: "flex-end", my: 2 }}>
                            <ItemsPagination totalPages={items.totalPages} currentPageNumber={itemsParams.CurrentPageNumber} />
                        </Grid2>
                    </Grid2>
                </Grid2>
            </Grid2>
        </ >
    )
}
