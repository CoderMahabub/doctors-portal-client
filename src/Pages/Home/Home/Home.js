import React from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Navigation from '../../Shared/Navigation/Navigation';
import ExceptionBanner from '../ExceptionBanner/ExceptionBanner';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <ExceptionBanner></ExceptionBanner>
            <AppointmentBanner></AppointmentBanner>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;