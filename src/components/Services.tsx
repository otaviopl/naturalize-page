"use client";

import { Box, Card, CardContent, Container, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { Sparkles, Smile, Stethoscope } from 'lucide-react';

const serviceItems = [
  {
    icon: <Sparkles size={48} color="#d1b78f" />,
    title: 'Estética',
    description: 'Procedimentos avançados de estética facial e dental, utilizando as técnicas mais modernas e materiais de alta qualidade para realçar sua beleza natural.',
  },
  {
    icon: <Smile size={48} color="#d1b78f" />,
    title: 'Ortodontia',
    description: 'Tratamentos ortodônticos personalizados para todas as idades, com opções que vão desde aparelhos convencionais até alinhadores transparentes discretos.',
  },
  {
    icon: <Stethoscope size={48} color="#d1b78f" />,
    title: 'Implantes',
    description: 'Reabilitação oral completa com implantes dentários de última geração, devolvendo função e estética com resultados naturais e duradouros.',
  },
];

export default function Services() {
  return (
    <Box
      component="section"
      id="servicos"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: '#fff',
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
            Nossos Serviços
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {serviceItems.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
                className="framer-motion-section"
              >
                <Card
                  elevation={0}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 2,
                    border: '1px solid rgba(209, 183, 143, 0.3)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      boxShadow: '0 8px 24px rgba(15, 26, 51, 0.1)',
                      transform: 'translateY(-8px)',
                      borderColor: 'rgba(209, 183, 143, 0.6)',
                    },
                  }}
                >
                  <CardContent sx={{ p: 4, flexGrow: 1 }}>
                    <Box sx={{ mb: 2 }}>{item.icon}</Box>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h3"
                      sx={{
                        fontWeight: 600,
                        color: 'primary.main',
                        mb: 2,
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
} 