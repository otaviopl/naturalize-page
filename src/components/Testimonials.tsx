'use client';

import { useState, useEffect } from 'react';
import { Box, Card, CardContent, Container, Typography, Avatar, Rating } from '@mui/material';
import { Quote } from 'lucide-react';
import dynamic from 'next/dynamic';

// Dynamically import Framer Motion components
const MotionDiv = dynamic(() => import('framer-motion').then((mod) => mod.motion.div), {
  ssr: false,
});

const AnimatePresence = dynamic(() => import('framer-motion').then((mod) => mod.AnimatePresence), {
  ssr: false,
});

const testimonials = [
  {
    name: 'Tania Souza',
    role: 'Paciente',
    text: 'Tive uma otima experiência nesta clinica, um atendimento impecável, eles tiveram muito carinho e paciencia comigo, fiz varios procedimentos e o resultado foi simplesmente impecável, depois disso posso sorrir sem medo, auto estimar foi la em cima, indico de olhos fechados 🤩',
    avatar: 'TS',
  },
  {
    name: 'Thiago Ferrari',
    role: 'Paciente',
    text: 'A Clínica Naturalize tem um atendimento espetacular, humanizado e de qualidade , sem contar na pontualidade. Tive uma excelente experiência super indico.',
    avatar: 'TF',
  },
  {
    name: 'Roman Sarkis',
    role: 'Paciente',
    text: 'Clínica excelente com uma equipe maravilhosa exceutando um trabalho com a maior perfeição. Parabéns',
    avatar: 'RS',
  },
  {
    name: 'Pedro Gabriel',
    role: 'Paciente',
    text: 'Otimos profissionais, agora estou sorrindo com mais segurança',
    avatar: 'PG',
  },
  {
    name: 'Andressa Virturino',
    role: 'Paciente',
    text: 'Ainda não realizei tratamento com a clínica, mas acompanho o trabalho da equipe e sei o quanto são profissionais, dedicados e comprometidos com a qualidade e o bem-estar dos pacientes. O ambiente é acolhedor e a reputação deles é excelente.',
    avatar: 'AV',
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
        position: 'relative',
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
                        <Rating
                          name="read-only"
                          value={5}
                          readOnly
                          size="small"
                          sx={{ color: 'secondary.main', mt: 0.5 }}
                        />
                      </Box>
                      <Quote size={32} color="#d1b78f" style={{ marginLeft: 'auto' }} />
                    </Box>
                    <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
                      &quot;{testimonials[currentIndex].text}&quot;
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
                backgroundColor:
                  index === currentIndex ? 'secondary.main' : 'rgba(209, 183, 143, 0.3)',
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
