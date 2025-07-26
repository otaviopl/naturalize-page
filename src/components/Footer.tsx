'use client';

import { Box, Container, Grid, Typography, Stack, Link, IconButton } from '@mui/material';
import { Instagram } from 'lucide-react';
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
        <Grid container spacing={{ xs: 4, md: 6 }} justifyContent="center" sx={{ mt: 0, mb: 0 }}>
          {/* Coluna 1: Logo, descrição, redes sociais */}
          <Grid item xs={12} md={4} sx={{ mb: { xs: 4, md: 0 } }}>
            <Box sx={{ mb: 4 }}>
              <Logo sx={{ filter: 'brightness(1.1)' }} />
            </Box>
            <Typography
              variant="body2"
              sx={{
                opacity: 0.9,
                mb: 2,
                maxWidth: 350,
                fontSize: { xs: '0.8rem', md: '1rem' },
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              Na Naturalize Odontologia, clínica odontológica em São Carlos, transformamos sorrisos com excelência, tecnologia de ponta e cuidado personalizado. Nossa missão é oferecer tratamentos odontológicos acessíveis e de alta qualidade em um ambiente acolhedor e confortável.
            </Typography>
            <Stack
              direction="row"
              spacing={2}
              sx={{
                mt: 2,
                mb: { xs: 2, md: 0 },
                justifyContent: { xs: 'center', md: 'flex-start' },
              }}
            >
              <IconButton
                component="a"
                href="https://www.instagram.com/naturalizeodontologia/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  backgroundColor: 'rgba(255,255,255,0.08)',
                  color: 'white',
                  '&:hover': { backgroundColor: 'rgba(255,255,255,0.18)' },
                }}
              >
                <Instagram size={20} />
              </IconButton>
            </Stack>
          </Grid>

          {/* Coluna 2: Links rápidos */}
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: { xs: 'center', md: 'flex-end' },
              textAlign: { xs: 'center', md: 'right' },
              mb: { xs: 4, md: 0 },
            }}
          >
            <Typography variant="h6" className="gold-gradient-text" gutterBottom>
              Links Rápidos
            </Typography>
            <Stack
              spacing={1}
              sx={{
                width: { xs: '100%', md: 'auto' },
                alignItems: { xs: 'center', md: 'flex-end' },
              }}
            >
              <Link
                href="#hero"
                color="inherit"
                underline="hover"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                Início
              </Link>
              <Link href="#servicos" color="inherit" underline="hover">
                Serviços
              </Link>
              <Link href="#profissionais" color="inherit" underline="hover">
                Equipe
              </Link>
              <Link href="#depoimentos" color="inherit" underline="hover">
                Depoimentos
              </Link>
              <Link href="#contato" color="inherit" underline="hover">
                Contato
              </Link>
            </Stack>
          </Grid>

          {/* Coluna 3: Serviços */}
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: { xs: 'center', md: 'flex-end' },
              textAlign: { xs: 'center', md: 'right' },
            }}
          >
            <Typography variant="h6" className="gold-gradient-text" gutterBottom>
              Serviços
            </Typography>
            <Stack
              spacing={1}
              sx={{
                width: { xs: '100%', md: 'auto' },
                alignItems: { xs: 'center', md: 'flex-end' },
              }}
            >
              <Typography variant="body2">Odontologia Estética</Typography>
              <Typography variant="body2">Implantes Dentários</Typography>
              <Typography variant="body2">Ortodontia</Typography>
              <Typography variant="body2">Clínica Geral</Typography>
              <Typography variant="body2">Odontopediatria</Typography>
              <Typography variant="body2">Endodontia</Typography>
              <Typography variant="body2">Tratamentos Especializados</Typography>
            </Stack>
          </Grid>
        </Grid>

        {/* Rodapé inferior */}
        <Box
          sx={{
            mt: 6,
            pt: 3,
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 2,
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.7, flex: 1 }}>
            © {currentYear} Naturalize Odontologia. Todos os direitos reservados.
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.7, flex: 1, textAlign: 'center' }}>
            Feito com <span style={{ color: '#FFD700' }}>♥</span> por 4Dev
          </Typography>
          <Stack
            direction="row"
            spacing={2}
            sx={{ flex: 1, justifyContent: { xs: 'center', md: 'flex-end' } }}
          >
            <Link href="#" color="inherit" underline="hover" sx={{ opacity: 0.7 }}>
              Política de Privacidade
            </Link>
            <Link href="#" color="inherit" underline="hover" sx={{ opacity: 0.7 }}>
              Termos de Uso
            </Link>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
