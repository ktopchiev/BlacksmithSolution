import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { Item } from "../../models/Item";

export default function ItemPage() {
    const params = useParams();
    const [item, setItem] = useState<Item | null>(null);
    const baseUrl = "http://localhost:5146/api/Items/";

    useEffect(() => {
        fetch(`${baseUrl}${params.itemId}`)
            .then(res => res.json())
            .then(data => setItem(data))
            .catch(err => console.log(err));
    }, [params])

    return (
        <>
            <ul>
                <li key={item?.name}>
                    {item?.name}
                </li>
                <li key={item?.description}>
                    {item?.description}
                </li>
                <li key={item?.imageUrl}>
                    <img src={item?.imageUrl} height={"150px"} />
                </li>
            </ul>
        </>
    )
}