"use client";

import { Box, Fab, Tooltip, Zoom } from '@mui/material';
import { WhatsappLogo } from '@phosphor-icons/react';
import { motion } from 'framer-motion';

export default function WhatsAppWidget() {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      sx={{
        position: 'fixed',
        bottom: { xs: 16, md: 32 },
        right: { xs: 16, md: 32 },
        zIndex: 1000,
      }}
    >
      <Tooltip
        title="Fale conosco no WhatsApp"
        placement="left"
        TransitionComponent={Zoom}
      >
        <Fab
          component="a"
          href="https://wa.me/551633711212"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            bgcolor: '#25D366',
            '&:hover': {
              bgcolor: '#128C7E',
            },
            width: { xs: 56, md: 64 },
            height: { xs: 56, md: 64 },
            boxShadow: '0 4px 12px rgba(37, 211, 102, 0.4)',
          }}
        >
          <WhatsappLogo
            weight="fill"
            size={32}
            color="#FFFFFF"
          />
        </Fab>
      </Tooltip>
    </Box>
  );
} 