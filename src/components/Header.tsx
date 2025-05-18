"use client";

import { AppBar, Box, Button, Container, Toolbar } from '@mui/material';
import { motion } from 'framer-motion';
import Logo from './Logo';

export default function Header() {
  return (
    <AppBar
      position="fixed"
      color="transparent"
      elevation={0}
      sx={{
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(11, 20, 41, 0.8)',
        borderBottom: '1px solid rgba(209, 183, 143, 0.2)',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ py: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Logo />
          </motion.div>
          
          <Box sx={{ flexGrow: 1 }} />
          
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Button
              variant="contained"
              color="primary"
              href="#contato"
              aria-label="Agendar avaliação"
              sx={{
                fontWeight: 600,
                boxShadow: '0 4px 14px rgba(209, 183, 143, 0.3)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-3px)',
                  boxShadow: '0 6px 20px rgba(209, 183, 143, 0.4)',
                },
              }}
            >
              Agendar avaliação
            </Button>
          </motion.div>
        </Toolbar>
      </Container>
    </AppBar>
  );
} 