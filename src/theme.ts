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
const navyMain = '#262D42';
const navyDark = '#1E2333';
const gold = '#E5C389';
const goldLight = '#F5D9A9';
const woodBrown = '#826F53';

// Create the theme
const theme = createTheme({
  palette: {
    primary: {
      main: navyMain,
      dark: navyDark,
    },
    secondary: {
      main: gold,
      light: goldLight,
      dark: woodBrown,
    },
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF',
    },
    text: {
      primary: navyMain,
      secondary: woodBrown,
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
          '--gold-light': goldLight,
          '--wood-brown': woodBrown,
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
            backgroundColor: woodBrown,
            color: '#FFFFFF',
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