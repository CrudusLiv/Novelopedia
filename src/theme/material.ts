import { createTheme } from '@mui/material/styles';

export const novelTheme = createTheme({
  palette: {
    primary: {
      main: '#8870b4',
      light: '#a594c7',
      dark: '#6b4e91',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#9d89c4',
      light: '#b6a6d7',
      dark: '#766a98',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#f5f3fa',
      paper: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      color: '#8870b4',
    },
    h2: {
      color: '#8870b4',
    },
    body1: {
      color: '#37474F',
    },
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
          boxShadow: '0 4px 6px rgba(136, 112, 180, 0.1)',
        },
      },
    },
  },
});