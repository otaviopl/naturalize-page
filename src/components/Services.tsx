import { Box, Container, Grid, Typography } from '@mui/material';
import { Sparkles, Smile, Stethoscope, Activity, UserCheck } from 'lucide-react';
import ClientServiceItem from './ClientServiceItem';
import Image from 'next/image';

const serviceItems = [
  {
    icon: <Sparkles size={48} color="#d1b78f" />,
    title: 'Facetas',
    description:
      'Transforme seu sorriso saudável com facetas de porcelana ou resina na nossa clínica odontológica. Uma solução rápida, moderna e minimamente invasiva para corrigir cor, forma e pequenas imperfeições nos dentes.',
    image: '/images/services/faceta-main.jpeg',
    btnName: 'Antes e depois',
  },
  {
    icon: <Smile size={48} color="#d1b78f" />,
    title: 'Restaurações',
    description:
      'Devolva a saúde e beleza do seu sorriso saudável com restaurações estéticas em resina. Tratamentos precisos, duráveis e praticamente invisíveis!',
    image: '/images/services/restauracao-main.jpeg',
    btnName: 'Antes e depois',
  },
  {
    icon: <Stethoscope size={48} color="#d1b78f" />,
    title: 'Implantes',
    description:
      'Recupere dentes perdidos com implantes dentários de última geração em São Carlos. Mais segurança, conforto e estética para sorrir com confiança todos os dias.',
    image: '/images/services/implante-main.jpeg',
    btnName: 'Antes e depois',
  },
  {
    icon: <Activity size={48} color="#d1b78f" />,
    title: 'Cirurgias em geral',
    description: 'Tratamentos cirúrgicos planejados com precisão e cuidado para aliviar dores e restaurar seu bem-estar. Cada detalhe é pensado para sua segurança e tranquilidade!',
    image: '/images/services/cirurgias-em-geral-main.jpeg',
    btnName: 'Saiba mais',
  },
  {
    icon: <UserCheck size={48} color="#d1b78f" />,
    title: 'Clínico geral',
    description: 'Cuidamos da sua saúde bucal com atenção integral em nossa clínica odontológica em São Carlos. Avaliações, limpezas, diagnósticos e tratamentos preventivos pensados para manter seu sorriso bonito e saudável em todas as fases da vida.',
    image: '/images/services/clinico-geral-main.jpeg',
    btnName: 'Saiba mais',
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
          Nossos Tratamentos
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
