import { Box, Container, Grid2, LinearProgress, Rating, Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";
import { useGetItemQuery } from "../../state/items/itemApiSlice";
import { useParams } from "react-router";

export default function ItemPage() {

    const { itemId } = useParams();
    const { data: item, isLoading, isError } = useGetItemQuery(itemId!);

    if (isLoading) return <LinearProgress color="inherit" />

    if (isError) return <div>Error</div>

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
                                        <Rating max={5} value={0} readOnly sx={{ mb: 1 }} />
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