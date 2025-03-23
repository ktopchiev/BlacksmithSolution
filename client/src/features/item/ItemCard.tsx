import { Card, CardContent, Typography, Box, CardActions, Button, Paper, CardActionArea, Rating } from "@mui/material";
import { Item } from "../../models/Item";
import { useNavigate } from "react-router";

interface Props {
    item: Item
}

export default function ItemCard({ item }: Props) {
    const navigate = useNavigate();

    function handleClickCard(itemId: string) {
        navigate(itemId);
    }

    return (
        <Paper sx={{ backgroundColor: "rgb(66, 48, 48)" }}>
            <Card
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    minWidth: 250,
                    maxWidth: 230,
                    height: 350,
                    position: "relative",
                    backgroundColor: "rgba(0, 0, 0, 0.12)",
                    background: "transparent ",
                    border: "20px solid transparent",
                    borderImage: "url(/images/silver-celtic-pattern.jpeg) 50 stretch",
                    boxShadow: "0px 0px 15px rgba(192, 192, 192, 0.3)",
                    overflow: "hidden",
                }}
            >
                <CardActionArea onClick={() => handleClickCard(item.itemId)}>
                    <CardContent sx={{ textAlign: "center", px: 0 }}>
                        <Typography
                            variant="h6"
                            sx={{
                                fontFamily: "'MedievalSharp', cursive",
                                color: "rgb(239, 209, 120)",
                                textShadow: "2px 2px 8px rgba(255, 255, 255, 0.3)",
                            }}
                        >
                            {item.name}
                        </Typography>
                        <Box component="img"
                            src={item.imageUrl}
                            alt={item.name}
                            sx={{ width: "230px", height: "auto", maxHeight: "200px" }}
                        />
                    </CardContent>
                </CardActionArea>
                <CardActions sx={{ display: "flex", flexDirection: "column" }}>
                    <Rating max={5} value={item.rating} readOnly sx={{ mb: 1 }} />
                    <Button
                        variant="contained"
                        size="small"
                        sx={{
                            color: "black",
                            backgroundColor: "darkkhaki",
                            "&: hover": {
                                color: "white",
                                backgroundColor: "rgb(67, 122, 0)"
                            }
                        }}
                    >
                        Add To Bag
                    </Button>
                </CardActions>
            </Card>
        </Paper>
    );
}
