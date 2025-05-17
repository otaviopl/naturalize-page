import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  useTheme,
  useMediaQuery,
  Divider
} from '@mui/material';
import Grid from './CustomGrid';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Hero: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        pt: { xs: 15, md: 22 },
        pb: { xs: 10, md: 15 },
        background: theme.palette.background.default,
      }}
    >
      <Container maxWidth="xl" sx={{ position: 'relative' }}>
        {/* Decorative elements */}
        <Box 
          sx={{ 
            position: 'absolute', 
            top: { xs: -50, md: -80 }, 
            right: { xs: '10%', md: '15%' },
            width: { xs: 120, md: 180 },
            height: { xs: 120, md: 180 },
            borderRadius: '50%',
            border: `1px solid ${theme.palette.primary.light}`,
            opacity: 0.5,
            zIndex: 0
          }} 
        />
        
        <Grid container spacing={8} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box sx={{ position: 'relative', zIndex: 1 }}>
              <Typography 
                variant="h6" 
                component="p" 
                color="primary" 
                sx={{ mb: 2, letterSpacing: 3, textTransform: 'uppercase' }}
              >
                Modern Dental Care
              </Typography>
              
              <Typography 
                component="h1" 
                variant="h2" 
                sx={{ 
                  fontWeight: 300, 
                  mb: 3,
                  color: theme.palette.text.primary
                }}
              >
                Your Smile Deserves <Box component="span" sx={{ color: theme.palette.primary.main, fontWeight: 400 }}>Excellence</Box>
              </Typography>
              
              <Divider sx={{ width: '40px', borderColor: theme.palette.primary.main, borderWidth: 2, mb: 4 }}/>
              
              <Typography 
                variant="body1" 
                color="text.secondary" 
                sx={{ 
                  mb: 6,
                  maxWidth: '500px',
                  lineHeight: 1.8,
                  fontSize: '1.1rem'
                }}
              >
                Experience comprehensive dental care with a perfect blend of advanced 
                technology and gentle treatment. We're dedicated to giving you a healthy, 
                confident smile that lasts a lifetime.
              </Typography>
              
              <Box sx={{ display: 'flex', gap: 3 }}>
                <Button 
                  variant="contained" 
                  color="primary" 
                  size="large"
                  startIcon={<CalendarMonthIcon />}
                >
                  Book Appointment
                </Button>
                <Button 
                  variant="text" 
                  color="secondary" 
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  sx={{ 
                    color: theme.palette.text.primary,
                    '&:hover': { 
                      color: theme.palette.primary.main,
                      backgroundColor: 'transparent'
                    }
                  }}
                >
                  Our Services
                </Button>
              </Box>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: { xs: '320px', md: '520px' },
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: `linear-gradient(135deg, ${theme.palette.primary.light}22 0%, ${theme.palette.primary.light}44 100%)`,
                  zIndex: 1
                }
              }}
            >
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                alt="Dental clinic"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'grayscale(0.3)',
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  p: 4,
                  zIndex: 2,
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  gap: 4
                }}
              >
                <Box sx={{ textAlign: 'center', backgroundColor: 'rgba(255,255,255,0.85)', p: 3, minWidth: '110px' }}>
                  <Typography variant="h3" color="primary.dark" fontWeight="400">15+</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>Years Experience</Typography>
                </Box>
                <Box sx={{ textAlign: 'center', backgroundColor: 'rgba(255,255,255,0.85)', p: 3, minWidth: '110px' }}>
                  <Typography variant="h3" color="primary.dark" fontWeight="400">5k+</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>Happy Patients</Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;