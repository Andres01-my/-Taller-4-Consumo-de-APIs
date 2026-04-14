import { Header } from './features/layout/components/Header'
import { Footer } from './features/layout/components/Footer'
import { Content } from './features/layout/components/Content'
import { ApiRyC } from './features/api/components/ApiRyC'
import { Myaccount } from './features/auth/components/Myaccount'
import { Login } from './features/auth/components/Login'
import { Register } from './features/auth/components/Register'
import { ForgotPassword } from './features/auth/components/ForgotPassword'
import { ExpenseForm } from './features/expenses/components/ExpenseForm'
import { HashRouter, Routes, Route } from "react-router-dom"
import { FavoritesProvider } from './context/FavoritesContext'
import { AuthProvider } from './context/AuthContext'
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#56c135',
      light: '#7ed957',
      dark: '#3d8f26',
    },
    secondary: {
      main: '#1a1a2e',
      light: '#2d2d4a',
      dark: '#0f0f1a',
    },
    background: {
      default: '#0f0f1a',
      paper: '#1a1a2e',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0b0b0',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <FavoritesProvider>
          <HashRouter>
            <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
              <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/forgot-password' element={<ForgotPassword />} />
                <Route path='/expenses' element={<><Header /><ExpenseForm /><Footer /></>} />
                <Route path='/' element={<><Header /><Content /><Footer /></>} />
                <Route path='/apiryc' element={<><Header /><ApiRyC /><Footer /></>} />
                <Route path='/myaccount' element={<><Header /><Myaccount /><Footer /></>} />
              </Routes>
            </Box>
          </HashRouter>
        </FavoritesProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
