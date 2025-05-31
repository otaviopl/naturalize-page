"use client";

import { Box, Container, Grid, Typography, Stack, Link } from '@mui/material';
import { Instagram, MapPin, Clock, Phone } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        backgroundColor: 'primary.main',
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 3 }}>
              <Logo sx={{ filter: 'brightness(1.1)' }} />
            </Box>
            <Typography variant="body2" sx={{ opacity: 0.9, mb: 1, maxWidth: 300, fontSize: { xs: '0.8rem', md: '1rem' } }}>
            Referência em implantes e estética. Valorizamos seu sorriso com naturalidade!
            </Typography>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Typography variant="h6" className="gold-gradient-text" gutterBottom>
              Localização e Horários
            </Typography>
            
            <Stack spacing={2}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                <MapPin size={20} style={{ marginRight: 10, marginTop: 4 }} />
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                R. São Sebastião, 1633 - Centro, São Carlos - SP, 13560-230
                </Typography>
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                <Clock size={20} style={{ marginRight: 10, marginTop: 4 }} />
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  Segunda a Sexta: 8h às 19h<br />
                  Sábado: 8:30h às 13h
                </Typography>
              </Box>
            </Stack>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Typography variant="h6" className="gold-gradient-text" gutterBottom>
              Contato
            </Typography>
            
            <Stack spacing={2}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Phone size={20} style={{ marginRight: 10 }} />
                <Link 
                  href="tel:+551633711212" 
                  color="inherit" 
                  underline="hover"
                  sx={{ opacity: 0.9 }}
                >
                  (16) 3371-1212
                </Link>
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Instagram size={20} style={{ marginRight: 10 }} />
                <Link 
                  href="https://www.instagram.com/naturalizeodontologia/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  color="inherit" 
                  underline="hover"
                  sx={{ opacity: 0.9 }}
                >
                  @naturalizeodontologia
                </Link>
              </Box>
            </Stack>
          </Grid>
        </Grid>
        
        <Box
          sx={{
            mt: 6,
            pt: 3,
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            textAlign: 'center',
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            © {currentYear} Clínica Naturalize. Todos os direitos reservados.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
} 