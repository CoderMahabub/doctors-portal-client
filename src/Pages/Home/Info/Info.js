import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import { Typography } from '@mui/material';

const Info = () => {
    return (
        <Container>
            <Box sx={{ flexGrow: 1, mt: -8, mb: 10 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4} style={{ backgroundColor: '#5CE7ED' }}>
                        <Grid sx={{ display: 'flex', alignItems: 'center', color: 'white', py: 2 }}>
                            <Grid item xs={2}>
                                <AccessTimeIcon style={{ fontSize: 60, color: 'white' }} color="action" />
                            </Grid>
                            <Grid item xs={10}>
                                <Typography variant="h4" gutterBottom component="div">
                                    Opening Hours
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    (Mon-Fri) 09:00 AM to 09:00 PM
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={4} style={{ backgroundColor: '#000000' }}>
                        <Grid sx={{ display: 'flex', alignItems: 'center', color: 'white', py: 2 }}>
                            <Grid item xs={2}>
                                <LocationOnIcon style={{ fontSize: 60, color: 'white' }}
                                    color="action" />
                            </Grid>
                            <Grid item xs={10}>
                                <Typography variant="h4" gutterBottom component="div">
                                    Visit Our Location
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    Broklyn NY 584856, United States
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={4} style={{ backgroundColor: '#5CE7ED' }}>
                        <Grid sx={{ display: 'flex', alignItems: 'center', color: 'white', py: 2 }}>
                            <Grid item xs={2}>
                                <PhoneInTalkIcon style={{ fontSize: 60, color: 'white' }} color="action" />
                            </Grid>
                            <Grid item xs={10}>
                                <Typography variant="h4" gutterBottom component="div">
                                    Contact Us Now
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    +8801721212121
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Container>

    );
};

export default Info;