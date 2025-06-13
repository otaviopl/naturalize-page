'use client';

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
        height: { xs: '70px', sm: '90px', md: '100px' }, // AUMENTA a altura proporcional
        ...sx,
      }}
    >
      <Image
        src="/logo/Logotipo-horizontal.png"
        alt="Naturalize"
        fill
        style={{
          padding: '10px 0px 10px 0px',
          objectFit: 'contain',
          objectPosition: 'left center',
        }}
        priority
      />
    </Box>
  );
}
