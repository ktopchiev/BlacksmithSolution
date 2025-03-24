import { Grid2 } from "@mui/material";
import ItemCard from "../item/ItemCard";
import { useEffect, useState } from "react";
import { Item } from "../../models/Item";
import { api } from "../../api/api";

export default function Inventory() {
    const [items, setItems] = useState<Item[]>([]);

    useEffect(() => {

        const fetchItems = async () => {
            const items = await api.Items.getAllItems();
            setItems(items);
        }

        fetchItems()
            .catch(err => console.log(err));

    }, [])

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