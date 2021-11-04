import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../Service/Service';
import flouride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';

const services = [
    {
        name: 'Flouride Treatment',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Esse, in earum asperiores eveniet soluta hic qui! Dicta voluptatibus pariatur impedit commodi fugiat optio ipsa in harum iusto autem',
        img: flouride
    },
    {
        name: 'Cavity Filling',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Esse, in earum asperiores eveniet soluta hic qui! Dicta voluptatibus pariatur impedit commodi fugiat optio ipsa in harum iusto autem',
        img: cavity
    },
    {
        name: 'Cavity Filling',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Esse, in earum asperiores eveniet soluta hic qui! Dicta voluptatibus pariatur impedit commodi fugiat optio ipsa in harum iusto autem',
        img: whitening
    }
]


const Services = () => {
    return (
        <Box sx={{ flexGrow: 1, my: 5 }}>
            <Container>
                <Typography sx={{ fontWeight: 500, color: 'success.main', mt: 3 }} variant="h6" component="div">
                    Our Services
                </Typography>
                <Typography sx={{ fontWeight: 600, mb: 5 }} variant="h4" component="div">
                    Services We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            key={service.name}
                            service={service}
                        ></Service>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;