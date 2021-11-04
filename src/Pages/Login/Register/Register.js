import React, { useState } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import img from '../../../images/login.png';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';

const Register = () => {
    const [loginData, setLoginDate] = useState({});
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginDate(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert("Your Password didn't match");
            return
        }
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{ mt: 8 }} item xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>
                        Register
                    </Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            type="email"
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
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="filled-password-input"
                            label="Retype Your Password"
                            type="password"
                            autoComplete="current-password"
                            name="password2"
                            onChange={handleOnChange}
                            variant="standard"
                        />

                        <Button type="submit" sx={{ width: '75%' }} variant="contained">Register</Button>
                    </form>
                    <NavLink style={{ textDecoration: 'none' }} to="/login">
                        <Button variant="text">Already Register? PLEASE login</Button>
                    </NavLink>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img sx={{ width: '100%' }} src={img} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Register;