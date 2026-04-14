import React, { useState } from 'react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Link,
  Alert,
  InputAdornment,
  CircularProgress
} from '@mui/material';
import { useAuth } from '../../../context/AuthContext';
import EmailIcon from '@mui/icons-material/Email';
import LockResetIcon from '@mui/icons-material/LockReset';

export const ForgotPassword = () => {
  const navigate = useNavigate();
  const { requestPasswordReset, resetPassword } = useAuth();
  const [email, setEmail] = useState('');
  const [resetToken, setResetToken] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [step, setStep] = useState(1);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePassword = (password) => {
    const minLength = password.length >= 8;
    const hasNumber = /\d/.test(password);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    return minLength && hasNumber && hasSpecial;
  };

  const handleRequestReset = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!validateEmail(email)) {
      setError('El correo debe contener @');
      return;
    }

    setLoading(true);
    const result = await requestPasswordReset(email);
    setLoading(false);

    if (result.success) {
      setSuccess(`Token de recuperación: ${result.token}`);
      setStep(2);
    } else {
      setError(result.message);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setError('');

    if (!validatePassword(newPassword)) {
      setError('La contraseña debe tener mínimo 8 caracteres, números y caracteres especiales');
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    setLoading(true);
    const result = await resetPassword(resetToken, newPassword);
    setLoading(false);

    if (result.success) {
      setSuccess('Contraseña restablecida exitosamente');
      setTimeout(() => navigate('/login'), 2000);
    } else {
      setError(result.message);
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: `
          linear-gradient(135deg, rgba(26, 26, 46, 0.95) 0%, rgba(15, 15, 26, 0.98) 100%),
          url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80')
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        p: 2
      }}
    >
      <Card
        sx={{
          maxWidth: 450,
          width: '100%',
          bgcolor: 'rgba(26, 26, 46, 0.9)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(86, 193, 53, 0.3)',
          borderRadius: 3,
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)'
        }}
      >
        <CardContent sx={{ p: 4 }}>
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <LockResetIcon sx={{ fontSize: 50, color: '#56c135', mb: 1 }} />
            <Typography
              variant="h4"
              sx={{
                fontWeight: 'bold',
                background: 'linear-gradient(135deg, #56c135, #8b5cf6)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 1
              }}
            >
              Recuperar Contraseña
            </Typography>
            <Typography variant="body2" sx={{ color: 'grey.400' }}>
              {step === 1 ? 'Ingresa tu correo para recibir el token' : 'Ingresa el token y tu nueva contraseña'}
            </Typography>
          </Box>

          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          {success && (
            <Alert severity="success" sx={{ mb: 2 }}>
              {success}
            </Alert>
          )}

          {step === 1 ? (
            <form onSubmit={handleRequestReset}>
              <TextField
                fullWidth
                label="Correo Electrónico"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{ mb: 3 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon sx={{ color: 'grey.500' }} />
                    </InputAdornment>
                  )
                }}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                disabled={loading}
                sx={{
                  bgcolor: '#56c135',
                  color: '#000',
                  fontWeight: 'bold',
                  py: 1.5,
                  mb: 2,
                  '&:hover': { bgcolor: '#4caf50' }
                }}
              >
                {loading ? <CircularProgress size={24} /> : 'Solicitar Token'}
              </Button>
            </form>
          ) : (
            <form onSubmit={handleResetPassword}>
              <TextField
                fullWidth
                label="Token de Recuperación"
                value={resetToken}
                onChange={(e) => setResetToken(e.target.value)}
                sx={{ mb: 2 }}
              />

              <TextField
                fullWidth
                label="Nueva Contraseña"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                sx={{ mb: 2 }}
              />

              <TextField
                fullWidth
                label="Confirmar Contraseña"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                sx={{ mb: 3 }}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                disabled={loading}
                sx={{
                  bgcolor: '#56c135',
                  color: '#000',
                  fontWeight: 'bold',
                  py: 1.5,
                  mb: 2,
                  '&:hover': { bgcolor: '#4caf50' }
                }}
              >
                {loading ? <CircularProgress size={24} /> : 'Restablecer Contraseña'}
              </Button>
            </form>
          )}

          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="body2" sx={{ color: 'grey.400' }}>
              ¿Recordaste tu contraseña?{' '}
              <Link
                component={RouterLink}
                to="/login"
                sx={{
                  color: '#56c135',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  '&:hover': { textDecoration: 'underline' }
                }}
              >
                Iniciar Sesión
              </Link>
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};
