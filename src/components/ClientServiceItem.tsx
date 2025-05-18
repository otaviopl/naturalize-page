"use client";

import { Box, Card, CardContent, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { ReactElement } from 'react';

interface ServiceItemProps {
  item: {
    icon: ReactElement;
    title: string;
    description: string;
  };
  index: number;
}

export default function ClientServiceItem({ item, index }: ServiceItemProps) {
  return (
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
        <CardContent sx={{ p: 4, flexGrow: 1 }}>
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
          <Typography variant="body1" color="text.secondary">
            {item.description}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
} 