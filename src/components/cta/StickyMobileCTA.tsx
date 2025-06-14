'use client';

import { Box, Fab, Tooltip, useMediaQuery, useTheme } from '@mui/material';
import { Calendar } from 'lucide-react';

export default function StickyMobileCTA() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // 'sm' is 600px

  if (!isMobile) return null;

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 24,
        right: 24,
        zIndex: 1200,
      }}
    >
      <Tooltip title="Agendar avaliação" arrow>
        <Fab
          color="secondary"
          aria-label="Agendar avaliação online"
          href="https://calendly.com/naturalize/avaliacao"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            boxShadow: '0 4px 14px rgba(209, 183, 143, 0.4)',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: '0 8px 25px rgba(209, 183, 143, 0.5)',
            },
          }}
        >
          <Calendar size={24} />
        </Fab>
      </Tooltip>
    </Box>
  );
}
