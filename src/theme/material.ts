import { createTheme } from '@mui/material/styles';

export const novelTheme = createTheme({
  palette: {
    primary: {
      main: '#720e9e',
      light: '#8f11c6',
      dark: '#5a0b7e',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#8f11c6',
      light: '#a514e8',
      dark: '#5a0b7e',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#f0e6f5',
      paper: '#faf7fc',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      color: '#720e9e',
    },
    h2: {
      color: '#720e9e',
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
          boxShadow: '0 4px 6px rgba(114, 14, 158, 0.1)',
        },
      },
    },
  },
});