import * as React from 'react';
import { NavLink } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    IconButton,
    Container,
    useTheme,
    useMediaQuery,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Divider
} from '@mui/material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InventoryIcon from '@mui/icons-material/Inventory';
import PersonIcon from '@mui/icons-material/Person';
import GitHubIcon from '@mui/icons-material/GitHub';

export const Header = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const menuItems = [
        { text: 'Inicio', path: '/', icon: <HomeIcon /> },
        { text: 'ApiRyC', path: '/apiryc', icon: <InventoryIcon /> },
        { text: 'Mi Cuenta', path: '/myaccount', icon: <PersonIcon /> },
    ];

    const drawer = (
        <Box sx={{ width: 250, bgcolor: 'primary.main', height: '100%' }}>
            <Box sx={{ p: 3, display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography variant="h6" sx={{ color: '#56c135', fontWeight: 'bold' }}>
                    RyC
                </Typography>
            </Box>
            <Divider sx={{ bgcolor: 'rgba(255,255,255,0.1)' }} />
            <List>
                {menuItems.map((item) => (
                    <ListItem key={item.text} disablePadding>
                        <ListItemButton 
                            component={NavLink} 
                            to={item.path}
                            onClick={handleDrawerToggle}
                            sx={{ color: '#fff' }}
                        >
                            <ListItemIcon sx={{ color: '#fff' }}>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider sx={{ bgcolor: 'rgba(255,255,255,0.1)' }} />
            <List>
                <ListItem disablePadding>
                    <ListItemButton 
                        component="a" 
                        href="https://github.com/Andres01-my/-Taller-4-Consumo-de-APIs"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ color: '#fff' }}
                    >
                        <ListItemIcon sx={{ color: '#fff' }}>
                            <GitHubIcon />
                        </ListItemIcon>
                        <ListItemText primary="GitHub" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <header>
            <AppBar position="sticky" sx={{ bgcolor: '#1a1a2e', borderBottom: '3px solid #56c135' }}>
                <Container maxWidth="xl">
                    <Toolbar sx={{ py: 1 }}>
                        {isMobile && (
                            <IconButton
                                color="inherit"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={{ mr: 2, color: '#fff' }}
                            >
                                <MenuIcon />
                            </IconButton>
                        )}

                        <Box sx={{ display: 'flex', alignItems: 'center', mr: 4 }}>
                            <Typography 
                                variant="h5" 
                                sx={{ 
                                    fontWeight: 'bold', 
                                    color: '#56c135',
                                    letterSpacing: 1
                                }}
                            >
                                RyC
                            </Typography>
                        </Box>

                        {!isMobile && (
                            <Box sx={{ display: 'flex', gap: 3, flexGrow: 1 }}>
                                {menuItems.map((item) => (
                                    <NavLink
                                        key={item.text}
                                        to={item.path}
                                        style={{ textDecoration: 'none' }}
                                    >
                                        {({ isActive }) => (
                                            <Typography
                                                sx={{
                                                    color: isActive ? '#56c135' : '#fff',
                                                    fontWeight: isActive ? 'bold' : 'normal',
                                                    fontSize: '1rem',
                                                    px: 2,
                                                    py: 1,
                                                    borderRadius: 1,
                                                    transition: 'all 0.2s',
                                                    '&:hover': { color: '#56c135' }
                                                }}
                                            >
                                                {item.text}
                                            </Typography>
                                        )}
                                    </NavLink>
                                ))}
                            </Box>
                        )}

                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <IconButton 
                                component="a" 
                                href="https://github.com/Andres01-my/-Taller-4-Consumo-de-APIs.git"
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{ color: '#fff', mr: 1 }}
                            >
                                <GitHubIcon />
                            </IconButton>

                            <IconButton 
                                component={NavLink} 
                                to='/myaccount'
                                sx={{ color: '#fff' }}
                            >
                                <PersonIcon />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{ keepMounted: true }}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 },
                }}
            >
                {drawer}
            </Drawer>
        </header>
    );
};