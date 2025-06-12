"use client";

import { Box, Container, Grid, Typography} from "@mui/material";
import { motion } from "framer-motion";

const professionals = [
  {
    name: 'Dra. Mayuri Fernandes',
    role: 'Facetas em Resinas',
    image: '/mayuri.jpeg',
    imagePosition: '50% 30%',
    description:
      'Especialista em facetas de resina com mais de 10 anos de experiência e centenas de sorrisos transformados.',
  },
  {
    name: 'Dr. Luiz Fernando Junior',
    role: 'Implantodontista',
    image: '/luiz.jpeg',
    imagePosition: '50% 40%',
    description:
      'Doutor em implantodontia com formação internacional e mais de 2000 implantes realizados com sucesso.',
  },
];

export default function Professionals() {
  return (
    <Box
      component='section'
      id='profissionais'
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
              <Box
                sx={{
                  className: 'professional-card',
                  borderRadius: 3,
                  boxShadow: '0 8px 24px rgba(130, 111, 83, 0.30)',
                  background: '#fff',
                  padding: 0,
                  transition: 'box-shadow 0.3s, transform 0.3s',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                >
                  <Box
                    display='flex'
                    flexDirection='column'
                    alignItems='center'
                    textAlign='center'
                    sx={{
                      padding: 0,
                      borderRadius: 3,
                      boxShadow: '0 8px 24px rgba(130, 111, 83, 0.15)',
                      background: '#fff',
                      overflow: 'hidden',
                      transition: 'box-shadow 0.3s, transform 0.3s',
                      position: 'relative',
                      willChange: 'transform',
                      borderBottomLeftRadius: 0,
                      borderBottomRightRadius: 0,
                    }}
                  >
                    <Box
                      className='img-zoom'
                      sx={{
                        width: '100%',
                        height: 260,
                        backgroundImage: `url(${prof.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: prof.imagePosition,
                        borderTopLeftRadius: 12,
                        borderTopRightRadius: 12,
                        transition:
                          'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        position: 'relative',
                        cursor: 'pointer',
                        willChange: 'transform',
                        overflow: 'hidden',
                        '&:hover': {
                          transform: 'scale(1.08)',
                        },
                        '&:hover .desc-overlay': {
                          opacity: 1,
                          pointerEvents: 'auto',
                        },
                      }}
                    >
                      <Box
                        className='desc-overlay'
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          bgcolor: 'rgba(38, 45, 66, 0.85)', // primary.main com opacidade
                          color: 'secondary.main',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          opacity: 0,
                          transition: 'opacity 0.3s',
                          p: 3,
                          pointerEvents: 'none',
                          zIndex: 2,
                        }}
                      >
                        <Typography
                          variant='body1'
                          sx={{ color: '#fff', mb: 2, fontWeight: 400 }}
                        >
                          {prof.description}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    className='desc-role'
                    sx={{
                      width: '100%',
                      background: '#fff',
                      borderBottomLeftRadius: 12,
                      borderBottomRightRadius: 12,
                      boxShadow: '0 -2px 12px rgba(38, 45, 66, 0.04)',
                      borderTop: '1px solid #eee',
                      p: 3,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                  >
                    <Typography
                      variant='h5'
                      sx={{ fontWeight: 600, mb: 1, color: 'primary.main' }}
                    >
                      {prof.name}
                    </Typography>
                    <Typography
                      variant='subtitle1'
                      sx={{
                        color: 'secondary.main',
                        fontWeight: 500,
                        letterSpacing: '0.5px',
                      }}
                    >
                      {prof.role}
                    </Typography>
                  </Box>
                </motion.div>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
} 