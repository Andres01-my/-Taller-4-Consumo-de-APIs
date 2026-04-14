import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  Button,
  Box,
  Grid,
  Card,
  CardContent,
  CardActionArea,
  Chip
} from "@mui/material";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import PublicIcon from '@mui/icons-material/Public';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import StarIcon from '@mui/icons-material/Star';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LoginIcon from '@mui/icons-material/Login';

export const Content = () => {
  const navigate = useNavigate();

  const features = [
    { 
      title: "Multiverso", 
      desc: "Explora infinitas dimensiones y realidades alternativas",
      icon: <PublicIcon sx={{ fontSize: 50 }} />,
      color: '#56c135'
    },
    { 
      title: "Personajes", 
      desc: "Conoce a los personajes más locos del universo",
      icon: <RocketLaunchIcon sx={{ fontSize: 50 }} />,
      color: '#8b5cf6'
    },
    { 
      title: "Aventuras", 
      desc: "Vive las aventuras más descabelladas jamás vistas",
      icon: <AutoStoriesIcon sx={{ fontSize: 50 }} />,
      color: '#f59e0b'
    },
    { 
      title: "Episodios", 
      desc: "No te pierdas ninguna temporada completa",
      icon: <StarIcon sx={{ fontSize: 50 }} />,
      color: '#ec4899'
    }
  ];

  const stats = [
    { value: "500+", label: "Personajes" },
    { value: "60+", label: "Episodios" },
    { value: "8", label: "Temporadas" },
    { value: "∞", label: "Dimensiones" }
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: `
            linear-gradient(135deg, rgba(15, 15, 26, 0.92) 0%, rgba(26, 26, 46, 0.88) 50%, rgba(15, 15, 26, 0.95) 100%),
            url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80')
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          py: { xs: 6, md: 0 },
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 20% 80%, rgba(86, 193, 53, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)',
            pointerEvents: 'none'
          }}
        />
        
        <Container maxWidth="lg" sx={{ textAlign: 'center', color: '#fff', position: 'relative', zIndex: 1 }}>
          <Chip 
            icon={<StarIcon sx={{ fontSize: 16 }} />}
            label="Rick y Morty - El multiverso te espera" 
            sx={{ 
              bgcolor: 'rgba(86, 193, 53, 0.2)', 
              color: '#56c135',
              border: '1px solid rgba(86, 193, 53, 0.3)',
              mb: 3
            }} 
          />
          
          <Typography 
            variant="h2" 
            sx={{ 
              fontWeight: 'bold', 
              mb: 2,
              fontSize: { xs: '2.5rem', md: '4rem' },
              background: 'linear-gradient(135deg, #ffffff 0%, #56c135 50%, #8b5cf6 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Rick y Morty
          </Typography>
          
          <Typography variant="h5" sx={{ mb: 4, opacity: 0.9, color: '#b4ef7b', fontWeight: 500 }}>
            Adventures Across the Multiverse
          </Typography>
          
          <Typography variant="body1" sx={{ mb: 5, maxWidth: 600, mx: 'auto', opacity: 0.85, fontSize: '1.2rem', lineHeight: 1.8 }}> 
            Descubre el universo más loco jamás creado. 
            Acompaña a Rick, el científico más brillante, y su nieto Morty en aventuras interdimensionales.
          </Typography>

          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap', mb: 6 }}>
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              onClick={() => navigate("/login")}
              sx={{ 
                bgcolor: '#56c135', 
                color: '#000',
                fontWeight: 'bold',
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                boxShadow: '0 8px 30px rgba(86, 193, 53, 0.4)',
                '&:hover': { bgcolor: '#4caf50', transform: 'translateY(-2px)' }
              }}
            >
              Iniciar Sesión
            </Button>
            
            <Button
              variant="outlined"
              size="large"
              onClick={() => navigate("/register")}
              startIcon={<LoginIcon />}
              sx={{ 
                borderColor: '#8b5cf6', 
                color: '#8b5cf6',
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                borderWidth: 2,
                '&:hover': { borderWidth: 2, bgcolor: 'rgba(139, 92, 246, 0.1)' }
              }}
            >
              Regístrate
            </Button>
          </Box>

          <Grid container spacing={2} justifyContent="center">
            {stats.map((stat, index) => (
              <Grid item xs={6} sm={3} key={index}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#56c135' }}>
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'grey.400' }}>
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ bgcolor: '#0f0f1a', py: 8 }}>
        <Container sx={{ py: 6 }}>
          <Typography variant="h4" sx={{ textAlign: 'center', mb: 2, color: '#fff', fontWeight: 'bold' }}>
            Explora el Multiverso
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'center', mb: 6, color: 'grey.400', maxWidth: 600, mx: 'auto' }}>
            Sumérgete en un universo de locuras, aventuras y ciencia ficción como nunca antes
          </Typography>

          <Grid container spacing={3}>
            {features.map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card sx={{ 
                  bgcolor: '#1a1a2e', 
                  height: '100%',
                  border: '1px solid rgba(255,255,255,0.05)',
                  transition: 'all 0.3s ease',
                  '&:hover': { 
                    transform: 'translateY(-8px)',
                    border: `1px solid ${item.color}40`,
                    boxShadow: `0 20px 40px ${item.color}20`
                  }
                }}>
                  <CardActionArea sx={{ height: '100%' }}>
                    <CardContent sx={{ textAlign: 'center', py: 4, px: 2 }}>
                      <Box sx={{ color: item.color, mb: 2 }}>
                        {item.icon}
                      </Box>
                      <Typography variant="h6" sx={{ color: '#fff', fontWeight: 'bold', mb: 1 }}>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'grey.500' }}>
                        {item.desc}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ 
        py: 8, 
        background: 'linear-gradient(135deg, rgba(86, 193, 53, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
        borderTop: '1px solid rgba(255,255,255,0.05)'
      }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3, color: '#fff' }}>
            ¿Listo para explorar?
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, color: 'grey.400', maxWidth: 500, mx: 'auto' }}>
            Regístrate ahora y accede a nuestro sistema de gestión de gastos del universo Rick y Morty
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate("/register")}
            sx={{ 
              bgcolor: '#8b5cf6', 
              color: '#fff',
              fontWeight: 'bold',
              px: 5,
              py: 1.5,
              fontSize: '1.1rem',
              '&:hover': { bgcolor: '#7c3aed' }
            }}
          >
            Crear Cuenta
          </Button>
        </Container>
      </Box>
    </Box>
  );
};
