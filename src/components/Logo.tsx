"use client";

import { Box, SxProps, Theme } from '@mui/material';
import Image from 'next/image';

interface LogoProps {
  sx?: SxProps<Theme>;
}

export default function Logo({ sx }: LogoProps) {
  return (
    <Box 
      sx={{
        width: { xs: '320px', sm: '400px', md: '500px' }, // AUMENTA a largura
        height: { xs: '70px', sm: '90px', md: '110px' },  // AUMENTA a altura proporcional
        ...sx
      }}
    >
      <Image
        src="/logo/MARCA-esticada.png"
        alt="Naturalize"
        fill
        style={{
          objectFit: 'contain',
          objectPosition: 'left center'
        }}
        priority
      />
    </Box>
  );
} 