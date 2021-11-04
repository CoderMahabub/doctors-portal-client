import React from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Navigation from '../../Shared/Navigation/Navigation';
import ExceptionBanner from '../ExceptionBanner/ExceptionBanner';
import Testimonial from '../Testimonial/Testimonial';
import ContactUs from '../ContactUs/ContactUs';
import Footer from '../../Shared/Footer/Footer';
import Info from '../Info/Info';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <ExceptionBanner></ExceptionBanner>
            <AppointmentBanner></AppointmentBanner>
            <Testimonial></Testimonial>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;