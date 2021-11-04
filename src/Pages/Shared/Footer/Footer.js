import { Box } from '@mui/system';
import Grid from '@mui/material/Grid';
import React from 'react';
import footer from '../../../images/footer-bg.png';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import Button from '@mui/material/Button';

const footerBg = {
    background: `url(${footer})`,
    backgroundRepeat: 'no-repeat',
    width: '100%'
}
const border = {
    color: '#5CE7ED',
    padding: 5,
    marginRight: 15,
    border: '1px solid #5CE7ED',
    borderRadius: '50%',
}
const Footer = () => {
    return (
        <Box style={footerBg}>
            <Container>
                <Box sx={{ flexGrow: 1, py: 5 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={3} sx={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                            <Link style={{ textDecoration: 'none', color: 'gray', fontWeight: 600, marginTop: 40 }} to="">Emergency Dental Care</Link>
                            <Link style={{ textDecoration: 'none', color: 'gray', fontWeight: 600 }} to="">Check Up</Link>
                            <Link style={{ textDecoration: 'none', color: 'gray', fontWeight: 600 }} to="">Tooth Extraction</Link>
                            <Link style={{ textDecoration: 'none', color: 'gray', fontWeight: 600 }} to="">Check Up</Link>
                        </Grid>
                        <Grid item xs={12} md={3} sx={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                            <Typography style={{ color: '#5CE7ED' }} variant="h5" display="block" gutterBottom>
                                Services
                            </Typography>
                            <Link style={{ textDecoration: 'none', color: 'gray', fontWeight: 600 }} to="">Emergency Dental Care</Link>
                            <Link style={{ textDecoration: 'none', color: 'gray', fontWeight: 600 }} to="">Check Up</Link>
                            <Link style={{ textDecoration: 'none', color: 'gray', fontWeight: 600 }} to="">Tooth Extraction</Link>
                            <Link style={{ textDecoration: 'none', color: 'gray', fontWeight: 600 }} to="">Check Up</Link>
                        </Grid>
                        <Grid item xs={12} md={3} sx={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                            <Typography style={{ color: '#5CE7ED' }} variant="h5" display="block" gutterBottom>
                                Oral Health
                            </Typography>
                            <Link style={{ textDecoration: 'none', color: 'gray', fontWeight: 600 }} to="">Emergency Dental Care</Link>
                            <Link style={{ textDecoration: 'none', color: 'gray', fontWeight: 600 }} to="">Check Up</Link>
                            <Link style={{ textDecoration: 'none', color: 'gray', fontWeight: 600 }} to="">Tooth Extraction</Link>
                            <Link style={{ textDecoration: 'none', color: 'gray', fontWeight: 600 }} to="">Check Up</Link>
                        </Grid>
                        <Grid item xs={12} md={3} sx={{ textAlign: 'left' }}>
                            <Typography style={{ color: '#5CE7ED' }} variant="h5" display="block" gutterBottom>
                                Our Address
                            </Typography>
                            <Typography variant="caption" display="block" gutterBottom >
                                House: 65, Road: Queens valley Road, London
                            </Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'center', py: 3 }}>
                                <FacebookIcon style={border} color="secondary" />
                                <GoogleIcon style={border} color="secondary" />
                                <TwitterIcon style={border} color="secondary" />
                            </Box>
                            <Typography variant="caption" display="block" gutterBottom>
                                Call Now
                            </Typography>
                            <Button style={{ backgroundColor: '#5CE7ED' }} variant="contained">Contained</Button>
                        </Grid>
                    </Grid>
                </Box>
                <Typography variant="caption" display="block" gutterBottom>
                    Copyright  2021 || All rights reserved
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;