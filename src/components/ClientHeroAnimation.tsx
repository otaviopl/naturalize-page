"use client";

import { Button, Typography } from '@mui/material';
import { motion } from 'framer-motion';

export default function ClientHeroAnimation() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography
          variant="h1"
          className="gold-gradient-text"
          sx={{
            fontSize: { xs: '2.5rem', md: '4rem', lg: '5rem' },
            fontWeight: 700,
            mb: 2,
            lineHeight: 1.2,
          }}
        >
          Viva sua beleza natural
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Typography
          variant="h5"
          sx={{
            maxWidth: '800px',
            mb: 4,
            fontWeight: 400,
            color: 'rgba(255, 255, 255, 0.9)',
            lineHeight: 1.6,
          }}
        >
          A Clínica Naturalize inicia seus atendimentos com uma proposta que vai além da estética: 
          queremos transformar a forma como você se cuida, sente e sorri.
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
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
            boxShadow: '0 4px 14px rgba(209, 183, 143, 0.4)',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-3px)',
              boxShadow: '0 8px 25px rgba(209, 183, 143, 0.5)',
            },
          }}
        >
          Agendar sua avaliação
        </Button>
      </motion.div>
    </>
  );
} 