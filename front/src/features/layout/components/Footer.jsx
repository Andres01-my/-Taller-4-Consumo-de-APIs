import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <Box component="footer" sx={{ bgcolor: '#1a1a2e', color: '#fff', py: 4, mt: 'auto' }}>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#56c135', mb: 2 }}>
                            Rick y Morty
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#aaa', mb: 2 }}>
                            ¡Entrando al multiverso de la merch definitiva!
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1 }}>
                            <IconButton size="small" sx={{ color: '#fff', '&:hover': { color: '#56c135' } }}>
                                <FacebookIcon />
                            </IconButton>
                            <IconButton size="small" sx={{ color: '#fff', '&:hover': { color: '#56c135' } }}>
                                <TwitterIcon />
                            </IconButton>
                            <IconButton size="small" sx={{ color: '#fff', '&:hover': { color: '#56c135' } }}>
                                <InstagramIcon />
                            </IconButton>
                        </Box>
                    </Grid>

                    <Grid item xs={6} sm={4}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                            Enlaces
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            <Link href="#/" color="inherit" sx={{ '&:hover': { color: '#56c135' } }}>Inicio</Link>
                            <Link href="#/apiryc" color="inherit" sx={{ '&:hover': { color: '#56c135' } }}>ApiRyC</Link>
                            <Link href="#/myaccount" color="inherit" sx={{ '&:hover': { color: '#56c135' } }}>Mi Cuenta</Link>
                            <Link href="https://github.com/" target="_blank" rel="noopener noreferrer" color="inherit" sx={{ '&:hover': { color: '#56c135' } }}>GitHub</Link>
                        </Box>
                    </Grid>

                    <Grid item xs={6} sm={4}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                            Contacto
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, color: '#aaa' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <EmailIcon fontSize="small" />
                                <Typography variant="body2">ejemploproy@gmail.com</Typography>
                            </Box>
                            <Typography variant="body2">Colombia/Medellin</Typography>
                        </Box>
                    </Grid>
                </Grid>

                <Box sx={{ borderTop: '1px solid #333', mt: 4, pt: 3, textAlign: 'center' }}>
                    <Typography variant="body2" sx={{ color: '#666' }}>
                        © {currentYear} RyC - Rick y Morty. Todos los derechos reservados Andres Mesa.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};