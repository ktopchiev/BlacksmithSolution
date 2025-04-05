import { Card, CardContent, Typography, Box, CardActions, Button, Paper, CardActionArea, Rating } from "@mui/material";
import { Item } from "../../App/models/Item";
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
        <Paper sx={{ backgroundColor: "rgb(66, 48, 48)", maxWidth: 270 }}>
            <Card
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
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
                    <CardContent sx={{ textAlign: "center", p: 0 }}>

                        <Typography
                            sx={{
                                fontFamily: "'MedievalSharp', cursive",
                                color: "rgb(239, 209, 120)",
                                textShadow: "2px 2px 8px rgba(255, 255, 255, 0.3)",
                                fontSize: item.name.length > 20 ? "16px" : "20px"
                            }}
                        >
                            {item.name}
                        </Typography>

                        <Box component="img"
                            src={item.imageUrl}
                            alt={item.name}
                            sx={{ width: "230px", height: "auto", maxHeight: "150px" }}
                        />

                        <Box sx={{ display: "flex", justifyContent: "center", alignContent: "flex-end" }}>
                            <Typography
                                variant="h6"
                                sx={{
                                    color: "white",
                                    fontFamily: "'Quintessential', cursive"
                                }}
                            >
                                £{item.price}
                            </Typography>
                        </Box>

                    </CardContent>
                </CardActionArea>

                <CardActions sx={{ display: "flex", flexDirection: "column", p: 0 }}>
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
