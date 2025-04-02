import { Container, FormControl, Grid2, LinearProgress, MenuItem, Pagination, Select } from "@mui/material";
import ItemCard from "../item/ItemCard";
import { Item } from "../../App/models/Item";
import { useGetAllItemsQuery } from "../../App/state/items/itemApiSlice";
import { useState } from "react";
import { PaginatedList } from "../../App/models/PaginatedList";

interface ItemsQuery {
    data?: PaginatedList,
    isLoading: boolean
}

export default function Inventory() {

    const initSearchParams = { currentPageNumber: "1", itemsOnPage: "12" };
    const [searchParams, setSearchParams] = useState<URLSearchParams>(new URLSearchParams(initSearchParams));
    const [sort, setSort] = useState<string>("alphaAsc");
    const { data, isLoading }: ItemsQuery = useGetAllItemsQuery(searchParams?.toString());

    const handlePageClick = (event: React.ChangeEvent<unknown>, value: number) => {
        const params = new URLSearchParams();
        params.append("currentPageNumber", value.toString());
        params.append("itemsOnPage", "12");
        setSearchParams(params);
    };

    const handleSelectSort = (value: string) => {
        const params = searchParams;
        params.append("orderBy", value);
        setSort(value);
        setSearchParams(params);
    };

    const sortOptions = [
        { title: "Price: Low - High", value: "priceAsc" },
        { title: "Price: High - Low", value: "priceDesc" },
        { title: "Alphabetically: A - Z", value: "alphaAsc" },
        { title: "Alphabetically: Z - A", value: "alphaDesc" },
        { title: "Rating: Low - High", value: "ratingAsc" },
        { title: "Rating: High - Low", value: "ratingDesc" }
    ];

    if (isLoading) return <LinearProgress color="inherit" />

    return (
        <Container sx={{ display: "flex", flexDirection: "column", mx: "auto" }}>

            <Grid2 container spacing={2} columns={2} sx={{ my: 2 }}>

                <Grid2 size={1}>
                    <FormControl size="small">
                        <Select
                            labelId="sort-select-label"
                            id="sort-select"
                            variant="outlined"
                            value={sort}
                            label="Sort"
                            onChange={(event) => handleSelectSort(event.target.value as string)}
                            size="small"
                            sx={{
                                backgroundColor: "darkkhaki",
                                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "rgb(239, 209, 120)",
                                    boxShadow: "rgb(239, 209, 120) 1px 0 10px"
                                }
                            }}
                        >
                            {sortOptions.map(option => <MenuItem key={option.value} value={option.value}>{option.title}</MenuItem>)}
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
                        page={data?.currentPageNumber}
                        onChange={(event, value) => handlePageClick(event, value)}
                    />
                </Grid2>

            </Grid2>

            <Grid2 container spacing={2} columns={{ xs: 1, sm: 2, md: 3, lg: 4 }} sx={{ m: 0 }}>
                {data?.items.map((item: Item) =>
                    <Grid2 size={1}>
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
                        page={data?.currentPageNumber}
                        onChange={(event, value) => handlePageClick(event, value)}
                    />
                </Grid2>

            </Grid2>

        </Container >
    )
}
