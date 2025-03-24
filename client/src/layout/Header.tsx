import { AppBar, Box, Link, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router";

export default function Header() {

    const navLinks = [
        { title: "Inventory", path: "/inventory" },
        { title: "About", path: "/about" },
        { title: "Contacts", path: "/contacts" },
    ]

    const userNavLinks = [
        { title: "Bag", path: "/bag" },
        { title: "Login", path: "/login" },
        { title: "Register", path: "/register" },
    ]

    return (
        <AppBar
            position="static"
            sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                top: 0,
                width: "100%",
                position: "relative",
                backgroundImage: "url(/images/black-wood-pattern.jpg)",
                backgroundSize: "cover",
                color: "white",
                backgroundColor: "transparent",
                mb: 4
            }}
        >
            <Toolbar>
                <Link
                    href="/"
                    variant="h4"
                    sx={{
                        fontFamily: "'MedievalSharp',  cursive",
                        textDecoration: "none",
                        color: "white"
                    }}>
                    Blacksmith
                </Link>
            </Toolbar>

            <Box sx={{
                display: "flex",
            }}>
                {navLinks.map(link =>
                    <Typography key={link.path} sx={{ fontFamily: "'MedievalSharp',  cursive", color: "white", fontSize: "25px", px: 1 }}>
                        <NavLink
                            to={link.path}
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                        >
                            {link.title}
                        </NavLink>
                    </Typography>)}
            </Box>
            <Box sx={{ display: "flex", fontSize: "25px" }}>
                {userNavLinks.map(link => <NavLink key={link.path} to={link.path}>{link.title}</NavLink>)}
            </Box>
        </AppBar>
    );
}