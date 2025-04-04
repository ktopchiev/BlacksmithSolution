import { Grid2, LinearProgress } from "@mui/material";
import ItemCard from "../item/ItemCard";
import { Item } from "../../models/Item";
import { useGetAllItemsQuery } from "../../state/items/itemApiSlice";

export default function Inventory() {
    const { data: items = [], isLoading } = useGetAllItemsQuery();

    if (isLoading) return <LinearProgress color="inherit" />

    return (
        <>
            <Grid2 container spacing={2} columns={3}>
                {
                    items.map((item: Item) =>
                        <ItemCard
                            key={item.itemId}
                            item={item}
                        />
                    )}
            </Grid2 >
        </>
    )
}