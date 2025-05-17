import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Link,
  IconButton,
  Divider,
  useTheme
} from '@mui/material';
import Grid from './CustomGrid';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer: React.FC = () => {
  const theme = useTheme();
  const year = new Date().getFullYear();

  return (
    <Box sx={{ bgcolor: '#1A1A1A', color: 'white', pt: 6, pb: 3 }}>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {/* Logo and description */}
          <Grid item xs={12} md={4}>
            <Typography 
              variant="h5" 
              sx={{ 
                fontWeight: 700, 
                mb: 2,
                color: theme.palette.primary.main
              }}
            >
              DENT<span style={{ color: 'white' }}>SMILE</span>
            </Typography>
            <Typography variant="body2" sx={{ mb: 3, opacity: 0.7, maxWidth: '300px' }}>
              Providing exceptional dental care with a focus on comfort, 
              quality, and creating beautiful smiles that last a lifetime.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
              <IconButton size="small" aria-label="facebook" sx={{ color: theme.palette.primary.main }}>
                <FacebookIcon />
              </IconButton>
              <IconButton size="small" aria-label="twitter" sx={{ color: theme.palette.primary.main }}>
                <TwitterIcon />
              </IconButton>
              <IconButton size="small" aria-label="instagram" sx={{ color: theme.palette.primary.main }}>
                <InstagramIcon />
              </IconButton>
              <IconButton size="small" aria-label="linkedin" sx={{ color: theme.palette.primary.main }}>
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {['Home', 'About Us', 'Services', 'Doctors', 'Testimonials', 'Contact'].map((item) => (
                <Link 
                  key={item} 
                  href="#" 
                  underline="hover" 
                  sx={{ 
                    color: 'white', 
                    opacity: 0.7, 
                    transition: 'all 0.3s',
                    '&:hover': { 
                      opacity: 1, 
                      color: theme.palette.primary.main 
                    }
                  }}
                >
                  {item}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Services */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Our Services
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {[
                'Routine Cleanings', 
                'Dental Braces', 
                'Cosmetic Dentistry', 
                'Preventive Care', 
                'Smile Makeovers', 
                'Pediatric Dentistry'
              ].map((item) => (
                <Link 
                  key={item} 
                  href="#" 
                  underline="hover" 
                  sx={{ 
                    color: 'white', 
                    opacity: 0.7, 
                    transition: 'all 0.3s',
                    '&:hover': { 
                      opacity: 1, 
                      color: theme.palette.primary.main 
                    }
                  }}
                >
                  {item}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Contact Information
            </Typography>
            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" sx={{ mb: 0.5, fontWeight: 600 }}>Address:</Typography>
              <Typography variant="body2" sx={{ opacity: 0.7 }}>
                123 Dental Street, Suite 456, City, State 78901
              </Typography>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" sx={{ mb: 0.5, fontWeight: 600 }}>Phone:</Typography>
              <Typography variant="body2" sx={{ opacity: 0.7 }}>
                (123) 456-7890
              </Typography>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" sx={{ mb: 0.5, fontWeight: 600 }}>Email:</Typography>
              <Typography variant="body2" sx={{ opacity: 0.7 }}>
                info@dentsmile.com
              </Typography>
            </Box>
            <Box>
              <Typography variant="body2" sx={{ mb: 0.5, fontWeight: 600 }}>Hours:</Typography>
              <Typography variant="body2" sx={{ opacity: 0.7 }}>
                Mon-Fri: 8am-6pm | Sat: 9am-2pm | Sun: Closed
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255, 255, 255, 0.1)' }} />
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            © {year} DentSmile. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Link href="#" underline="hover" sx={{ color: 'white', opacity: 0.7, '&:hover': { opacity: 1 } }}>
              <Typography variant="body2">Privacy Policy</Typography>
            </Link>
            <Link href="#" underline="hover" sx={{ color: 'white', opacity: 0.7, '&:hover': { opacity: 1 } }}>
              <Typography variant="body2">Terms of Service</Typography>
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 