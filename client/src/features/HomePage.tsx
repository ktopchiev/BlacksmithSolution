import { Box, Container } from "@mui/material";

export default function HomePage() {
    return (
        <Container sx={{ display: "flex", justifyContent: "center" }}>
            <Box component="img"
                src="images/home-page-image.jpg"
                alt="Home Page Image"
                sx={{ maxWidth: "100%", height: "600px" }}
            />
        </Container>
    )
}