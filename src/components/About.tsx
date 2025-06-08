"use client";

import { Box, Container, Grid, Typography, Link } from '@mui/material';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <Box
      component="section"
      id="sobre"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'rgba(15, 26, 51, 0.03)',
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
              mb: { xs: 4, md: 6 },
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
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  mb: 3,
                  lineHeight: 1.8,
                }}
              >
                A Clínica Naturalize inicia seus atendimentos com uma proposta que vai além da estética: 
                queremos transformar a forma como você se cuida, sente e sorri.{' '}
                <Link 
                  href="https://wa.me/5516999999999" 
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Fale agora no WhatsApp"
                  sx={{
                    color: 'secondary.main',
                    textDecoration: 'underline',
                    fontWeight: 500,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: 'secondary.dark',
                    }
                  }}
                >
                  Fale agora no WhatsApp
                </Link>
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
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  lineHeight: 1.8,
                }}
              >
                Unimos estética avançada, ortodontia moderna e procedimentos de implantação com um atendimento acolhedor 
                e uma experiência pensada nos mínimos detalhes. Agora, São Carlos pode contar com um novo conceito em saúde e bem-estar.
              </Typography>
              
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
                  Naturalize — viva sua beleza natural com mais confiança. 🥂
                </Typography>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
} 