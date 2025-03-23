import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { Item } from "../../models/Item";
import { Box, Container, Grid2, Rating, Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";

export default function ItemPage() {
    const params = useParams();
    const [item, setItem] = useState<Item | null>(null);
    const [rating, setRating] = useState<number>(0);

    const baseUrl = "http://localhost:5146/api/Items/";

    useEffect(() => {
        fetch(`${baseUrl}${params.itemId}`)
            .then(res => res.json())
            .then(item => {
                setItem(item);
                setRating(item.rating);
            })
            .catch(err => console.log(err));
    }, [params])
    console.log(item?.imageUrl);
    return (
        <Container>
            <Grid2 container spacing={6}>
                <Grid2 size={6}>
                    <Box component="img"
                        src={`/${item?.imageUrl}`}
                        alt={item?.name}
                        sx={{ maxWidth: "100%" }}
                    />
                </Grid2>
                <Grid2 size={6}>
                    <TableContainer>
                        <Table sx={{
                            backgroundColor: "#3E2723",
                            color: "white",
                            "& th, & td": {
                                color: "#E0C097",
                                fontFamily: "'MedievalSharp', cursive",
                                fontSize: "16px",
                                border: "2px solid #5D4037",
                                padding: "12px",
                                textAlign: "center",
                            },
                            "& th": {
                                fontSize: "18px",
                                fontWeight: "bold",
                                textTransform: "uppercase",
                                backgroundColor: "#4E342E",
                            },
                            "& tr:hover": {
                                backgroundColor: "#6D4C41",
                            },
                        }} aria-label="info table">
                            <TableBody >
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell>{item?.name}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Description</TableCell>
                                    <TableCell>{item?.description}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Price</TableCell>
                                    <TableCell>{item?.price}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Material</TableCell>
                                    <TableCell>{item?.material}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Color</TableCell>
                                    <TableCell>{item?.color}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Category</TableCell>
                                    <TableCell>{item?.category}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Rating</TableCell>
                                    <TableCell>
                                        <Rating max={5} value={rating} readOnly sx={{ mb: 1 }} />
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid2>
            </Grid2>
        </Container>
    )
}