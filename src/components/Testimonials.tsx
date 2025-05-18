"use client";

import { useState, useEffect } from 'react';
import { Box, Card, CardContent, Container, Typography, Avatar } from '@mui/material';
import { Quote } from 'lucide-react';
import dynamic from 'next/dynamic';

// Dynamically import Framer Motion components
const MotionDiv = dynamic(
  () => import('framer-motion').then(mod => mod.motion.div),
  { ssr: false }
);

const AnimatePresence = dynamic(
  () => import('framer-motion').then(mod => mod.AnimatePresence),
  { ssr: false }
);

const testimonials = [
  {
    name: 'Ana Paula',
    role: 'Paciente de Ortodontia',
    text: 'Estou encantada com os resultados do meu tratamento ortodôntico. A equipe da Naturalize é extremamente atenciosa e o ambiente da clínica transmite conforto e segurança.',
    avatar: 'AP',
  },
  {
    name: 'Marcos Silva',
    role: 'Paciente de Implante',
    text: 'Realizar implantes na Clínica Naturalize foi a melhor decisão. Procedimento indolor e recuperação rápida. Agora posso sorrir com confiança novamente.',
    avatar: 'MS',
  },
  {
    name: 'Carla Mendes',
    role: 'Tratamento Estético',
    text: 'Os tratamentos estéticos da Naturalize superaram todas as minhas expectativas. Resultados naturais e duradouros. A equipe entendeu exatamente o que eu procurava.',
    avatar: 'CM',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      component="section"
      id="depoimentos"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: '#fff',
      }}
    >
      <Container maxWidth="lg">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h2"
            align="center"
            className="gold-gradient-text"
            sx={{
              fontSize: { xs: '2rem', md: '3rem' },
              fontWeight: 700,
              mb: { xs: 4, md: 6 },
            }}
          >
            Depoimentos
          </Typography>
        </MotionDiv>

        {mounted && (
          <Box
            sx={{
              position: 'relative',
              height: { xs: '320px', md: '280px' },
              overflow: 'hidden',
            }}
          >
            <AnimatePresence mode="wait">
              <MotionDiv
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                style={{ position: 'absolute', width: '100%' }}
              >
                <Card
                  elevation={0}
                  sx={{
                    maxWidth: '800px',
                    mx: 'auto',
                    borderRadius: 2,
                    border: '1px solid rgba(209, 183, 143, 0.3)',
                    backgroundColor: 'rgba(15, 26, 51, 0.02)',
                  }}
                >
                  <CardContent sx={{ p: { xs: 3, md: 5 } }}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mb: 3,
                      }}
                    >
                      <Avatar
                        sx={{
                          bgcolor: 'secondary.main',
                          color: 'primary.main',
                          mr: 2,
                        }}
                      >
                        {testimonials[currentIndex].avatar}
                      </Avatar>
                      <Box>
                        <Typography variant="h6" component="h3" sx={{ fontWeight: 600 }}>
                          {testimonials[currentIndex].name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {testimonials[currentIndex].role}
                        </Typography>
                      </Box>
                      <Quote
                        size={32}
                        color="#d1b78f"
                        style={{ marginLeft: 'auto' }}
                      />
                    </Box>
                    <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
                      "{testimonials[currentIndex].text}"
                    </Typography>
                  </CardContent>
                </Card>
              </MotionDiv>
            </AnimatePresence>
          </Box>
        )}

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mt: 4,
          }}
        >
          {testimonials.map((_, index) => (
            <Box
              key={index}
              onClick={() => setCurrentIndex(index)}
              sx={{
                width: 12,
                height: 12,
                mx: 1,
                borderRadius: '50%',
                backgroundColor: index === currentIndex ? 'secondary.main' : 'rgba(209, 183, 143, 0.3)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
} 