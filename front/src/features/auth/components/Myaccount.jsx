import React, { useState } from "react";
import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Box,
  InputAdornment,
  IconButton,
  Alert,
  Tabs,
  Tab
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";

export const Myaccount = () => {
  const [tab, setTab] = useState(0);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const [recoveryEmail, setRecoveryEmail] = useState("");
  const [recoveryMessage, setRecoveryMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (form.name.trim() === "") newErrors.name = "El nombre es obligatorio";
    if (!form.email.includes("@")) newErrors.email = "El correo debe contener @";
    if (form.password.length < 8) newErrors.password = "La contraseña debe tener mínimo 8 caracteres";
    if (form.password !== form.confirmPassword) newErrors.confirmPassword = "Las contraseñas no coinciden";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess("");
      return;
    }
    setSuccess("Registro realizado correctamente");
    setForm({ name: "", email: "", password: "", confirmPassword: "" });
    setErrors({});
  };

  const handleRecoverySubmit = (e) => {
    e.preventDefault();
    if (!recoveryEmail.includes("@")) {
      setRecoveryMessage({ type: "error", text: "Por favor ingresa un correo válido" });
      return;
    }
    setRecoveryMessage({ type: "success", text: "Se ha enviado un enlace de recuperación a tu correo" });
    setRecoveryEmail("");
  };

  return (
    <Container maxWidth="sm" sx={{ py: 5 }}>
      <Paper sx={{ p: 4, bgcolor: '#1a1a2e' }}>
        <Tabs 
          value={tab} 
          onChange={(e, newValue) => setTab(newValue)} 
          centered 
          sx={{ mb: 3, '& .Mui-selected': { color: '#56c135' } }}
          TabIndicatorProps={{ sx: { bgcolor: '#56c135' } }}
        >
          <Tab label="Registro" />
          <Tab label="Recuperar Contraseña" />
        </Tabs>

        {tab === 0 ? (
          <>
            <Typography variant="h4" align="center" gutterBottom sx={{ color: '#fff', fontWeight: 'bold' }}>
              Registro
            </Typography>

            {success && (
              <Alert severity="success" sx={{ mb: 2, bgcolor: '#1b5e20', color: '#fff' }}>
                {success}
              </Alert>
            )}

            <Box component="form" onSubmit={handleSubmit}>
              <TextField
                label="Nombre"
                name="name"
                value={form.name}
                onChange={handleChange}
                error={!!errors.name}
                helperText={errors.name}
                fullWidth
                sx={{ mb: 2, '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#333' } } }}
                InputProps={{
                  startAdornment: <InputAdornment position="start"><PersonIcon sx={{ color: '#56c135' }} /></InputAdornment>
                }}
              />

              <TextField
                label="Correo"
                name="email"
                value={form.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
                fullWidth
                sx={{ mb: 2 }}
                InputProps={{
                  startAdornment: <InputAdornment position="start"><EmailIcon sx={{ color: '#56c135' }} /></InputAdornment>
                }}
              />

              <TextField
                label="Contraseña"
                name="password"
                type={showPass ? "text" : "password"}
                value={form.password}
                onChange={handleChange}
                error={!!errors.password}
                helperText={errors.password}
                fullWidth
                sx={{ mb: 2 }}
                InputProps={{
                  startAdornment: <InputAdornment position="start"><LockIcon sx={{ color: '#56c135' }} /></InputAdornment>,
                  endAdornment: <InputAdornment position="end"><IconButton onClick={() => setShowPass(!showPass)} sx={{ color: '#aaa' }}>{showPass ? <VisibilityOffIcon /> : <VisibilityIcon />}</IconButton></InputAdornment>
                }}
              />

              <TextField
                label="Confirmar Contraseña"
                name="confirmPassword"
                type={showConfirm ? "text" : "password"}
                value={form.confirmPassword}
                onChange={handleChange}
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword}
                fullWidth
                sx={{ mb: 3 }}
                InputProps={{
                  startAdornment: <InputAdornment position="start"><LockIcon sx={{ color: '#56c135' }} /></InputAdornment>,
                  endAdornment: <InputAdornment position="end"><IconButton onClick={() => setShowConfirm(!showConfirm)} sx={{ color: '#aaa' }}>{showConfirm ? <VisibilityOffIcon /> : <VisibilityIcon />}</IconButton></InputAdornment>
                }}
              />

              <Button
                type="submit"
                variant="contained"
                fullWidth
                size="large"
                sx={{ bgcolor: '#56c135', color: '#000', fontWeight: 'bold', '&:hover': { bgcolor: '#4caf50' } }}
              >
                Registrarse
              </Button>
            </Box>
          </>
        ) : (
          <>
            <Typography variant="h4" align="center" gutterBottom sx={{ color: '#fff', fontWeight: 'bold' }}>
              Recuperar Contraseña
            </Typography>

            <Typography variant="body2" align="center" sx={{ mb: 3, color: '#aaa' }}>
              Ingresa tu correo y recupera tu contraseña
            </Typography>

            {recoveryMessage && (
              <Alert severity={recoveryMessage.type} sx={{ mb: 2 }}>
                {recoveryMessage.text}
              </Alert>
            )}

            <Box component="form" onSubmit={handleRecoverySubmit}>
              <TextField
                label="Correo Electrónico"
                value={recoveryEmail}
                onChange={(e) => setRecoveryEmail(e.target.value)}
                fullWidth
                sx={{ mb: 3 }}
                InputProps={{
                  startAdornment: <InputAdornment position="start"><EmailIcon sx={{ color: '#56c135' }} /></InputAdornment>
                }}
              />

              <Button
                type="submit"
                variant="contained"
                fullWidth
                size="large"
                sx={{ bgcolor: '#56c135', color: '#000', fontWeight: 'bold', '&:hover': { bgcolor: '#4caf50' } }}
              >
                Enviar Enlace
              </Button>
            </Box>
          </>
        )}
      </Paper>
    </Container>
  );
};