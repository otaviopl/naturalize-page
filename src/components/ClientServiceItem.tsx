'use client';

import { useState } from 'react';
import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { ReactElement } from 'react';
import dynamic from 'next/dynamic';

const EsteticaDialog = dynamic(() => import('./cta/EsteticaDialog'), {
  ssr: false,
  loading: () => <div style={{ minHeight: '20px' }} />,
});

const FacetasDialog = dynamic(() => import('./cta/FacetasDialog'), {
  ssr: false,
  loading: () => <div style={{ minHeight: '20px' }} />,
});

const RestauracoesDialog = dynamic(() => import('./cta/RestauracoesDialog'), {
  ssr: false,
  loading: () => <div style={{ minHeight: '20px' }} />,
});

const ImplantesDialog = dynamic(() => import('./cta/ImplantesDialog'), {
  ssr: false,
  loading: () => <div style={{ minHeight: '20px' }} />,
});

interface ServiceItemProps {
  item: {
    icon: ReactElement;
    title: string;
    description: string;
    btnName: string;
  };
  index: number;
}

export default function ClientServiceItem({ item, index }: ServiceItemProps) {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getButtonProps = () => {
    switch (item.title) {
      case 'Estética':
        return {
          text: 'Quero um sorriso mais branco',
          action: handleOpenDialog,
          ariaLabel: 'Ver opções de tratamentos estéticos',
        };
      case 'Ortodontia':
        return {
          text: 'Ver opções de alinhadores',
          action: () => scrollToSection('galeria'),
          ariaLabel: 'Ver opções de alinhadores ortodônticos',
        };
      case 'Facetas':
        return {
          text: item.btnName,
          action: handleOpenDialog,
          ariaLabel: 'Comparativo antes e depois de facetas',
        };
      case 'Restaurações':
        return {
          text: 'Antes e depois',
          action: handleOpenDialog,
          ariaLabel: 'Comparativo antes e depois de restaurações',
        };
      case 'Implantes':
        return {
          text: 'Antes e depois',
          action: handleOpenDialog,
          ariaLabel: 'Comparativo antes e depois de implantes',
        };
      default:
        return {
          text: item.btnName,
          action: () => window.open('https://wa.me/551633711212', '_blank'),
          ariaLabel: 'Saiba mais sobre este serviço no WhatsApp',
        };
    }
  };

  const buttonProps = getButtonProps();

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.2 }}
        className="framer-motion-section"
      >
        <Card
          elevation={0}
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: 2,
            border: '1px solid rgba(209, 183, 143, 0.3)',
            transition: 'all 0.3s ease',
            '&:hover': {
              boxShadow: '0 8px 24px rgba(15, 26, 51, 0.1)',
              transform: 'translateY(-8px)',
              borderColor: 'rgba(209, 183, 143, 0.6)',
            },
          }}
        >
          <CardContent sx={{ p: 4, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ mb: 2 }}>{item.icon}</Box>
            <Typography
              gutterBottom
              variant="h5"
              component="h3"
              sx={{
                fontWeight: 600,
                color: 'primary.main',
                mb: 2,
              }}
            >
              {item.title}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              {item.description}
            </Typography>

            <Box sx={{ mt: 'auto' }}>
              <Button
                variant="text"
                color="secondary"
                size="small"
                onClick={buttonProps.action}
                aria-label={buttonProps.ariaLabel}
                sx={{
                  fontWeight: 500,
                  boxShadow: '0 8px 24px rgba(15, 26, 51,0.2)',
                  textDecoration: 'none',
                  backgroundColor: 'primary.main',
                  '&:hover': {
                    backgroundColor: 'primary.dark',
                  },
                }}
              >
                {buttonProps.text}
              </Button>
            </Box>
          </CardContent>
        </Card>
      </motion.div>

      {item.title === 'Estética' && (
        <EsteticaDialog open={dialogOpen} onClose={handleCloseDialog} />
      )}
      {item.title === 'Facetas' && <FacetasDialog open={dialogOpen} onClose={handleCloseDialog} />}
      {item.title === 'Restaurações' && (
        <RestauracoesDialog open={dialogOpen} onClose={handleCloseDialog} />
      )}
      {item.title === 'Implantes' && <ImplantesDialog open={dialogOpen} onClose={handleCloseDialog} />}
    </>
  );
}
