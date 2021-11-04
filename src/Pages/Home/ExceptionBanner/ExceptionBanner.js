import React from 'react';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import treatment from '../../../images/treatment.png';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const ExceptionBanner = () => {
    return (
        <Container>
            <Grid container spacing={2} sx={{ textAlign: 'left', alignItems: 'center', my: 5 }}>
                <Grid item xs={12} md={4}>
                    <img style={{ width: '100%' }} src={treatment} alt="" />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Typography sx={{ px: 5 }} variant="h3" gutterBottom component="div">
                        Exceptional Dental<br /> Care, on Your Terms
                    </Typography>
                    <Typography sx={{ px: 5 }} variant="body1" gutterBottom>
                        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                    </Typography >
                    <Button sx={{ my: 5, mx: 5 }} variant="contained">Contained</Button>
                </Grid>
            </Grid>
        </Container >
    );
};

export default ExceptionBanner;