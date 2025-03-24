import { Grid2, LinearProgress } from "@mui/material";
import ItemCard from "../item/ItemCard";
import { useEffect, useState } from "react";
import { Item } from "../../models/Item";
import { api } from "../../api/api";

export default function Inventory() {
    const [items, setItems] = useState<Item[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {

        const fetchItems = async () => {
            const items = await api.Items.getAllItems();
            setItems(items);
        }

        fetchItems()
            .catch(err => console.log(err))
            .finally(() => setIsLoading(false));

    }, [])

    if (isLoading) return <LinearProgress color="inherit" />

    return (
        <>
            <Grid2 container spacing={2} columns={3}>
                {items.map(item =>
                    <ItemCard
                        key={item.itemId}
                        item={item}
                    />
                )}
            </Grid2 >
        </>
    )
}