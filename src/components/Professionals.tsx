"use client";

import { Box, Container, Grid, Typography, Avatar } from '@mui/material';
import { motion } from 'framer-motion';

const professionals = [
  {
    name: 'Dra. Ana Paula Silva',
    role: 'Cirurgiã-Dentista | CRO-SP 123456',
    description:
      'Especialista em Ortodontia e Estética, Dra. Ana Paula possui mais de 10 anos de experiência, unindo conhecimento técnico e atendimento humanizado para transformar sorrisos e elevar a autoestima de seus pacientes.',
    image: '/mayuri.jpeg', // Coloque a imagem correspondente em public/
  },
  {
    name: 'Dr. João Pedro Souza',
    role: 'Implantodontista | CRO-SP 654321',
    description:
      'Referência em implantes e reabilitação oral, Dr. João Pedro alia tecnologia de ponta e dedicação para proporcionar resultados naturais e funcionais, sempre priorizando o bem-estar do paciente.',
    image: '/luiz.jpeg', // Coloque a imagem correspondente em public/
  },
];

export default function Professionals() {
  return (
    <Box
      component="section"
      id="profissionais"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'rgba(15, 26, 51, 0.01)',
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
            Nossa Equipe
          </Typography>
        </motion.div>
        <Grid container spacing={6} justifyContent="center">
          {professionals.map((prof, idx) => (
            <Grid item xs={12} md={5} key={prof.name}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
              >
                <Box display="flex" flexDirection="column" alignItems="center" textAlign="center">
                  <Avatar
                    src={prof.image}
                    alt={prof.name}
                    sx={{ width: 160, height: 160, mb: 3, boxShadow: 3 }}
                  />
                  <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
                    {prof.name}
                  </Typography>
                  <Typography variant="subtitle1" color="secondary" sx={{ mb: 2 }}>
                    {prof.role}
                  </Typography>
                  <Typography variant="body1" sx={{ fontSize: { xs: '1rem', md: '1.05rem' }, lineHeight: 1.7 }}>
                    {prof.description}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
} 