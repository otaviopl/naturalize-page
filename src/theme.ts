import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#D4AF37', // Gold color
      light: '#E6C566',
      dark: '#B8960B',
      contrastText: '#fff',
    },
    secondary: {
      main: '#FFFFFF', // White
      light: '#FFFFFF',
      dark: '#F5F5F5',
      contrastText: '#000',
    },
    background: {
      default: '#FFFFFF',
      paper: '#FAFAFA',
    },
    text: {
      primary: '#333333',
      secondary: '#5A5A5A',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2rem',
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.75rem',
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.5rem',
    },
    h5: {
      fontWeight: 500,
      fontSize: '1.25rem',
    },
    h6: {
      fontWeight: 500,
      fontSize: '1rem',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          padding: '8px 24px',
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.05)',
        },
      },
    },
  },
});

export default theme; 