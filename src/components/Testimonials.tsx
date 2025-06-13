'use client';

import { useState, useEffect } from 'react';
import { Box, Card, CardContent, Container, Typography, Avatar } from '@mui/material';
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
    name: 'Bel Valim',
    role: 'Paciente',
    text: 'Eu [...] tive muitos problemas, meus dentes muito separados. Inclusive cheguei aparelho invisalign gastei um dinheirão com esse tratamento e continuei insatisfeita . Mas tomei coragem e procurei Dr Mayuri, e o resultado foi surpreendente. Nunca estive tão feliz com meus dentes, com meu sorriso. Obrigada a Naturalize ! ',
    avatar: 'BV',
  },
  {
    name: 'Fernanda Rezende',
    role: 'Paciente',
    text: 'Vocês são ótimos profissionais, fiquei muito satisfeita com o atendimento, minha mãe foi me recomendou e também levei minha filha.',
    avatar: 'FR',
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
