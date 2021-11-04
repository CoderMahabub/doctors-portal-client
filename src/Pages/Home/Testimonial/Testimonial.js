import { Container } from '@mui/material';
import React from 'react';
import qoute from '../../../images/qoute.png';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import img1 from '../../../images/people-1.png';
import img2 from '../../../images/people-2.png';
import img3 from '../../../images/people-3.png';
import TestimonialSingle from '../TestimonialSingle/TestimonialSingle';

const reviews = [
    {
        id: '1',
        name: 'Winson Herry',
        city: 'California',
        photo: 'https://i.ibb.co/wB9WGNp/people-3.png',
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis ab facilis praesentium tempora alias, deserunt eaque autem nam officiis exercitationem?"
    },
    {
        id: '2',
        name: 'Winson Perry',
        city: 'Charlotte',
        photo: 'https://i.ibb.co/TRgpnjs/people-1.png',
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis ab facilis praesentium tempora alias, deserunt eaque autem nam officiis exercitationem?"
    },
    {
        id: '1',
        name: 'Winson Lerry',
        city: 'Dallas',
        photo: 'https://i.ibb.co/714T4mf/people-2.png',
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis ab facilis praesentium tempora alias, deserunt eaque autem nam officiis exercitationem?"
    }
]

const testimonialBd = {
    background: `url(${qoute})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top right',
    backgroundSize: '200px'
}

const Testimonial = () => {
    return (
        <Container style={testimonialBd} sx={{ textAlign: 'left', my: 5 }}>
            <>
                <Typography style={{ color: '#5CE7ED' }} variant="h6" gutterBottom component="div">
                    Testimonial
                </Typography>
                <Typography variant="h4" gutterBottom component="div">
                    What's Our Patients <br /> Says
                </Typography>
            </>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    reviews.map(review => <TestimonialSingle
                        key={review.id}
                        review={review}
                    ></TestimonialSingle>)
                }
            </Grid>

        </Container>
    );
};

export default Testimonial;