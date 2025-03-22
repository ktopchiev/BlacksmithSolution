import { Grid2 } from "@mui/material";
import ItemCard from "../item/ItemCard";
import { useEffect, useState } from "react";
import { Item } from "../../models/Item";

export default function Inventory() {
    const [items, setItems] = useState<Item[]>([]);
    const url = "http://localhost:5146/api/Items";

    useEffect(() => {

        fetch(url)
            .then(res => res.json())
            .then(data => setItems(data))
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