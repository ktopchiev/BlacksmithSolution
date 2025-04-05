import { Container, FormControl, Grid2, LinearProgress, MenuItem, Pagination, Select } from "@mui/material";
import ItemCard from "../item/ItemCard";
import { Item } from "../../App/models/Item";
import { useGetAllItemsQuery } from "../../App/state/items/itemsApi";
import { PaginatedList } from "../../App/models/PaginatedList";
import { useAppDispatch, useAppSelector } from "../../App/state/store";
import { setItemsParams } from "../../App/state/items/itemsSlice";

interface ItemsQuery {
    data?: PaginatedList,
    isLoading: boolean
}

export default function Inventory() {

    const dispatch = useAppDispatch();
    const { itemsParams } = useAppSelector(store => store.items);
    const { data, isLoading }: ItemsQuery = useGetAllItemsQuery(itemsParams);

    const sortOptions = [
        { title: "Price: Low - High", value: "priceAsc" },
        { title: "Price: High - Low", value: "priceDesc" },
        { title: "Alphabetically: A - Z", value: "alphaAsc" },
        { title: "Alphabetically: Z - A", value: "alphaDesc" },
        { title: "Rating: Low - High", value: "ratingAsc" },
        { title: "Rating: High - Low", value: "ratingDesc" }
    ];

    if (isLoading || !data) return <LinearProgress color="inherit" />

    return (
        <Container sx={{ display: "flex", flexDirection: "column" }}>

            <Grid2 container spacing={2} columns={2} sx={{ my: 2 }}>

                <Grid2 size={1}>
                    <FormControl size="small">
                        <Select
                            labelId="sort-select-label"
                            id="sort-select"
                            variant="outlined"
                            value={itemsParams.OrderBy}
                            label="Sort"
                            onChange={(event) => dispatch(setItemsParams({ OrderBy: event.target.value }))}
                            size="small"
                            sx={{
                                backgroundColor: "darkkhaki",
                                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "rgb(239, 209, 120)",
                                    boxShadow: "rgb(239, 209, 120) 1px 0 10px"
                                }
                            }}
                        >
                            {sortOptions.map(option =>
                                <MenuItem
                                    key={option.value}
                                    value={option.value}
                                >
                                    {option.title}
                                </MenuItem>
                            )}
                        </Select>
                    </FormControl>
                </Grid2>

                <Grid2 size={1} display={"flex"} justifyContent={"flex-end"}>
                    <Pagination
                        size="small"
                        sx={{
                            "& .MuiPaginationItem-root": {
                                color: "black",
                                backgroundColor: "darkkhaki",
                                "&:hover": {
                                    backgroundColor: "sienna",
                                },
                            },
                            "& .Mui-selected": {
                                backgroundColor: "#423030",
                                color: "white",
                            },
                        }}
                        count={data?.totalPages}
                        page={itemsParams.CurrentPageNumber}
                        onChange={(event, value) => dispatch(setItemsParams({ CurrentPageNumber: value }))}
                    />
                </Grid2>

            </Grid2>

            <Grid2 container spacing={2} columns={{ xs: 1, sm: 2, md: 3, lg: 4 }} sx={{ m: 0 }}>
                {data?.items.map((item: Item) =>
                    <Grid2 size={1} key={item.itemId}>
                        <ItemCard
                            key={item.itemId}
                            item={item}
                        />
                    </Grid2>
                )}

            </Grid2 >


            <Grid2 container sx={{ my: 5 }} columns={3}>

                <Grid2 size={1}></Grid2>
                <Grid2 size={1}></Grid2>

                <Grid2 size={1} display={"flex"} justifyContent={"flex-end"}>
                    <Pagination
                        size="small"
                        sx={{
                            "& .MuiPaginationItem-root": {
                                color: "black",
                                backgroundColor: "darkkhaki",
                                "&:hover": {
                                    backgroundColor: "sienna",
                                },
                            },
                            "& .Mui-selected": {
                                backgroundColor: "#423030",
                                color: "white",
                            },
                        }}
                        count={data?.totalPages}
                        page={itemsParams.CurrentPageNumber}
                        onChange={(event, value) => dispatch(setItemsParams({ CurrentPageNumber: value }))}
                    />
                </Grid2>

            </Grid2>

        </Container >
    )
}
