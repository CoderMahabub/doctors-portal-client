import { Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import img from '../../../images/login.png';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, logInUser, isLoading, authError, singInWithGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        logInUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        singInWithGoogle(history, location)
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{ mt: 8 }} item xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>
                        Login
                    </Typography>
                    {(!isLoading) && <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            onChange={handleOnChange}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="filled-password-input"
                            label="Your Password"
                            type="password"
                            autoComplete="current-password"
                            name="password"
                            onChange={handleOnChange}
                            variant="standard"
                        />

                        <Button type="submit" sx={{ width: '75%' }} variant="contained">Login</Button>
                    </form>}
                    <hr />
                    <Button onClick={handleGoogleSignIn} variant="contained">SignIn using Google</Button>
                    <br />
                    <NavLink style={{ textDecoration: 'none' }} to="/register">
                        <Button variant="text">NEW USER? PLEASE REGISTER</Button>
                    </NavLink>
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">Congratulations, Successfully Done!</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img sx={{ width: '100%' }} src={img} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Login;