'use client';

import { useEffect, useState } from 'react';
import { Box, Button } from '@mui/material';
import FacetasCarousel from './FacetasCarousel';

interface FacetasModalProps {
  open: boolean;
  onClose: () => void;
}

export default function FacetasModal({ open, onClose }: FacetasModalProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);

  if (!isClient || !open) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1300,
    }}>
      <Box sx={{
        bgcolor: 'background.paper',
        borderRadius: 2,
        boxShadow: 24,
        width: { xs: '90%', sm: 600 },
        maxWidth: '95vw',
        p: 3,
        outline: 'none',
      }}>
        <h2 style={{ margin: 0, fontWeight: 600, color: '#1976d2' }}>
          Antes e Depois
        </h2>
        <Box sx={{ py: 4 }}>
          <FacetasCarousel images={[
            { src: '/images/services/faceta-reserve.jpeg', alt: 'Tratamento 1 – Facetas' },
            { src: '/images/services/faceta_before_after_3.jpeg', alt: 'Tratamento 3 – Facetas' },
            { src: '/images/services/faceta-main.jpeg', alt: 'Tratamento 2 – Facetas' },
          ]} />
        </Box>
        <Box sx={{ textAlign: 'right', mt: 2 }}>
          <Button onClick={onClose} variant="outlined" color="primary">
            Fechar
          </Button>
        </Box>
      </Box>
    </div>
  );
}
