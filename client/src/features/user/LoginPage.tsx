import { VisibilityOff, Visibility } from "@mui/icons-material";
import { Box, Button, Container, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Paper, styled, Typography } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../../App/state/user/userApi";
import { useAppDispatch } from "../../App/state/store";
import { LoginModel } from "../../App/models/user/LoginModel";
import { setCurrentUser } from "../../App/state/user/userSlice";
import { toast } from "react-toastify";

type Inputs = {
    username: string;
    password: string;
}

export default function LoginPage() {

    const [showPassword, setShowPassword] = useState<boolean>(false);
    const { register, handleSubmit } = useForm<Inputs>();
    const [login] = useLoginMutation();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleLogin = async (data: { username: any; password: any; }) => {
        

    }


    const BlurredPaper = styled(Paper)(({ theme }) => ({
        position: 'relative',
        padding: theme.spacing(10),
        overflow: 'hidden',
        zIndex: 0,
        backdropFilter: 'blur(0)', // fallback to ensure child content isn’t blurred
        backgroundColor: 'transparent',
        margin: "auto",

        '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            backgroundImage: 'url("images/door.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(5px)',
            zIndex: -1,
            opacity: 0.8,
        },
    }));

    return (
        <Container sx={{ display: "flex" }}>
            <BlurredPaper>
                <Typography variant="h4" sx={{
                    fontFamily: "'MedievalSharp',  cursive",
                    margin: "auto",
                    color: "white"
                }}>
                    Login
                </Typography>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <Box sx={{ display: "flex", flexDirection: "column", color: "white" }}>
                        <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
                            <InputLabel htmlFor="username"
                                sx={{
                                    color: 'gray', // default
                                    '&.Mui-focused': {
                                        color: '#e3c672', // on focus
                                    },
                                }}>
                                Username
                            </InputLabel>
                            <OutlinedInput
                                id="username"
                                type="text"
                                label="Username"
                                sx={{
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'gray', // default
                                    },
                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'white', // on hover
                                    },
                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                        borderColor: '#e3c672', // on focus
                                        backgroundColor: "white",
                                        zIndex: -1,
                                        opacity: 0.3
                                    },
                                }}
                                {...register("username")}
                            />

                        </FormControl>
                        <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password"
                                sx={{
                                    color: 'gray', // default
                                    '&.Mui-focused': {
                                        color: '#e3c672', // on focus
                                    },
                                }}>
                                Password
                            </InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label={
                                                showPassword ? 'hide the password' : 'display the password'
                                            }
                                            onClick={handleClickShowPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                                sx={{
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'gray', // default
                                    },
                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'white', // on hover
                                    },
                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                        borderColor: '#e3c672', // on focus
                                        backgroundColor: "white",
                                        zIndex: -1,
                                        opacity: 0.3
                                    },
                                }}
                                {...register("password")}
                            />
                        </FormControl>
                        <Button variant="contained" type="submit">Sign in</Button>
                        <Typography>Hast thou no account? <br /> Pray, <Link to="/register">enlist thyself.</Link></Typography>
                    </Box>
                </form>
            </BlurredPaper>
        </Container >
    )
}