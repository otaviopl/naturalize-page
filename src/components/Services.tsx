import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Card, 
  CardContent, 
  CardMedia, 
  Button,
  useTheme,
  alpha
} from '@mui/material';
import Grid from './CustomGrid';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import MasksIcon from '@mui/icons-material/Masks';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import ChildCareIcon from '@mui/icons-material/ChildCare';

// Service data with icons
const services = [
  {
    id: 1,
    title: 'Routine Cleanings',
    description: 'Regular professional cleanings to maintain optimal oral health and prevent dental problems.',
    icon: <CleaningServicesIcon fontSize="large" />,
  },
  {
    id: 2,
    title: 'Dental Braces',
    description: 'Traditional and invisible braces options to straighten teeth and improve your smile.',
    icon: <MasksIcon fontSize="large" />,
  },
  {
    id: 3,
    title: 'Cosmetic Dentistry',
    description: 'Enhance your smile with teeth whitening, veneers, and other aesthetic procedures.',
    icon: <AutoFixHighIcon fontSize="large" />,
  },
  {
    id: 4,
    title: 'Preventive Care',
    description: 'Comprehensive care to prevent dental issues before they become serious problems.',
    icon: <HealthAndSafetyIcon fontSize="large" />,
  },
  {
    id: 5,
    title: 'Smile Makeovers',
    description: 'Complete transformation of your smile with a customized treatment plan.',
    icon: <FaceRetouchingNaturalIcon fontSize="large" />,
  },
  {
    id: 6,
    title: 'Pediatric Dentistry',
    description: 'Gentle dental care for children in a comfortable and friendly environment.',
    icon: <ChildCareIcon fontSize="large" />,
  },
];

const Services: React.FC = () => {
  const theme = useTheme();

  return (
    <Box sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography 
            variant="h6" 
            component="p" 
            color="primary" 
            fontWeight={600} 
            sx={{ mb: 1 }}
          >
            OUR SERVICES
          </Typography>
          <Typography 
            variant="h3" 
            component="h2" 
            fontWeight={700} 
            sx={{ mb: 2 }}
          >
            What We Offer
          </Typography>
          <Typography 
            variant="body1" 
            color="text.secondary" 
            sx={{ maxWidth: '700px', mx: 'auto' }}
          >
            Our clinic provides a comprehensive range of dental services to keep your smile healthy and beautiful.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {services.map((service) => (
            <Grid item xs={12} sm={6} md={4} key={service.id}>
              <Card 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 20px rgba(0,0,0,0.1)',
                  }
                }}
              >
                <Box 
                  sx={{ 
                    p: 3, 
                    display: 'flex', 
                    alignItems: 'center',
                    color: theme.palette.primary.main,
                    bgcolor: alpha(theme.palette.primary.main, 0.05),
                  }}
                >
                  {service.icon}
                </Box>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h3" fontWeight={600}>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button 
            variant="contained" 
            color="primary" 
            size="large"
          >
            View All Services
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Services; 