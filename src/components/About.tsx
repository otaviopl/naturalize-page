'use client';

import { Box, Container, Grid, Typography, Card } from '@mui/material';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ABOUT_IMAGES = [
  '/place/place2.jpeg',
  '/place/place3.jpeg',
  '/place/place4.jpeg',
  '/place/place5.jpeg',
  '/place/place6.jpeg',
];

export default function About() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % ABOUT_IMAGES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  return (
    <Box
      component="section"
      id="sobre"
      sx={{
        position: 'relative',
        py: { xs: 8, md: 12 },
        backgroundColor: 'rgba(15, 26, 51, 0.03)',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
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
              mb: { xs: 2, md: 1.05 },
            }}
          >
            Sobre Nós
          </Typography>
        </motion.div>

        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1rem', md: '1.4rem' },
                  mb: 3,
                  lineHeight: 1.8,
                }}
              >
                Na Clínica Naturalize, combinamos expertise odontológica com uma abordagem humana e
                personalizada. Nosso objetivo é proporcionar tratamentos que elevem sua confiança e
                qualidade de vida, seja em estética, ortodontia ou implantes. Aqui, cada sorriso
                recebe atenção exclusiva, focada no seu conforto e no resultado natural que você
                merece.
              </Typography>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Box sx={{ position: 'relative', p: '10px' }}>
                <Card
                  sx={{
                    boxShadow: 3,
                    borderRadius: 2,
                    position: 'relative',
                    overflow: 'hidden',
                    height: { xs: 200, md: 300 },
                  }}
                >
                  {ABOUT_IMAGES.map((src, idx) => (
                    <Image
                      key={src}
                      src={src}
                      alt={`Clínica Naturalize - Foto ${idx + 1}`}
                      fill
                      priority={idx === 0}
                      style={{
                        objectFit: 'cover',
                        objectPosition: 'center',
                        opacity: idx === current ? 1 : 0,
                        transition: 'opacity 1s ease',
                      }}
                    />
                  ))}
                </Card>
                <Box
                  sx={{
                    position: 'absolute',
                    top: -10,
                    left: -24,
                    bgcolor: 'primary.main', // amarelo
                    color: 'secondary.main',
                    borderRadius: 2,
                    px: 3,
                    py: 1,
                    boxShadow: 3,
                    fontWeight: 500,
                    fontSize: '1.1rem',
                    zIndex: 2,
                    minWidth: 120,
                    textAlign: 'center',
                  }}
                >
                  Desde 2010
                </Box>
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  mt: 4,
                  padding: '16px 24px',
                  backgroundColor: 'primary.main',
                  color: 'secondary.main',
                  borderRadius: 2,
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                }}
              >
                Naturalize — desperte o melhor do seu sorriso com confiança e naturalidade.
              </Typography>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
