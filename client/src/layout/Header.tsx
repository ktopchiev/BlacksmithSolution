import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Header() {

    const navLinks = [
        { title: "Inventory", path: "/inventory" },
        { title: "About", path: "/about" },
        { title: "Contacts", path: "/contacts" },
    ]

    return (
        <AppBar
            position="static"
            sx={{
                top: 0,
                width: "100%",
                position: "relative",
                backgroundImage: "url(/images/black-wood-pattern.jpg)",
                backgroundSize: "cover",
                color: "white",
                mb: 4
            }}
        >
            <Toolbar>
                <Typography variant="h4" sx={{ fontFamily: "'MedievalSharp',  cursive" }}>Blacksmith</Typography>
            </Toolbar>
        </AppBar>
    );
}