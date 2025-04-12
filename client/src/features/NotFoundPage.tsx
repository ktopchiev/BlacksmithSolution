import { Box, Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router";

export default function NotFoundPage() {
    const navigate = useNavigate();

    return (
        <>
            <Container
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                <Typography
                    sx={{
                        fontFamily: "Qwigley",
                        fontSize: "50px",
                        color: "darkred"
                    }}>
                    Naught every thing is fated to be discovered...
                </Typography>

                <Box
                    component="img"
                    src="./images/not-found-2.png"
                    sx={{
                        maxHeight: 500,
                        maxWidth: 500
                    }}></Box>

                <Button
                    variant="outlined"
                    onClick={() => navigate("/inventory")} >
                    <Typography
                        sx={{
                            fontFamily: "'MedievalSharp', cursive",
                            color: "white"
                        }}>
                        Hie thee back to Inventory
                    </Typography>
                </Button>
            </Container >
        </>
    )
}