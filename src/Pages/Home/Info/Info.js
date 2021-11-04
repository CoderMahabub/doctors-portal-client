import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Typography } from '@mui/material';

const Info = () => {
    return (
        <Container>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4} style={{ backgroundColor: '#5CE7ED' }}>
                        <Grid sx={{ display: 'flex', alignItems: 'center' }}>
                            <AccessTimeIcon color="action" />
                            <Box >
                                <Typography variant="h4" gutterBottom component="div">
                                    Opening Hours
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={4} style={{ backgroundColor: '#fff', border: '1px solid black' }}>
                        <Grid sx={{ display: 'flex', alignItems: 'center' }}>
                            <AccessTimeIcon color="action" />
                            <Box >
                                <Typography variant="h4" gutterBottom component="div">
                                    Opening Hours
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={4} style={{ backgroundColor: '#5CE7ED' }}>
                        <Grid sx={{ display: 'flex', alignItems: 'center' }}>
                            <AccessTimeIcon color="action" />
                            <Box >
                                <Typography variant="h4" gutterBottom component="div">
                                    Opening Hours
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Container>

    );
};

export default Info;