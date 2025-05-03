import { VisibilityOff, Visibility } from "@mui/icons-material";
import { Box, Button, Container, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Paper, styled, Typography } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useRegisterUserMutation } from "../../App/state/user/userApi";
import UserRegisterModel from "../../App/models/user/UserRegisterModel";

type Inputs = {
    username: string;
    email: string;
    password: string;
}

export default function RegisterPage() {

    const [showPassword, setShowPassword] = useState<boolean>(false);
    const { register, handleSubmit } = useForm<Inputs>();
    const [registerUser] = useRegisterUserMutation();
    const navigate = useNavigate();

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleRegister = async (data: { username: any; email: any; password: any; }) => {
        event?.preventDefault();
        const registerModel: UserRegisterModel = {
            userName: data.username,
            email: data.email,
            password: data.password,
        }
        const response = await registerUser(registerModel);
        navigate("/login");
    }


    const BlurredPaper = styled(Paper)(({ theme }) => ({
        position: 'relative',
        padding: theme.spacing(10),
        overflow: 'hidden',
        zIndex: 0,
        backdropFilter: 'blur(0)', // fallback to ensure child content isn’t blurred
        backgroundColor: 'transparent',
        margin: 'auto',

        '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            backgroundImage: 'url("images/register-book.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(2px)',
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
                    Register
                </Typography>
                <form onSubmit={handleSubmit(handleRegister)}>
                    <Box sx={{ display: "flex", flexDirection: "column", color: "white" }}>
                        <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
                            <InputLabel htmlFor="username"
                                sx={{
                                    color: 'white', // default
                                    '&.Mui-focused': {
                                        color: '#fced54', // on focus
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
                                        borderColor: 'white', // default
                                    },
                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'white', // on hover
                                    },
                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                        borderColor: '#fced54', // on focus
                                        backgroundColor: 'white',
                                        zIndex: -1,
                                        opacity: 0.3
                                    },
                                }}
                                {...register("username")}
                            />

                        </FormControl>
                        <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
                            <InputLabel htmlFor="email"
                                sx={{
                                    color: 'white', // default
                                    '&.Mui-focused': {
                                        color: '#fced54', // on focus
                                    },
                                }}>
                                Email
                            </InputLabel>
                            <OutlinedInput
                                id="email"
                                type="text"
                                label="Email"
                                sx={{
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'white', // default
                                    },
                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'white', // on hover
                                    },
                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                        borderColor: '#fced54', // on focus
                                        backgroundColor: 'white',
                                        zIndex: -1,
                                        opacity: 0.3
                                    },
                                }}
                                {...register("email")}
                            />

                        </FormControl>
                        <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password"
                                sx={{
                                    color: 'white', // default
                                    '&.Mui-focused': {
                                        color: '#fced54', // on focus
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
                                        borderColor: 'white', // default
                                    },
                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'white', // on hover
                                    },
                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                        borderColor: '#fced54', // on focus
                                        backgroundColor: "white",
                                        zIndex: -1,
                                        opacity: 0.3
                                    },
                                }}
                                {...register("password")}
                            />
                        </FormControl>
                        <Button variant="contained" type="submit">Sign Up</Button>
                        <Typography>Already have an account? <br /> Please <Link to="/login">Log In</Link></Typography>
                    </Box>
                </form>
            </BlurredPaper>
        </Container >
    )
}