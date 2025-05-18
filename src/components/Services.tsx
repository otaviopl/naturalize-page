import { Box, Card, CardContent, Container, Grid, Typography } from '@mui/material';
import { Sparkles, Smile, Stethoscope } from 'lucide-react';
import ClientServiceItem from './ClientServiceItem';

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

        <Grid container spacing={4}>
          {serviceItems.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <ClientServiceItem item={item} index={index} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
} 