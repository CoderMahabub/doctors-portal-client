import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';
import { Button, Container, Typography } from '@mui/material';

const appointmentBanner = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45,58,74, 0.85)',
    backgroundBlendMode: 'darken,luminosity',
    marginTop: 175,
}

const AppointmentBanner = () => {
    return (
        <Container>
            <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <img
                            style={{ width: 400, marginTop: '-110px' }}
                            src={doctor} alt="" />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        textAlign: 'left'
                    }}>
                        <Box>
                            <Typography variant="h6" sx={{ mb: 5 }} style={{ color: '#5CE7ED' }}>
                                Appointment
                            </Typography>
                            <Typography variant="h4">
                                Make an Appointment today
                            </Typography>
                            <Typography variant="h6" sx={{ my: 2 }} style={{ color: 'white', fontSize: '14', fontWeight: '300' }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nulla reprehenderit quasi quo dignissimos, a delectus est ducimus recusandae ex similique dolorum.
                            </Typography>
                            <Button variant="contained">Learn More</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container >
    );
};

export default AppointmentBanner;