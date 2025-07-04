'use client';

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material';
import FacetasCarousel from './FacetasCarousel';

interface FacetasDialogProps {
  open: boolean;
  onClose: () => void;
}

export default function FacetasDialog({ open, onClose }: FacetasDialogProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="facetas-dialog-title"
      aria-describedby="facetas-dialog-description"
      PaperProps={{ 
        sx: { 
          width: { xs: 300, sm: 350, md: 600 },
          maxWidth: '95vw' 
        } 
      }}
    >
      <DialogTitle
        id="facetas-dialog-title"
        sx={{
          fontWeight: 600,
          color: 'primary.main',
          borderBottom: '1px solid',
          borderColor: 'rgba(209, 183, 143, 0.3)',
          pb: 2,
        }}
      >
        Antes e Depois
      </DialogTitle>
            <DialogContent sx={{ py: 4 }}>
        <FacetasCarousel
          images={[
            {
              src: '/images/services/faceta-reserve.jpeg',
              alt: 'Tratamento 1- Facetas',
            },
            {
              src: '/images/services/faceta_before_after_3.jpeg',
              alt: 'Tratamento 3 - Facetas',
            },
            {
              src: '/images/services/faceta-main.jpeg',
              alt: 'Tratamento 2 - Facetas',
            },
          ]}
        />
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 3 }}>
        <Button
          onClick={onClose}
          color="primary"
          variant="outlined"
          aria-label="Fechar comparativo de facetas"
        >
          Fechar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
