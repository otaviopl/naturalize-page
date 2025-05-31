"use client";

import { Box, Container, Grid, Typography, Avatar } from '@mui/material';
import { motion } from 'framer-motion';

const professionals = [
  {
    name: 'Dra. Mayuri Fernandes',
    role: 'Facetas em Resinas',
    image: '/mayuri.jpeg',
    imagePosition: '50% 30%'
  },
  {
    name: 'Dr. Luiz Fernando Junior',
    role: 'Implantodontista',
    image: '/luiz.jpeg',
    imagePosition: '50% 40%'
  },
];

export default function Professionals() {
  return (
    <Box
      component="section"
      id="profissionais"
      sx={{
        py: { xs: 10, md: 15 },
        backgroundColor: '#FFFFFF',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '40%',
          background: 'linear-gradient(180deg, rgba(245, 217, 169, 0.2) 0%, rgba(245, 217, 169, 0) 100%)',
        }
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
            sx={{
              fontSize: { xs: '2rem', md: '3rem' },
              fontWeight: 700,
              mb: { xs: 4, md: 6 },
              color: '#262D42',
              position: 'relative'
            }}
          >
            Nossa Equipe
          </Typography>
        </motion.div>
        <Grid container spacing={8} justifyContent="center">
          {professionals.map((prof, idx) => (
            <Grid item xs={12} md={5} key={prof.name}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
              >
                <Box 
                  display="flex" 
                  flexDirection="column" 
                  alignItems="center" 
                  textAlign="center"
                  sx={{
                    padding: 3,
                    borderRadius: 2,
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)'
                    }
                  }}
                >
                  <Avatar
                    src={prof.image}
                    alt={prof.name}
                    sx={{
                      width: 180,
                      height: 180,
                      mb: 3,
                      boxShadow: '0 8px 24px rgba(130, 111, 83, 0.15)',
                      border: '4px solid #FFFFFF',
                      '& .MuiAvatar-img': {
                        objectPosition: prof.imagePosition
                      }
                    }}
                  />
                  <Typography variant="h5" sx={{ fontWeight: 600, mb: 1, color: '#262D42' }}>
                    {prof.name}
                  </Typography>
                  <Typography 
                    variant="subtitle1" 
                    sx={{ 
                      color: '#826F53',
                      fontWeight: 500,
                      letterSpacing: '0.5px'
                    }}
                  >
                    {prof.role}
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