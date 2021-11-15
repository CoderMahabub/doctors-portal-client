import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from '../../Login/Firebase/CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';



const stripePromise = loadStripe('pk_test_51JvmAkCwWYbOe8no3j1yfQiOOBouGljf1zkPo2klCBMxacFgfCCRjuf0cAHdkPocie3LPUv27nTYpRLY6Q9RLFtB00JkVdTOGg');



const Payment = () => {
    const { appointmentId } = useParams();
    const [appointment, setAppointment] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/appointments/${appointmentId}`)
            .then(res => res.json())
            .then(data => setAppointment(data))
    }, [appointmentId])
    return (
        <div>
            <h3>Please pay for {appointment.patientName} for {appointment.serviceName}</h3>
            <h5>Pay ${appointment.price}</h5>
            {appointment?.price && <Elements stripe={stripePromise}>
                <CheckoutForm
                    appointment={appointment}
                />
            </Elements>}
        </div>
    );
};

export default Payment;

/*
1. Install Stripe & Stripe-react
2. Set publishable key
3. Elements
4. checkout form
===============
5. create payment method
6. Server create payment intent api
7. Load client secret
8. confirmed payment
9.handle user error

*/