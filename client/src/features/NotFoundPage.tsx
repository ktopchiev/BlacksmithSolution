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
                        fontFamily: "Newsreader",
                        fontSize: "40px",
                        color: "rgb(158, 56, 56)",
                        textShadow: "rgb(0, 0, 0) 5px 5px 8px"
                    }}>
                    NAUGHT EVERY THING IS FATED TO BE  DISCOVERED...
                </Typography>

                <Box
                    component="img"
                    src="./images/not-found-2.png"
                    sx={{
                        maxHeight: 450,
                        maxWidth: 450
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