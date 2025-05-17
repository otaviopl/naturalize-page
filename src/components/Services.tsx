import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Card, 
  CardContent, 
  Button,
  useTheme,
  alpha,
  Divider
} from '@mui/material';
import Grid from './CustomGrid';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import ClearIcon from '@mui/icons-material/Clear';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import ChildCareIcon from '@mui/icons-material/ChildCare';

// Service data with icons
const services = [
  {
    id: 1,
    title: 'Preventive Care',
    description: 'Regular examinations and professional cleanings to maintain optimal oral health and prevent dental problems.',
    icon: <HealthAndSafetyIcon fontSize="medium" />,
  },
  {
    id: 2,
    title: 'Cosmetic Dentistry',
    description: 'Enhance your smile with teeth whitening, veneers, and other aesthetic procedures tailored to your needs.',
    icon: <FaceRetouchingNaturalIcon fontSize="medium" />,
  },
  {
    id: 3,
    title: 'Dental Alignment',
    description: 'Discreet orthodontic options including clear aligners to straighten teeth and improve your smile.',
    icon: <ClearIcon fontSize="medium" />,
  },
  {
    id: 4,
    title: 'Restorative Care',
    description: 'Comprehensive solutions for damaged teeth including crowns, bridges and dental implants.',
    icon: <AutoFixHighIcon fontSize="medium" />,
  },
  {
    id: 5,
    title: 'Hygiene Treatments',
    description: 'Deep cleaning procedures to remove plaque and tartar, helping prevent gum disease and decay.',
    icon: <CleaningServicesIcon fontSize="medium" />,
  },
  {
    id: 6,
    title: 'Pediatric Dentistry',
    description: 'Gentle dental care for children in a comfortable and supportive environment.',
    icon: <ChildCareIcon fontSize="medium" />,
  },
];

const Services: React.FC = () => {
  const theme = useTheme();

  return (
    <Box sx={{ py: 10, bgcolor: 'background.default' }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: 2 }}>
          <Typography 
            variant="h6" 
            component="p" 
            color="primary" 
            sx={{ mb: 2, letterSpacing: 3, textTransform: 'uppercase' }}
          >
            Our Expertise
          </Typography>
          <Typography 
            variant="h3" 
            component="h2" 
            fontWeight={300} 
            sx={{ mb: 3 }}
          >
            Comprehensive Dental Services
          </Typography>
          <Divider sx={{ width: '40px', borderColor: theme.palette.primary.main, borderWidth: 2, mx: 'auto', mb: 6 }}/>
        </Box>

        <Grid container spacing={4}>
          {services.map((service) => (
            <Grid item xs={12} sm={6} md={4} key={service.id}>
              <Card 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
                    '& .service-icon': {
                      color: theme.palette.primary.main,
                      backgroundColor: alpha(theme.palette.primary.main, 0.1),
                    },
                  }
                }}
              >
                <CardContent sx={{ p: 4, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Box 
                    className="service-icon"
                    sx={{ 
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 60,
                      height: 60,
                      color: theme.palette.text.primary,
                      backgroundColor: theme.palette.background.paper,
                      transition: 'all 0.3s ease',
                      mb: 3
                    }}
                  >
                    {service.icon}
                  </Box>
                  <Typography variant="h5" component="h3" fontWeight={400} sx={{ mb: 2 }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 3, flexGrow: 1 }}>
                    {service.description}
                  </Typography>
                  <Box
                    sx={{
                      mt: 'auto',
                      display: 'flex',
                      alignItems: 'center',
                      cursor: 'pointer',
                      color: theme.palette.text.secondary,
                      transition: 'color 0.3s ease',
                      '&:hover': {
                        color: theme.palette.primary.main,
                      }
                    }}
                  >
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        fontWeight: 500, 
                        mr: 1,
                        transition: 'color 0.3s ease',
                        textTransform: 'uppercase',
                        fontSize: '0.8rem',
                        letterSpacing: 1
                      }}
                    >
                      Learn More
                    </Typography>
                    <ArrowForwardIcon fontSize="small" />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <Button 
            variant="outlined" 
            color="primary" 
            size="large"
            endIcon={<ArrowForwardIcon />}
            sx={{
              px: 4,
              borderWidth: '1px'
            }}
          >
            View All Services
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Services; 