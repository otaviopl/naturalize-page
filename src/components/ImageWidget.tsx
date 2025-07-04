"use client";

import { Box, IconButton } from "@mui/material";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface ImageWidgetProps {
  imageSrc: string;
  alt?: string;
  href: string;
  backgroundColor?: string;
  hoverColor?: string;
  position?: number; // para empilhar widgets
}

export default function ImageWidget({
  imageSrc,
  alt = "Imagem do Widget",
  href,
  backgroundColor = "#1976d2",
  hoverColor = "#1565c0",
  position = 0,
}: ImageWidgetProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 120, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 120, opacity: 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 32 }}
        style={{
          position: "fixed",
          bottom: 24 + position * 80,
          right: 24,
          zIndex: 1300,
        }}
      >
        <IconButton
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            width: 64,
            height: 64,
            background: backgroundColor,
            borderRadius: "50%",
            boxShadow: 6,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            position: "relative",
            '&:hover': { background: hoverColor },
          }}
          aria-label={alt}
        >
          <Image src={imageSrc} alt={alt} fill style={{ objectFit: 'cover' }} />
        </IconButton>
      </motion.div>
    </AnimatePresence>
  );
} 