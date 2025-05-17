import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  useTheme,
  useMediaQuery,
  Paper
} from '@mui/material';
import Grid from './CustomGrid';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import InfoIcon from '@mui/icons-material/Info';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

const Hero: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        pt: { xs: 12, md: 16 },
        pb: { xs: 8, md: 12 },
        background: `linear-gradient(to right, ${theme.palette.background.default} 0%, ${theme.palette.background.default} 60%, ${theme.palette.primary.light}22 100%)`,
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: { xs: 'center', md: 'left' }, mb: { xs: 4, md: 0 } }}>
              <Typography 
                component="h1" 
                variant="h3" 
                sx={{ 
                  fontWeight: 700, 
                  mb: 2,
                  fontSize: { xs: '2rem', md: '3rem' }
                }}
              >
                Your Best Smile Starts <span style={{ color: theme.palette.primary.main }}>Here</span>
              </Typography>
              
              <Typography 
                variant="h5" 
                color="text.secondary" 
                sx={{ 
                  mb: 4,
                  fontWeight: 400,
                  lineHeight: 1.5,
                  fontSize: { xs: '1rem', md: '1.25rem' }
                }}
              >
                We provide comprehensive dental care with the latest technology and a gentle touch. 
                From routine cleanings to advanced cosmetic procedures, we're here to give you a healthy, beautiful smile.
              </Typography>
              
              <Box sx={{ display: 'flex', gap: 2, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                <Button 
                  variant="contained" 
                  color="primary" 
                  size="large"
                  startIcon={<CalendarMonthIcon />}
                >
                  Book Appointment
                </Button>
                <Button 
                  variant="outlined" 
                  color="primary" 
                  size="large"
                  startIcon={<InfoIcon />}
                >
                  Our Services
                </Button>
              </Box>
              
              <Box 
                sx={{ 
                  display: 'flex', 
                  mt: 6, 
                  gap: 4, 
                  justifyContent: { xs: 'center', md: 'flex-start' },
                  flexWrap: 'wrap'
                }}
              >
                <Box sx={{ textAlign: 'center', minWidth: '100px' }}>
                  <Typography variant="h4" color="primary" fontWeight="bold">15+</Typography>
                  <Typography variant="body2" color="text.secondary">Years Experience</Typography>
                </Box>
                <Box sx={{ textAlign: 'center', minWidth: '100px' }}>
                  <Typography variant="h4" color="primary" fontWeight="bold">5k+</Typography>
                  <Typography variant="body2" color="text.secondary">Happy Patients</Typography>
                </Box>
                <Box sx={{ textAlign: 'center', minWidth: '100px' }}>
                  <Typography variant="h4" color="primary" fontWeight="bold">15+</Typography>
                  <Typography variant="body2" color="text.secondary">Dental Procedures</Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Paper
              elevation={6}
              sx={{
                height: { xs: '300px', md: '500px' },
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: `linear-gradient(135deg, ${theme.palette.primary.light}22 0%, ${theme.palette.primary.light}44 100%)`,
                overflow: 'hidden',
                position: 'relative'
              }}
            >
              <Box sx={{ 
                position: 'absolute',
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: 0.15
              }}>
                <LocalHospitalIcon sx={{ fontSize: 200, color: theme.palette.primary.main }} />
              </Box>
              <Typography 
                variant="h3" 
                sx={{ 
                  fontWeight: 700, 
                  color: theme.palette.primary.dark,
                  position: 'relative',
                  zIndex: 1,
                  px: 3,
                  textAlign: 'center'
                }}
              >
                Professional Dental Care
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;