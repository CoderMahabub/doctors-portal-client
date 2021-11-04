import React from 'react';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const TestimonialSingle = ({ review }) => {
    const { name, description, photo, city } = review;
    return (
        <Grid item xs={4} sm={4} md={4}>
            <CardContent sx={{ boxShadow: 2, my: 5 }}>
                <Typography variant="body1" color="text.secondary">
                    {description}
                </Typography>
                <Grid container spacing={2} sx={{ my: 3, display: 'flex', alignItems: 'center' }} >
                    <Grid item xs={4} md={4}>
                        <img src={photo} style={{ width: '70%' }} />
                    </Grid>
                    <Grid item xs={8} md={8} >
                        <Typography style={{ color: '#5CE7ED' }} sx={{ m: 0, display: 'block' }} variant="h5" gutterBottom component="div">
                            {name}
                        </Typography>
                        <Typography sx={{ m: 0 }} variant="caption" gutterBottom component="div">
                            {city}
                        </Typography>
                    </Grid>

                </Grid>
            </CardContent>
        </Grid>
    );
};

export default TestimonialSingle;