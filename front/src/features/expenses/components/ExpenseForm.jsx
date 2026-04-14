import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  MenuItem,
  Grid,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Alert,
  CircularProgress
} from '@mui/material';
import { useAuth } from '../../../context/AuthContext';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import BuildIcon from '@mui/icons-material/Build';
import SettingsIcon from '@mui/icons-material/Settings';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SecurityIcon from '@mui/icons-material/Security';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const categoryIcons = {
  combustible: <LocalGasStationIcon />,
  mantenimiento: <BuildIcon />,
  repuestos: <SettingsIcon />,
  accesorios: <ShoppingBagIcon />,
  seguro: <SecurityIcon />,
  otro: <MoreHorizIcon />
};

const categoryColors = {
  combustible: '#ff5722',
  mantenimiento: '#2196f3',
  repuestos: '#9c27b0',
  accesorios: '#ff9800',
  seguro: '#4caf50',
  otro: '#607d8b'
};

export const ExpenseForm = () => {
  const navigate = useNavigate();
  const { user, token, logout } = useAuth();
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const [formData, setFormData] = useState({
    date: new Date().toISOString().split('T')[0],
    category: 'combustible',
    amount: '',
    description: ''
  });

  const categories = [
    { value: 'combustible', label: 'Combustible' },
    { value: 'mantenimiento', label: 'Mantenimiento' },
    { value: 'repuestos', label: 'Repuestos' },
    { value: 'accesorios', label: 'Accesorios' },
    { value: 'seguro', label: 'Seguro' },
    { value: 'otro', label: 'Otro' }
  ];

  useEffect(() => {
    if (!token) {
      navigate('/login');
      return;
    }
    fetchExpenses();
  }, [token, navigate]);

  const fetchExpenses = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/api/expenses`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = await response.json();
      if (response.ok) {
        setExpenses(data.expenses);
      }
    } catch (err) {
      console.error('Error fetching expenses:', err);
    }
    setLoading(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!formData.date || !formData.category || !formData.amount || !formData.description) {
      setError('Todos los campos son requeridos');
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch(`${API_URL}/api/expenses`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess('Gasto registrado exitosamente');
        setFormData({
          date: new Date().toISOString().split('T')[0],
          category: 'combustible',
          amount: '',
          description: ''
        });
        fetchExpenses();
      } else {
        setError(data.message || 'Error al registrar gasto');
      }
    } catch (err) {
      setError('Error de conexión');
    }
    setSubmitting(false);
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${API_URL}/api/expenses/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` }
      });

      if (response.ok) {
        setExpenses(expenses.filter(exp => exp._id !== id));
        setSuccess('Gasto eliminado');
      }
    } catch (err) {
      setError('Error al eliminar gasto');
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const totalExpenses = expenses.reduce((sum, exp) => sum + exp.amount, 0);

  return (
    <Box sx={{ flex: 1, p: { xs: 2, md: 4 }, bgcolor: '#0f0f1a', minHeight: '100vh' }}>
      <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4, flexWrap: 'wrap', gap: 2 }}>
          <Box>
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#56c135' }}>
              Gestión de Gastos
            </Typography>
            <Typography variant="body2" sx={{ color: 'grey.400' }}>
              Bienvenido, {user?.email}
            </Typography>
          </Box>
          <Button
            variant="outlined"
            onClick={handleLogout}
            sx={{ borderColor: '#ff5722', color: '#ff5722', '&:hover': { borderColor: '#ff5722', bgcolor: 'rgba(255, 87, 34, 0.1)' } }}
          >
            Cerrar Sesión
          </Button>
        </Box>

        <Grid container spacing={3}>
          <Grid item xs={12} md={5}>
            <Card sx={{ bgcolor: '#1a1a2e', borderRadius: 3, border: '1px solid rgba(86, 193, 53, 0.2)' }}>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3, color: '#fff' }}>
                  <AddIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                  Nuevo Gasto
                </Typography>

                {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
                {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}

                <form onSubmit={handleSubmit}>
                  <TextField
                    fullWidth
                    label="Fecha"
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    sx={{ mb: 2 }}
                    InputLabelProps={{ shrink: true }}
                  />

                  <TextField
                    fullWidth
                    select
                    label="Categoría"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    sx={{ mb: 2 }}
                  >
                    {categories.map((cat) => (
                      <MenuItem key={cat.value} value={cat.value}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Box sx={{ color: categoryColors[cat.value] }}>{categoryIcons[cat.value]}</Box>
                          {cat.label}
                        </Box>
                      </MenuItem>
                    ))}
                  </TextField>

                  <TextField
                    fullWidth
                    label="Valor"
                    type="number"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    sx={{ mb: 2 }}
                    inputProps={{ min: 0 }}
                  />

                  <TextField
                    fullWidth
                    label="Descripción"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    sx={{ mb: 3 }}
                    multiline
                    rows={3}
                  />

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    size="large"
                    disabled={submitting}
                    sx={{
                      bgcolor: '#56c135',
                      color: '#000',
                      fontWeight: 'bold',
                      py: 1.5,
                      '&:hover': { bgcolor: '#4caf50' }
                    }}
                  >
                    {submitting ? <CircularProgress size={24} /> : 'Registrar Gasto'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={7}>
            <Card sx={{ bgcolor: '#1a1a2e', borderRadius: 3, border: '1px solid rgba(139, 92, 246, 0.2)' }}>
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#fff' }}>
                    Historial de Gastos
                  </Typography>
                  <Typography variant="h6" sx={{ color: '#56c135', fontWeight: 'bold' }}>
                    Total: ${totalExpenses.toLocaleString()}
                  </Typography>
                </Box>

                {loading ? (
                  <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
                    <CircularProgress sx={{ color: '#56c135' }} />
                  </Box>
                ) : expenses.length === 0 ? (
                  <Box sx={{ textAlign: 'center', py: 4 }}>
                    <Typography variant="body1" sx={{ color: 'grey.500' }}>
                      No hay gastos registrados
                    </Typography>
                  </Box>
                ) : (
                  <TableContainer component={Paper} sx={{ bgcolor: 'transparent' }}>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell sx={{ color: 'grey.400', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Fecha</TableCell>
                          <TableCell sx={{ color: 'grey.400', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Categoría</TableCell>
                          <TableCell sx={{ color: 'grey.400', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Valor</TableCell>
                          <TableCell sx={{ color: 'grey.400', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Descripción</TableCell>
                          <TableCell sx={{ color: 'grey.400', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Acción</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {expenses.map((exp) => (
                          <TableRow key={exp._id} sx={{ '&:hover': { bgcolor: 'rgba(255,255,255,0.05)' } }}>
                            <TableCell sx={{ color: '#fff', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                              {new Date(exp.date).toLocaleDateString()}
                            </TableCell>
                            <TableCell sx={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Box sx={{ color: categoryColors[exp.category] }}>
                                  {categoryIcons[exp.category]}
                                </Box>
                                <Typography sx={{ color: '#fff', textTransform: 'capitalize' }}>
                                  {exp.category}
                                </Typography>
                              </Box>
                            </TableCell>
                            <TableCell sx={{ color: '#56c135', fontWeight: 'bold', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                              ${exp.amount.toLocaleString()}
                            </TableCell>
                            <TableCell sx={{ color: 'grey.300', borderBottom: '1px solid rgba(255,255,255,0.1)', maxWidth: 200 }}>
                              {exp.description}
                            </TableCell>
                            <TableCell sx={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                              <IconButton
                                onClick={() => handleDelete(exp._id)}
                                sx={{ color: '#ff5722', '&:hover': { bgcolor: 'rgba(255, 87, 34, 0.1)' } }}
                              >
                                <DeleteIcon />
                              </IconButton>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                )}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
