import { Box, Container, Typography } from "@mui/material";

export default function HomePage() {
    return (
        <Container sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        }}>
            <Typography sx={{
                fontFamily: "'MedievalSharp', cursive",
                fontSize: "60px",
                color: "#efd178",
                textShadow: "#efd178 5px 0 10px"
            }}>
                Hail and well met at the smithy!
            </Typography>
            <Box component="img"
                src="images/home-page-image.jpg"
                alt="Home Page Image"
                sx={{
                    maxHeight: "500px",
                    maxWidth: "800px",
                    borderRadius: "10px",
                    filter: "drop-shadow(0 0 10px rgba(0,0,0,0.5))"
                }}
            />
        </Container>
    )
}