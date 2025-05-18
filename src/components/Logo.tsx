"use client";

import { Box, SxProps, Theme } from '@mui/material';

interface LogoProps {
  sx?: SxProps<Theme>;
}

export default function Logo({ sx }: LogoProps) {
  return (
    <Box 
      component="svg" 
      viewBox="0 0 200 80" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      sx={{
        width: { xs: 140, md: 180 },
        height: 'auto',
        ...sx
      }}
    >
      {/* Full Naturalize text */}
      <text
        x="20"
        y="45"
        fontFamily="Poppins, sans-serif"
        fontWeight="600"
        fontSize="24"
        fill="url(#gold-gradient)"
      >
        Naturalize
      </text>
      {/* Gold gradient definition */}
      <defs>
        <linearGradient
          id="gold-gradient"
          x1="20"
          y1="20"
          x2="180"
          y2="60"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#d1b78f" />
          <stop offset="1" stopColor="#8c7353" />
        </linearGradient>
      </defs>
    </Box>
  );
} 