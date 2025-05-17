import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#B0A084', // Sophisticated taupe/beige
      light: '#D6CFC7',
      dark: '#8A7B66',
      contrastText: '#fff',
    },
    secondary: {
      main: '#2C3639', // Deep charcoal
      light: '#4B5457',
      dark: '#1E2628',
      contrastText: '#fff',
    },
    background: {
      default: '#FCFCFC',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#2C3639',
      secondary: '#636E72',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 300,
      fontSize: '3rem',
      letterSpacing: '-0.5px',
    },
    h2: {
      fontWeight: 300,
      fontSize: '2.5rem',
      letterSpacing: '-0.5px',
    },
    h3: {
      fontWeight: 400,
      fontSize: '2rem',
      letterSpacing: '-0.25px',
    },
    h4: {
      fontWeight: 400,
      fontSize: '1.5rem',
      letterSpacing: 0,
    },
    h5: {
      fontWeight: 400,
      fontSize: '1.25rem',
      letterSpacing: '0.15px',
    },
    h6: {
      fontWeight: 500,
      fontSize: '1rem',
      letterSpacing: '0.15px',
    },
    button: {
      fontWeight: 500,
      letterSpacing: '0.5px',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          textTransform: 'none',
          padding: '10px 28px',
          fontWeight: 400,
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
            backgroundColor: '#8A7B66',
          },
        },
        outlined: {
          borderWidth: '1px',
          '&:hover': {
            borderWidth: '1px',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          boxShadow: 'none',
          border: '1px solid #EEEEEE',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          boxShadow: 'none',
        },
        elevation1: {
          boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.08)',
        },
        elevation2: {
          boxShadow: '0px 1px 5px rgba(0, 0, 0, 0.08)',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: '#EEEEEE',
        },
      },
    },
  },
});

export default theme; 