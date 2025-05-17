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
  useTheme,
  Divider,
  InputAdornment
} from '@mui/material';
import Grid from './CustomGrid';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Contact: React.FC = () => {
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
            Reach Out
          </Typography>
          <Typography 
            variant="h3" 
            component="h2" 
            fontWeight={300} 
            sx={{ mb: 3 }}
          >
            Contact Us
          </Typography>
          <Divider sx={{ width: '40px', borderColor: theme.palette.primary.main, borderWidth: 2, mx: 'auto', mb: 6 }}/>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
          {/* Contact Form */}
          <Paper sx={{ flex: 1, p: 5, border: `1px solid ${theme.palette.grey[200]}` }} elevation={0}>
            <Typography variant="h5" component="h3" fontWeight={400} sx={{ mb: 3 }}>
              Get In Touch
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Have a question or ready to schedule your appointment? Send us a message, and our team will get back to you promptly.
            </Typography>
            
            <Box component="form" noValidate sx={{ mt: 4 }}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Full Name"
                    name="name"
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PersonOutlineOutlinedIcon fontSize="small" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Phone Number"
                    name="phone"
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PhoneIphoneOutlinedIcon fontSize="small" />
                        </InputAdornment>
                      ),
                    }}
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
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AlternateEmailIcon fontSize="small" />
                        </InputAdornment>
                      ),
                    }}
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
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <EventNoteOutlinedIcon fontSize="small" />
                        </InputAdornment>
                      ),
                    }}
                  >
                    <option value="">Select a service</option>
                    <option value="preventive">Preventive Care</option>
                    <option value="cosmetic">Cosmetic Dentistry</option>
                    <option value="alignment">Dental Alignment</option>
                    <option value="restorative">Restorative Care</option>
                    <option value="hygiene">Hygiene Treatments</option>
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
                    endIcon={<ArrowForwardIcon />}
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
              p: 5,
              bgcolor: theme.palette.background.default,
              border: `1px solid ${theme.palette.grey[200]}`,
              color: theme.palette.text.primary,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }} 
            elevation={0}
          >
            <Box>
              <Typography variant="h5" component="h3" fontWeight={400} sx={{ mb: 3 }}>
                Contact Information
              </Typography>
              <Typography variant="body2" paragraph sx={{ color: theme.palette.text.secondary, mb: 4 }}>
                You can reach us through any of these channels or visit our office during business hours.
              </Typography>
              
              <List sx={{ mt: 3 }}>
                <ListItem sx={{ px: 0, py: 2 }}>
                  <ListItemIcon sx={{ color: theme.palette.primary.main, minWidth: '40px' }}>
                    <LocationOnOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Address" 
                    secondary="123 Dental Street, Suite 456, City, State 78901"
                    primaryTypographyProps={{ fontWeight: 500, fontSize: '0.9rem' }}
                    secondaryTypographyProps={{ color: theme.palette.text.secondary, sx: { mt: 0.5 } }}
                  />
                </ListItem>
                <ListItem sx={{ px: 0, py: 2 }}>
                  <ListItemIcon sx={{ color: theme.palette.primary.main, minWidth: '40px' }}>
                    <PhoneOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Phone" 
                    secondary="(123) 456-7890"
                    primaryTypographyProps={{ fontWeight: 500, fontSize: '0.9rem' }}
                    secondaryTypographyProps={{ color: theme.palette.text.secondary, sx: { mt: 0.5 } }}
                  />
                </ListItem>
                <ListItem sx={{ px: 0, py: 2 }}>
                  <ListItemIcon sx={{ color: theme.palette.primary.main, minWidth: '40px' }}>
                    <EmailOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Email" 
                    secondary="info@dentsmile.com"
                    primaryTypographyProps={{ fontWeight: 500, fontSize: '0.9rem' }}
                    secondaryTypographyProps={{ color: theme.palette.text.secondary, sx: { mt: 0.5 } }}
                  />
                </ListItem>
                <ListItem sx={{ px: 0, py: 2 }}>
                  <ListItemIcon sx={{ color: theme.palette.primary.main, minWidth: '40px' }}>
                    <AccessTimeOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Hours" 
                    secondary="Mon-Fri: 8am-6pm | Sat: 9am-2pm | Sun: Closed"
                    primaryTypographyProps={{ fontWeight: 500, fontSize: '0.9rem' }}
                    secondaryTypographyProps={{ color: theme.palette.text.secondary, sx: { mt: 0.5 } }}
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