'use client';

import { AppBar, Box, Button, Container, Toolbar, useMediaQuery, useTheme, Typography } from '@mui/material';
import Logo from './Logo';
import { Calendar } from 'lucide-react';

export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
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
        <Toolbar disableGutters sx={{ py: 1, minHeight: { xs: 70, sm: 90, md: 100 } }}>
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
              minWidth: 'fit-content',
              px: isMobile ? 1 : 3,
              '&:hover': {
                backgroundColor: 'secondary.dark',
                color: '#FFFFFF',
              },
            }}
            aria-label="Agendar avaliação"
          >
            {isMobile
              ? <Calendar size={26} style={{ margin: 0 }} />
              : <Typography variant="button" component="span">Agendar avaliação</Typography>
            }
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
