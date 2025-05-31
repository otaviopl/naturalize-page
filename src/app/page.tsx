"use client";

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import Professionals from '@/components/Professionals';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import { Box } from '@mui/material';

export default function Home() {
  return (
    <Box sx={{ minHeight: '100vh' }}>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Professionals />
        <Testimonials />
      </main>
      <Footer />
      <WhatsAppWidget />
    </Box>
  );
} 