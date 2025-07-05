'use client';

import { useState } from 'react';
import {
  Box,
  IconButton,
  Typography,
} from '@mui/material';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface FacetasCarouselProps {
  images: {
    src: string;
    alt: string;
  }[];
}

export default function FacetasCarousel({ images }: FacetasCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <Box sx={{ position: 'relative', width: '100%' }}>
      {/* Imagem principal */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: 400,
          borderRadius: 2,
          overflow: 'hidden',
          mb: 2,
        }}
      >
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          fill
          style={{ objectFit: 'cover' }}
        />
      </Box>

      {/* Controles de navegação */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'absolute',
          top: '50%',
          left: 0,
          right: 0,
          transform: 'translateY(-50%)',
          px: 2,
          zIndex: 1,
        }}
      >
        <IconButton
          onClick={prevImage}
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
            },
          }}
        >
          <ChevronLeft />
        </IconButton>
        <IconButton
          onClick={nextImage}
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
            },
          }}
        >
          <ChevronRight />
        </IconButton>
      </Box>

      {/* Indicadores */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 1,
          mt: 2,
        }}
      >
        {images.map((_, index) => (
          <Box
            key={index}
            onClick={() => setCurrentIndex(index)}
            sx={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              backgroundColor: index === currentIndex ? 'primary.main' : 'grey.300',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
              '&:hover': {
                backgroundColor: index === currentIndex ? 'primary.dark' : 'grey.400',
              },
            }}
          />
        ))}
      </Box>

      {/* Contador */}
      <Typography
        variant="body2"
        align="center"
        sx={{ mt: 1, color: 'text.secondary' }}
      >
        {currentIndex + 1} de {images.length}
      </Typography>
    </Box>
  );
} 