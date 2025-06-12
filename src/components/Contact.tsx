"use client";

import { Box, Container, Typography, Paper, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock } from '@phosphor-icons/react';

export default function Contact() {
  return (
    <Box
      component="section"
      id="contato"
      sx={{
        py: 8,
        backgroundColor: 'background.paper',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <Typography
            variant="h2"
            component="h2"
            align="center"
            sx={{
              mb: 8,
              fontWeight: 600,
              color: 'primary.main',
            }}
          >
            Entre em Contato
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12} md={5}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  borderRadius: 2,
                  border: '1px solid rgba(209, 183, 143, 0.3)',
                  height: '100%',
                }}
              >
                <Typography variant="h5" component="h3" sx={{ mb: 3, fontWeight: 600 }}>
                  Informações de Contato
                </Typography>
                
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <MapPin size={24} weight="fill" color="#D1B78F" />
                    <Typography>
                      R. São Sebastião, 1633 - Centro<br />
                      São Carlos - SP, 13560-230
                    </Typography>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Phone size={24} weight="fill" color="#D1B78F" />
                    <Typography>(16) 3371-1212</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Clock size={24} weight="fill" color="#D1B78F" />
                    <Typography>
                      Segunda a Sexta: 8h às 19h<br />
                      Sábados: 8h às 13h
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>

            <Grid item xs={12} md={7}>
              <Paper
                elevation={0}
                sx={{
                  height: 400,
                  borderRadius: 2,
                  border: '1px solid rgba(209, 183, 143, 0.3)',
                  overflow: 'hidden',
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3699.1234567890123!2d-47.8901234!3d-22.0123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b87b9c0c0c0c0c%3A0x0!2zUi4gU8OjbyBTZWJhc3Rpw6NvLCAxNjMzIC0gQ2VudHJvLCBTw6NvIENhcmxvcyAtIFNQLCAxMzU2MC0yMzA!5e0!3m2!1spt-BR!2sbr!4v1635789876543!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </Paper>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
} 