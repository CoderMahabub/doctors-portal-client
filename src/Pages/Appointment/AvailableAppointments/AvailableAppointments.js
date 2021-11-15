import React, { useState } from 'react';
import { Grid, Container, Typography, Alert } from '@mui/material';
import Booking from '../Booking/Booking';

const AvailableAppointments = ({ date }) => {
    const [bookingSuccess, setBookingSuccess] = useState(false);
    const bookings = [
        {
            id: 1,
            name: 'Teeth Orthodontics',
            time: '08.00 AM - 09.00 AM',
            space: 10,
            price: 15
        },
        {
            id: 2,
            name: 'Cosmetic Dentistry',
            time: '10.05 AM - 11.30 AM',
            space: 10,
            price: 50
        },
        {
            id: 3,
            name: 'Teeth Cleaning',
            time: '05.00 PM - 06.30 PM',
            space: 10,
            price: 35
        },
        {
            id: 4,
            name: 'Cavity Protection',
            time: '07.00 PM - 08.30 PM',
            space: 10,
            price: 25
        },
        {
            id: 5,
            name: 'Pediatric Dental',
            time: '06.00 PM - 07.00 PM',
            space: 10,
            price: 20
        },
        {
            id: 6,
            name: 'Oral Surgery',
            time: '07.00 PM - 08.00 PM',
            space: 10,
            price: 10
        }
    ]

    return (
        <Container>
            <Typography variant="h4" sx={{ color: 'info.main', mb: 3 }}>Available Appointments on {date.toDateString()}</Typography>
            {bookingSuccess && <Alert severity="success">Appointment Booked Successfully</Alert>}
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                        key={booking.id}
                        booking={booking}
                        date={date}
                        setBookingSuccess={setBookingSuccess}
                    ></Booking>)
                }
            </Grid>
        </Container >
    );
};

export default AvailableAppointments;