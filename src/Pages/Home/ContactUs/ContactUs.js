import React from 'react';
import Typography from '@mui/material/Typography';
import bg from '../../../images/bg.png';
import { Box } from '@mui/system';
import TextField from '@mui/material/TextField';
import { Button, Container } from '@mui/material';

const contactBanner = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45,58,74, 0.85)',
    backgroundBlendMode: 'darken,luminosity',
    backgroundPosition: 'center center'
}

const ContactUs = () => {
    return (
        <Box style={contactBanner} sx={{ flexGrow: 1, py: 5 }}>
            <Typography style={{ color: '#5CE7ED' }} variant="h5" gutterBottom component="div">
                CONTACT US
            </Typography>
            <Typography style={{ color: '#fff' }} variant="h4" gutterBottom component="div">
                Always Connect with us
            </Typography>
            <Container>
                <form>
                    <TextField style={{ color: '#fff', backgroundColor: '#fff', width: '80%' }}
                        required
                        id="outlined-password-input"
                        placeholder="Your Name*"
                        type="password"
                        autoComplete="current-password"
                    />
                    <TextField style={{ color: '#fff', backgroundColor: '#fff', width: '80%' }} sx={{ m: 1 }}
                        required
                        id="outlined-password-input"
                        placeholder="Subject*"
                        type="password"
                        autoComplete="current-password"
                    />
                    <TextField style={{ color: '#fff', backgroundColor: '#fff', width: '80%' }} sx={{ m: 1 }}
                        id="outlined-password-input"
                        placeholder="Message*"
                        type="password"
                        autoComplete="current-password"
                    />
                    <br />
                    <Button style={{ backgroundColor: '#5CE7ED' }} type="submit" variant="contained">Send Message</Button>
                </form>
            </Container>
        </Box>
    );
};

export default ContactUs;