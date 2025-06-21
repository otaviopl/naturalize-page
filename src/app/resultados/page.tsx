import { Box, Container, Typography } from '@mui/material';

export const metadata = {
  title: 'Resultados | Clínica Naturalize',
  description:
    'Veja os resultados dos tratamentos da Clínica Naturalize - Antes e Depois de nossos procedimentos estéticos, ortodônticos e implantes.',
};

export default function ResultadosPage() {
  return (
    <Box component="main" sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h1"
          align="center"
          className="gold-gradient-text"
          sx={{
            fontSize: { xs: '2.5rem', md: '3.5rem' },
            fontWeight: 700,
            mb: 6,
          }}
        >
          Nossos Resultados
        </Typography>

        <Typography
          variant="body1"
          align="center"
          sx={{ fontSize: '1.2rem', maxWidth: '800px', mx: 'auto' }}
        >
          Em breve compartilharemos aqui os resultados dos tratamentos realizados na Clínica
          Naturalize.
        </Typography>
      </Container>
    </Box>
  );
}
