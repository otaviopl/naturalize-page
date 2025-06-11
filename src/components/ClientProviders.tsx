"use client";

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme';
import dynamic from 'next/dynamic';

const WhatsAppWidget = dynamic(() => import('./WhatsAppWidget'), { ssr: false });
const InstagramWidget = dynamic(() => import('./InstagramWidget'), { ssr: false });

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
      {/* <StickyMobileCTA /> */}
      <WhatsAppWidget />
      <InstagramWidget />
    </ThemeProvider>
  );
} 