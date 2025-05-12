import { AppBar, Box, Button, Link, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import { NavLink, useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../state/store";
import { useState } from "react";
import { setLogOut } from "../state/user/userSlice";
import { toast } from "react-toastify";

export default function Header() {

    const { loggedIn, user } = useAppSelector(state => state.user);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const navLinks = [
        { title: "Inventory", path: "/inventory" },
        { title: "About", path: "/about" },
        { title: "Contacts", path: "/contacts" },
    ]

    const userNavLinks = [
        { title: "Login", path: "/login" },
        { title: "Register", path: "/register" },
    ]

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogOut = () => {
        localStorage.removeItem("user");
        dispatch(setLogOut());
        navigate("/");
        toast.success("Successfuly logged out!")
    }

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
                    <Typography key={link.path}
                        sx={{
                            fontFamily: "'MedievalSharp',  cursive",
                            color: "white",
                            fontSize: "25px",
                            px: 1
                        }}>
                        <NavLink
                            to={link.path}
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : "navLink"
                            }
                        >
                            {link.title}
                        </NavLink>
                    </Typography>)}
            </Box>

            <Box sx={{ display: "flex", mx: 2 }}>

                {loggedIn ?
                    <>
                        <Button
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            <Typography sx={{ fontFamily: "'MedievalSharp',  cursive", color: "white" }}>
                                {user?.userName}
                            </Typography>
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                            <MenuItem onClick={handleLogOut}> Logout</MenuItem>
                        </Menu>
                    </> :
                    userNavLinks.map(link =>
                        <Typography
                            sx={{
                                fontSize: "25px",
                                fontFamily: "'MedievalSharp',  cursive",
                                px: 1
                            }}
                            key={link.path}
                        >
                            <NavLink
                                className={"navLink"}
                                to={link.path}>
                                {link.title}
                            </NavLink>
                        </Typography>)}
            </Box>
        </AppBar >
    );
}