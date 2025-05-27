import { Box, Container } from '@mui/material';
import Image from 'next/image';
import ClientHeroAnimation from './ClientHeroAnimation';
import { useEffect, useState } from 'react';

const images = [
  '/place/place2.jpeg',
  '/place/place3.jpeg',
  '/place/place4.jpeg',
  '/place/place5.jpeg',
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      component="section"
      id="hero"
      sx={{
        position: 'relative',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        color: 'white',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(11, 20, 41, 0.7)',
          zIndex: 1,
        },
      }}
    >
      {images.map((src, idx) => (
        <Image
          key={src}
          src={src}
          alt={`Clínica Naturalize - Foto ${idx + 1}`}
          fill
          priority={idx === 0}
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
            zIndex: 0,
            opacity: idx === current ? 1 : 0,
            transition: 'opacity 1s ease',
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        />
      ))}
      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex: 2,
          py: 8,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          height: '100%',
        }}
      >
        <ClientHeroAnimation />
      </Container>
    </Box>
  );
} 