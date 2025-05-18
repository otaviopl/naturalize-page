"use client";

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme';
import dynamic from 'next/dynamic';

const StickyMobileCTA = dynamic(() => import('./cta/StickyMobileCTA'), { ssr: false });

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
      <StickyMobileCTA />
    </ThemeProvider>
  );
} 