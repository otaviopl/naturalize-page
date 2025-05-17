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
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer: React.FC = () => {
  const theme = useTheme();
  const year = new Date().getFullYear();

  return (
    <Box sx={{ bgcolor: theme.palette.background.default, color: theme.palette.text.primary, pt: 10, pb: 4, borderTop: `1px solid ${theme.palette.grey[200]}` }}>
      <Container maxWidth="xl">
        <Grid container spacing={6}>
          {/* Logo and description */}
          <Grid item xs={12} md={4}>
            <Typography 
              variant="h5" 
              sx={{ 
                fontWeight: 300, 
                mb: 3,
                letterSpacing: 1
              }}
            >
              DENT<Box component="span" sx={{ color: theme.palette.primary.main }}>SMILE</Box>
            </Typography>
            <Typography variant="body2" sx={{ mb: 3, color: theme.palette.text.secondary, maxWidth: '380px', lineHeight: 1.8 }}>
              Offering exceptional dental care focusing on patient comfort, 
              personalized treatment plans, and creating beautiful, long-lasting smiles.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
              <IconButton size="small" aria-label="facebook" sx={{ color: theme.palette.text.primary, border: `1px solid ${theme.palette.grey[300]}`, borderRadius: 0 }}>
                <FacebookOutlinedIcon fontSize="small" />
              </IconButton>
              <IconButton size="small" aria-label="twitter" sx={{ color: theme.palette.text.primary, border: `1px solid ${theme.palette.grey[300]}`, borderRadius: 0 }}>
                <TwitterIcon fontSize="small" />
              </IconButton>
              <IconButton size="small" aria-label="instagram" sx={{ color: theme.palette.text.primary, border: `1px solid ${theme.palette.grey[300]}`, borderRadius: 0 }}>
                <InstagramIcon fontSize="small" />
              </IconButton>
              <IconButton size="small" aria-label="linkedin" sx={{ color: theme.palette.text.primary, border: `1px solid ${theme.palette.grey[300]}`, borderRadius: 0 }}>
                <LinkedInIcon fontSize="small" />
              </IconButton>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 400, fontSize: '1.1rem' }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {['Home', 'About Us', 'Services', 'Doctors', 'Testimonials', 'Contact'].map((item) => (
                <Link 
                  key={item} 
                  href="#" 
                  underline="none" 
                  sx={{ 
                    color: theme.palette.text.secondary, 
                    fontSize: '0.95rem',
                    position: 'relative',
                    display: 'inline-block',
                    transition: 'all 0.3s',
                    '&:hover': { 
                      color: theme.palette.primary.main,
                      transform: 'translateX(4px)'
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
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 400, fontSize: '1.1rem' }}>
              Our Services
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {[
                'Preventive Care', 
                'Cosmetic Dentistry', 
                'Dental Alignment', 
                'Restorative Care', 
                'Hygiene Treatments', 
                'Pediatric Dentistry'
              ].map((item) => (
                <Link 
                  key={item} 
                  href="#" 
                  underline="none" 
                  sx={{ 
                    color: theme.palette.text.secondary, 
                    fontSize: '0.95rem',
                    position: 'relative',
                    display: 'inline-block',
                    transition: 'all 0.3s',
                    '&:hover': { 
                      color: theme.palette.primary.main,
                      transform: 'translateX(4px)'
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
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 400, fontSize: '1.1rem' }}>
              Contact Information
            </Typography>
            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" sx={{ mb: 0.5, fontWeight: 500 }}>Address:</Typography>
              <Typography variant="body2" sx={{ color: theme.palette.text.secondary, lineHeight: 1.7 }}>
                123 Dental Street, Suite 456, City, State 78901
              </Typography>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" sx={{ mb: 0.5, fontWeight: 500 }}>Phone:</Typography>
              <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                (123) 456-7890
              </Typography>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" sx={{ mb: 0.5, fontWeight: 500 }}>Email:</Typography>
              <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                info@dentsmile.com
              </Typography>
            </Box>
            <Box>
              <Typography variant="body2" sx={{ mb: 0.5, fontWeight: 500 }}>Hours:</Typography>
              <Typography variant="body2" sx={{ color: theme.palette.text.secondary, lineHeight: 1.7 }}>
                Mon-Fri: 8am-6pm | Sat: 9am-2pm | Sun: Closed
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: theme.palette.grey[200] }} />
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
          <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
            © {year} DentSmile. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 4 }}>
            <Link href="#" underline="none" sx={{ color: theme.palette.text.secondary, fontSize: '0.9rem', '&:hover': { color: theme.palette.primary.main } }}>
              Privacy Policy
            </Link>
            <Link href="#" underline="none" sx={{ color: theme.palette.text.secondary, fontSize: '0.9rem', '&:hover': { color: theme.palette.primary.main } }}>
              Terms of Service
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 