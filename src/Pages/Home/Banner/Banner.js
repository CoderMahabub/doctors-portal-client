import React from 'react';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';

const bannerBg = {
    background: `url(${bg})`,
}
const verticalCenter = {
    height: 400,
    display: 'flex',
    alignItems: 'center'

}

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={6}>
                    <Box>
                        <Typography variant="h3">
                            Your New Smile <br /> Starts Here
                        </Typography>
                        <Typography variant="h6" sx={{ my: 3, fontSize: 13, color: 'gray', fontWeight: 300 }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, consectetur quibusdam. Explicabo nobis earum sequi error nam sit harum et!
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#5CE7ED' }}>Get Appointment</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter}>
                    <img style={{ width: '450px' }} src={chair} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;