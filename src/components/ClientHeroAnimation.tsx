'use client';

import { Box, Button, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';

export default function ClientHeroAnimation() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Container maxWidth="lg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Typography
          variant="h1"
          className="gold-gradient-text"
          sx={{
            fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4.5rem' },
            fontWeight: 700,
            mb: { xs: 3, md: 4 },
            lineHeight: 1.1,
          }}
        >
          Viva sua beleza natural
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <Typography
          variant="h5"
          sx={{
            maxWidth: '900px',
            mb: { xs: 4, md: 5 },
            fontWeight: 400,
            color: 'rgba(255, 255, 255, 0.95)',
            lineHeight: 1.7,
            fontSize: { xs: '1rem', md: '1.15rem' },
            letterSpacing: '0.3px',
            textShadow: '0 2px 4px rgba(0,0,0,0.1)',
          }}
        >
          Na Naturalize Odontologia, clínica odontológica em São Carlos, nosso compromisso vai muito além de cuidar do seu sorriso saudável. 
          Aqui, prezamos pela sua segurança, conforto e, principalmente, por oferecer odontologia acessível e preço justo. 
          Cada detalhe é pensado para que você se sinta acolhido, tranquilo e confiante durante todo o seu atendimento.
          Acreditamos que a odontologia pode (e deve) ser humana, de alta qualidade e acessível. 
          Na Naturalize Odontologia, você contará com dentistas em São Carlos altamente capacitados, tecnologia de ponta e um ambiente feito para você se sentir em casa. 
          Se você procura por tratamentos odontológicos a um preço justo, venha conhecer nossa clínica e sorrir com confiança!
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            href="#contato"
            aria-label="Agendar sua avaliação"
            sx={{
              fontWeight: 600,
              py: 1.5,
              px: 4,
              backgroundColor: 'secondary.main',
              color: 'primary.main',
              boxShadow: '0 4px 14px rgba(229, 195, 137, 0.4)',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-3px)',
                boxShadow: '0 8px 25px rgba(229, 195, 137, 0.5)',
                backgroundColor: 'secondary.dark',
                color: '#FFFFFF',
              },
            }}
          >
            Agendar sua avaliação
          </Button>

          <Button
            variant="outlined"
            size="large"
            onClick={() => scrollToSection('servicos')}
            aria-label="Conheça nossos tratamentos odontológicos"
            sx={{
              fontWeight: 600,
              py: 1.5,
              px: 4,
              borderWidth: 2,
              color: 'secondary.main',
              borderColor: 'secondary.main',
              transition: 'all 0.3s ease',
              '&:hover': {
                borderWidth: 2,
                transform: 'translateY(-3px)',
                backgroundColor: 'rgba(229, 195, 137, 0.1)',
              },
            }}
          >
            Conheça nossos tratamentos odontológicos
          </Button>
        </Box>
      </motion.div>
    </Container>
  );
}
