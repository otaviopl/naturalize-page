'use client';

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Grid,
  Box,
  Typography,
} from '@mui/material';
import Image from 'next/image';

interface FacetasDialogProps {
  open: boolean;
  onClose: () => void;
}

export default function FacetasDialog({ open, onClose }: FacetasDialogProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      aria-labelledby="facetas-dialog-title"
      aria-describedby="facetas-dialog-description"
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
        Antes e Depois - Facetas
      </DialogTitle>
      <DialogContent sx={{ py: 4 }}>
        <Grid container spacing={3} id="facetas-dialog-description">
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: 250,
                borderRadius: 2,
                overflow: 'hidden',
              }}
            >
              <Image
                src="/images/services/faceta-main.jpeg"
                alt="Antes do tratamento"
                fill
                style={{ objectFit: 'cover' }}
              />
            </Box>
            <Typography align="center" variant="body2" sx={{ mt: 1 }}>
              Antes
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: 250,
                borderRadius: 2,
                overflow: 'hidden',
              }}
            >
              <Image
                src="/images/services/faceta-reserve.jpeg"
                alt="Depois do tratamento"
                fill
                style={{ objectFit: 'cover' }}
              />
            </Box>
            <Typography align="center" variant="body2" sx={{ mt: 1 }}>
              Depois
            </Typography>
          </Grid>
        </Grid>
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
