import { Box, Container, Grid, Typography } from '@mui/material';
import { Sparkles, Smile, Stethoscope } from 'lucide-react';
import ClientServiceItem from './ClientServiceItem';
import Image from 'next/image';

const serviceItems = [
  {
    icon: <Sparkles size={48} color="#d1b78f" />,
    title: 'Facetas',
    description:
      'Transforme seu sorriso com facetas de porcelana ou resina. Uma solução rápida, moderna e minimamente invasiva para corrigir cor, forma e pequenas imperfeições nos dentes.',
    image: '/images/services/faceta-main.jpeg',
  },
  {
    icon: <Smile size={48} color="#d1b78f" />,
    title: 'Restaurações',
    description:
      'Devolva a saúde e beleza dos seus dentes com restaurações estéticas em resina. Tratamentos precisos, duráveis e praticamente invisíveis, realizados com técnicas avançadas.',
    image: '/images/services/restauraco-main.jpeg',
  },
  {
    icon: <Stethoscope size={48} color="#d1b78f" />,
    title: 'Implantes',
    description:
      'Recupere dentes perdidos com implantes dentários de última geração. Mais segurança, conforto e estética para sorrir com confiança todos os dias.',
    image: '/images/services/implante-main.jpeg',
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
        <Typography
          variant="h2"
          align="center"
          className="gold-gradient-text"
          sx={{
            fontSize: { xs: '2rem', md: '3rem' },
            fontWeight: 700,
            mb: { xs: 6, md: 8 },
          }}
        >
          Nossos Serviços
        </Typography>

        <Grid container spacing={6}>
          {serviceItems.map((item, index) => (
            <Grid item xs={12} key={index}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', md: index % 2 === 0 ? 'row' : 'row-reverse' },
                  gap: { xs: 4, md: 6 },
                  alignItems: 'center',
                }}
              >
                <Box
                  sx={{
                    width: { xs: '100%', md: '50%' },
                    position: 'relative',
                    height: { xs: '300px', md: '400px' },
                    borderRadius: 2,
                    overflow: 'hidden',
                  }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      width: '100%',
                      height: '100%',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'rgba(0,0,0,0.1)',
                        zIndex: 1,
                      },
                    }}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      style={{
                        objectFit: 'cover',
                      }}
                    />
                  </Box>
                </Box>
                <Box sx={{ width: { xs: '100%', md: '50%' } }}>
                  <ClientServiceItem item={item} index={index} />
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
