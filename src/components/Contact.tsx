import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  TextField, 
  Button, 
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme
} from '@mui/material';
import Grid from './CustomGrid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const Contact: React.FC = () => {
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
            CONTACT US
          </Typography>
          <Typography 
            variant="h3" 
            component="h2" 
            fontWeight={700} 
            sx={{ mb: 2 }}
          >
            Get In Touch
          </Typography>
          <Typography 
            variant="body1" 
            color="text.secondary" 
            sx={{ maxWidth: '700px', mx: 'auto' }}
          >
            Have any questions or want to schedule an appointment? Reach out to our friendly team.
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
          {/* Contact Form */}
          <Paper sx={{ flex: 1, p: 4, borderRadius: 2 }} elevation={2}>
            <Typography variant="h5" component="h3" fontWeight={600} gutterBottom>
              Send Us a Message
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Fill out the form below and we'll get back to you as soon as possible.
            </Typography>
            
            <Box component="form" noValidate sx={{ mt: 3 }}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Full Name"
                    name="name"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Phone Number"
                    name="phone"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Email Address"
                    name="email"
                    type="email"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    select
                    required
                    fullWidth
                    label="Service Interested In"
                    name="service"
                    variant="outlined"
                    SelectProps={{
                      native: true,
                    }}
                  >
                    <option value="">Select a service</option>
                    <option value="routine">Routine Cleaning</option>
                    <option value="braces">Dental Braces</option>
                    <option value="cosmetic">Cosmetic Dentistry</option>
                    <option value="preventive">Preventive Care</option>
                    <option value="makeover">Smile Makeover</option>
                    <option value="pediatric">Pediatric Dentistry</option>
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    multiline
                    rows={4}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{ py: 1.5 }}
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Paper>

          {/* Contact Information */}
          <Paper 
            sx={{ 
              width: { xs: '100%', md: '400px' }, 
              p: 4, 
              borderRadius: 2,
              background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
              color: 'white',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }} 
            elevation={3}
          >
            <Box>
              <Typography variant="h5" component="h3" fontWeight={600} gutterBottom>
                Contact Information
              </Typography>
              <Typography variant="body2" paragraph sx={{ opacity: 0.9 }}>
                Reach out to us through any of these channels:
              </Typography>
              
              <List sx={{ mt: 3 }}>
                <ListItem sx={{ px: 0, py: 1.5 }}>
                  <ListItemIcon sx={{ color: 'white', minWidth: '40px' }}>
                    <LocationOnIcon />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Clinic Address" 
                    secondary="123 Dental Street, Suite 456, City, State 78901"
                    primaryTypographyProps={{ fontWeight: 600 }}
                    secondaryTypographyProps={{ color: 'white', sx: { opacity: 0.8 } }}
                  />
                </ListItem>
                <ListItem sx={{ px: 0, py: 1.5 }}>
                  <ListItemIcon sx={{ color: 'white', minWidth: '40px' }}>
                    <PhoneIcon />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Phone Number" 
                    secondary="(123) 456-7890"
                    primaryTypographyProps={{ fontWeight: 600 }}
                    secondaryTypographyProps={{ color: 'white', sx: { opacity: 0.8 } }}
                  />
                </ListItem>
                <ListItem sx={{ px: 0, py: 1.5 }}>
                  <ListItemIcon sx={{ color: 'white', minWidth: '40px' }}>
                    <EmailIcon />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Email Address" 
                    secondary="info@dentsmile.com"
                    primaryTypographyProps={{ fontWeight: 600 }}
                    secondaryTypographyProps={{ color: 'white', sx: { opacity: 0.8 } }}
                  />
                </ListItem>
                <ListItem sx={{ px: 0, py: 1.5 }}>
                  <ListItemIcon sx={{ color: 'white', minWidth: '40px' }}>
                    <AccessTimeIcon />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Opening Hours" 
                    secondary="Mon-Fri: 8am-6pm | Sat: 9am-2pm | Sun: Closed"
                    primaryTypographyProps={{ fontWeight: 600 }}
                    secondaryTypographyProps={{ color: 'white', sx: { opacity: 0.8 } }}
                  />
                </ListItem>
              </List>
            </Box>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact; 