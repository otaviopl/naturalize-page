'use client';

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';

interface EsteticaDialogProps {
  open: boolean;
  onClose: () => void;
}

export default function EsteticaDialog({ open, onClose }: EsteticaDialogProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      aria-labelledby="estetica-dialog-title"
      aria-describedby="estetica-dialog-description"
    >
      <DialogTitle
        id="estetica-dialog-title"
        sx={{
          fontWeight: 600,
          color: 'primary.main',
          borderBottom: '1px solid',
          borderColor: 'rgba(209, 183, 143, 0.3)',
          pb: 2,
        }}
      >
        Tratamentos Estéticos para um Sorriso mais Branco
      </DialogTitle>
      <DialogContent sx={{ py: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 3 }}>
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: 200,
                  borderRadius: 2,
                  overflow: 'hidden',
                  mb: 2,
                }}
              >
                <Image
                  src="/placeholder-1.jpg"
                  alt="Tratamento estético dental"
                  fill
                  style={{ objectFit: 'cover' }}
                  onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                    const target = e.target as HTMLImageElement;
                    target.style.backgroundColor = '#f0f0f0';
                    target.style.color = '#666';
                    target.style.display = 'flex';
                    target.style.alignItems = 'center';
                    target.style.justifyContent = 'center';
                    target.alt = 'Imagem não encontrada';
                  }}
                />
              </Box>
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: 200,
                  borderRadius: 2,
                  overflow: 'hidden',
                }}
              >
                <Image
                  src="/placeholder-2.jpg"
                  alt="Resultado de clareamento dental"
                  fill
                  style={{ objectFit: 'cover' }}
                  onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                    const target = e.target as HTMLImageElement;
                    target.style.backgroundColor = '#f0f0f0';
                    target.style.color = '#666';
                    target.style.display = 'flex';
                    target.style.alignItems = 'center';
                    target.style.justifyContent = 'center';
                    target.alt = 'Imagem não encontrada';
                  }}
                />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" paragraph id="estetica-dialog-description">
              Nossos tratamentos estéticos são realizados com tecnologia de ponta e materiais de
              primeira qualidade, garantindo resultados naturais e duradouros para seu sorriso.
            </Typography>

            <List>
              <ListItem disableGutters>
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <CheckCircle color="#d1b78f" size={24} />
                </ListItemIcon>
                <ListItemText
                  primary="Clareamento dental profissional com resultados em até 2 sessões"
                  primaryTypographyProps={{ fontWeight: 500 }}
                />
              </ListItem>
              <ListItem disableGutters>
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <CheckCircle color="#d1b78f" size={24} />
                </ListItemIcon>
                <ListItemText
                  primary="Facetas e lentes de contato dental para correção estética"
                  primaryTypographyProps={{ fontWeight: 500 }}
                />
              </ListItem>
              <ListItem disableGutters>
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <CheckCircle color="#d1b78f" size={24} />
                </ListItemIcon>
                <ListItemText
                  primary="Restaurações estéticas imperceptíveis e duradouras"
                  primaryTypographyProps={{ fontWeight: 500 }}
                />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 3 }}>
        <Button
          onClick={onClose}
          color="primary"
          variant="outlined"
          aria-label="Fechar diálogo de tratamentos estéticos"
        >
          Fechar
        </Button>
        <Button
          onClick={onClose}
          color="secondary"
          variant="contained"
          href="#contato"
          aria-label="Agendar avaliação estética"
        >
          Agendar avaliação
        </Button>
      </DialogActions>
    </Dialog>
  );
}
