'use client';

import { AppBar, Box, Button, Container, Toolbar } from '@mui/material';
import Logo from './Logo';

export default function Header() {
  return (
    <AppBar
      position="fixed"
      color="transparent"
      elevation={0}
      sx={{
        backdropFilter: 'blur(8px)',
        backgroundColor: 'rgba(38, 45, 66, 0.95)',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ py: 1 }}>
          <Logo />
          <Box sx={{ flexGrow: 1 }} />
          <Button
            variant="contained"
            href="https://wa.me/551633711212"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              backgroundColor: 'secondary.main',
              color: 'primary.main',
              px: 3,
              '&:hover': {
                backgroundColor: 'secondary.dark',
                color: '#FFFFFF',
              },
            }}
          >
            Agendar avaliação
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
