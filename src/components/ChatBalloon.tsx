"use client";

import { Box, Paper, Typography, IconButton } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface ChatBalloonProps {
  visible: boolean;
  onClose: () => void;
}

export default function ChatBalloon({ visible, onClose }: ChatBalloonProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 32 }}
          style={{
            position: "fixed",
            bottom: 110,
            right: 24,
            zIndex: 1300,
            maxWidth: 420,
          }}
        >
          <Paper
            elevation={8}
            sx={{
              p: 1.5,
              pr: 2,
              background: (theme) => theme.palette.primary.main,
              borderRadius: 3,
              boxShadow: 6,
              position: "relative",
              display: "flex",
              alignItems: "flex-start",
              gap: 1.5,
              maxHeight: 90,
              '::after': {
                content: '""',
                position: 'absolute',
                right: 19,
                bottom: -16,
                width: 0,
                height: 0,
                borderLeft: '12px solid transparent',
                borderRight: '12px solid transparent',
                borderTop: '16px solid',
                borderTopColor: (theme) => theme.palette.primary.main,
              },
            }}
          >
            <IconButton
              size="small"
              onClick={onClose}
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                zIndex: 2,
                color: '#d1b78f',
              }}
              aria-label="Fechar mensagem de contato"
            >
              <X size={18} />
            </IconButton>
            <Box>
              <Typography variant="body1" sx={{ fontWeight: 500, mb: 0.5, color: '#d1b78f' }}>
                Oi! Tudo bem? Me chamo Sofia, posso te ajudar com alguma dúvida?
              </Typography>
            </Box>
          </Paper>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 