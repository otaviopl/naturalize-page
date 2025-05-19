import { Box, Container } from '@mui/material';
import Image from 'next/image';
import ClientHeroAnimation from './ClientHeroAnimation';

export default function Hero() {
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
      <Image
        src="/hero.jpg"
        alt="Clínica Naturalize - Saúde e Bem-estar"
        fill
        priority
        style={{ 
          objectFit: 'cover',
          objectPosition: 'center',
          zIndex: 0
        }}
      />
      
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