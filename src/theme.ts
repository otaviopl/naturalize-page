'use client';

import { createTheme } from '@mui/material/styles';
import { Poppins, Inter } from 'next/font/google';

// Font configuration
export const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

export const inter = Inter({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

// Color palette
const navyMain = '#0f1a33';
const navyDark = '#0b1429';
const gold = '#d1b78f';
const goldShadow = '#8c7353';

// Create the theme
const theme = createTheme({
  palette: {
    primary: {
      main: navyMain,
      dark: navyDark,
    },
    secondary: {
      main: gold,
      dark: goldShadow,
    },
    background: {
      default: '#ffffff',
      paper: '#f8f9fa',
    },
    text: {
      primary: navyMain,
      secondary: '#4a5568',
    },
  },
  typography: {
    fontFamily: inter.style.fontFamily,
    h1: {
      fontFamily: poppins.style.fontFamily,
      fontWeight: 700,
    },
    h2: {
      fontFamily: poppins.style.fontFamily,
      fontWeight: 700,
    },
    h3: {
      fontFamily: poppins.style.fontFamily,
      fontWeight: 600,
    },
    h4: {
      fontFamily: poppins.style.fontFamily,
      fontWeight: 600,
    },
    h5: {
      fontFamily: poppins.style.fontFamily,
      fontWeight: 500,
    },
    h6: {
      fontFamily: poppins.style.fontFamily,
      fontWeight: 500,
    },
    button: {
      fontFamily: poppins.style.fontFamily,
      fontWeight: 500,
      textTransform: 'none',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ':root': {
          '--navy-main': navyMain,
          '--navy-dark': navyDark,
          '--gold': gold,
          '--gold-shadow': goldShadow,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 24px',
        },
        containedPrimary: {
          backgroundColor: gold,
          color: navyMain,
          '&:hover': {
            backgroundColor: goldShadow,
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: 32,
          paddingRight: 32,
          '@media (min-width:600px)': {
            paddingLeft: 48,
            paddingRight: 48,
          },
          '@media (min-width:960px)': {
            paddingLeft: 64,
            paddingRight: 64,
          },
        },
      },
    },
  },
});

export default theme; 