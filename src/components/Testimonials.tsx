import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Card, 
  CardContent, 
  Avatar, 
  Rating,
  useTheme,
  Divider
} from '@mui/material';
import Grid from './CustomGrid';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Patient for 3 years',
    rating: 5,
    quote: "I've been coming to this clinic for 3 years, and the experience has always been exceptional. Dr. Miller is incredibly skilled, attentive, and gentle. My smile has never looked better.",
    initials: "SJ"
  },
  {
    id: 2,
    name: 'Michael Thompson',
    role: 'New Patient',
    rating: 5,
    quote: "As someone with dental anxiety, I was nervous about my first appointment. The team made me feel comfortable and explained every procedure clearly. The modern facilities and painless care were impressive.",
    initials: "MT"
  },
  {
    id: 3,
    name: 'Jennifer Williams',
    role: 'Patient for 5+ years',
    rating: 5,
    quote: "My children and I have been patients for years. Their pediatric services are exceptional, and the staff has a wonderful way with kids. My children actually look forward to their dental visits now.",
    initials: "JW"
  },
];

const Testimonials: React.FC = () => {
  const theme = useTheme();

  return (
    <Box sx={{ py: 10, bgcolor: theme.palette.grey[50] }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: 2 }}>
          <Typography 
            variant="h6" 
            component="p" 
            color="primary" 
            sx={{ mb: 2, letterSpacing: 3, textTransform: 'uppercase' }}
          >
            Client Stories
          </Typography>
          <Typography 
            variant="h3" 
            component="h2" 
            fontWeight={300} 
            sx={{ mb: 3 }}
          >
            What Our Patients Say
          </Typography>
          <Divider sx={{ width: '40px', borderColor: theme.palette.primary.main, borderWidth: 2, mx: 'auto', mb: 6 }}/>
        </Box>

        <Grid container spacing={4}>
          {testimonials.map((testimonial) => (
            <Grid item xs={12} md={4} key={testimonial.id}>
              <Card 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'visible',
                  backgroundColor: 'background.paper',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  }
                }}
              >
                <Box 
                  sx={{ 
                    width: 60, 
                    height: 60, 
                    position: 'absolute', 
                    top: -20, 
                    left: 30, 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: theme.palette.background.paper,
                    border: `1px solid ${theme.palette.grey[200]}`,
                    color: theme.palette.primary.main
                  }}
                >
                  <FormatQuoteIcon />
                </Box>
                
                <CardContent sx={{ pt: 5, px: 4, pb: 4, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ mb: 3, mt: 2 }}>
                    <Rating value={testimonial.rating} readOnly precision={0.5} sx={{ color: theme.palette.primary.main }} />
                  </Box>
                  
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      mb: 4, 
                      fontStyle: 'italic', 
                      lineHeight: 1.8,
                      color: theme.palette.text.secondary,
                      flexGrow: 1
                    }}
                  >
                    "{testimonial.quote}"
                  </Typography>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', mt: 'auto' }}>
                    <Avatar 
                      sx={{ 
                        width: 50, 
                        height: 50,
                        border: `1px solid ${theme.palette.grey[200]}`,
                        bgcolor: theme.palette.background.default,
                        color: theme.palette.text.primary,
                        mr: 2,
                        fontWeight: 300
                      }}
                    >
                      {testimonial.initials}
                    </Avatar>
                    <Box>
                      <Typography variant="subtitle1" component="p" fontWeight={500}>
                        {testimonial.name}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {testimonial.role}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials; 