import { Box, Fab, Tooltip, Zoom } from '@mui/material';
import { IconProps } from '@phosphor-icons/react';
import { motion } from 'framer-motion';

interface SocialMediaButtonProps {
  href: string;
  tooltipText: string;
  icon: React.ForwardRefExoticComponent<IconProps>;
  backgroundColor: string;
  hoverColor: string;
  position?: number;
}

export default function SocialMediaButton({
  href,
  tooltipText,
  icon: Icon,
  backgroundColor,
  hoverColor,
  position = 0,
}: SocialMediaButtonProps) {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      sx={{
        position: 'fixed',
        bottom: { xs: 16, md: 32 },
        right: { xs: 16 + (position * 72), md: 32 + (position * 80) },
        zIndex: 1000,
      }}
    >
      <Tooltip
        title={tooltipText}
        placement="left"
        TransitionComponent={Zoom}
      >
        <Fab
          component="a"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            bgcolor: backgroundColor,
            '&:hover': {
              bgcolor: hoverColor,
            },
            width: { xs: 56, md: 64 },
            height: { xs: 56, md: 64 },
            boxShadow: `0 4px 12px ${backgroundColor}66`,
          }}
        >
          <Icon
            weight="fill"
            size={32}
            color="#FFFFFF"
          />
        </Fab>
      </Tooltip>
    </Box>
  );
} 