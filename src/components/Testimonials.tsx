import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Card, 
  CardContent, 
  Avatar, 
  Rating,
  useTheme
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
    quote: "I've been coming to this clinic for 3 years now, and I've always had a great experience. The staff is friendly, and Dr. Miller is incredibly skilled and gentle. My smile has never looked better!",
  },
  {
    id: 2,
    name: 'Michael Thompson',
    role: 'New Patient',
    rating: 5,
    quote: "As someone with dental anxiety, I was nervous about my first visit. The team here made me feel comfortable and explained everything clearly. The modern facilities and painless procedures were impressive!",
  },
  {
    id: 3,
    name: 'Jennifer Williams',
    role: 'Patient for 5+ years',
    rating: 5,
    quote: "My children and I have been patients for years. The care we receive is exceptional, and the pediatric dentistry services are wonderful. The kids actually look forward to their dental visits now!",
  },
];

const Testimonials: React.FC = () => {
  const theme = useTheme();

  return (
    <Box sx={{ py: 8, bgcolor: theme.palette.grey[50] }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography 
            variant="h6" 
            component="p" 
            color="primary" 
            fontWeight={600} 
            sx={{ mb: 1 }}
          >
            TESTIMONIALS
          </Typography>
          <Typography 
            variant="h3" 
            component="h2" 
            fontWeight={700} 
            sx={{ mb: 2 }}
          >
            What Our Patients Say
          </Typography>
          <Typography 
            variant="body1" 
            color="text.secondary" 
            sx={{ maxWidth: '700px', mx: 'auto' }}
          >
            Don't just take our word for it. Hear what our patients have to say about their experiences.
          </Typography>
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
                  p: 2,
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '4px',
                    height: '40%',
                    backgroundColor: theme.palette.primary.main,
                    borderTopLeftRadius: theme.shape.borderRadius,
                  }
                }}
                elevation={2}
              >
                <Box sx={{ position: 'absolute', top: 20, right: 20, color: theme.palette.primary.light, opacity: 0.3 }}>
                  <FormatQuoteIcon sx={{ fontSize: 60 }} />
                </Box>
                
                <CardContent sx={{ flexGrow: 1, position: 'relative', zIndex: 1 }}>
                  <Rating value={testimonial.rating} readOnly precision={0.5} sx={{ mb: 2 }} />
                  
                  <Typography variant="body1" paragraph sx={{ fontStyle: 'italic', mb: 3 }}>
                    "{testimonial.quote}"
                  </Typography>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar 
                      sx={{ 
                        width: 56, 
                        height: 56,
                        bgcolor: theme.palette.primary.main,
                        border: `2px solid ${theme.palette.primary.main}`,
                        mr: 2
                      }}
                    >
                      {testimonial.name.charAt(0)}
                    </Avatar>
                    <Box>
                      <Typography variant="h6" component="p" fontWeight={600}>
                        {testimonial.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
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