"use client";

import { useState } from 'react';
import { Box, Button, Container, Grid, TextField, Typography, Alert, Snackbar } from '@mui/material';
import { motion } from 'framer-motion';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);
    
    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
      } else {
        setSubmitError(true);
      }
    } catch (error) {
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSubmitSuccess(false);
    setSubmitError(false);
  };

  return (
    <Box
      component="section"
      id="contato"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'rgba(15, 26, 51, 0.03)',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h2"
            align="center"
            className="gold-gradient-text"
            sx={{
              fontSize: { xs: '2rem', md: '3rem' },
              fontWeight: 700,
              mb: 2,
            }}
          >
            Entre em Contato
          </Typography>
          
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            sx={{ mb: { xs: 4, md: 6 }, maxWidth: '800px', mx: 'auto' }}
          >
            Agende sua avaliação e descubra como podemos ajudar a transformar seu sorriso.
          </Typography>
        </motion.div>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            maxWidth: '800px',
            mx: 'auto',
            p: { xs: 3, md: 5 },
            borderRadius: 2,
            border: '1px solid rgba(209, 183, 143, 0.3)',
            backgroundColor: '#fff',
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <TextField
                  required
                  fullWidth
                  id="name"
                  name="name"
                  label="Nome completo"
                  value={formData.name}
                  onChange={handleChange}
                  variant="outlined"
                />
              </motion.div>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <TextField
                  required
                  fullWidth
                  id="email"
                  name="email"
                  label="E-mail"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  variant="outlined"
                />
              </motion.div>
            </Grid>
            
            <Grid item xs={12}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <TextField
                  required
                  fullWidth
                  id="phone"
                  name="phone"
                  label="Telefone / WhatsApp"
                  value={formData.phone}
                  onChange={handleChange}
                  variant="outlined"
                />
              </motion.div>
            </Grid>
            
            <Grid item xs={12}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <TextField
                  fullWidth
                  id="message"
                  name="message"
                  label="Mensagem"
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  variant="outlined"
                />
              </motion.div>
            </Grid>
            
            <Grid item xs={12}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  disabled={isSubmitting}
                  fullWidth
                  sx={{
                    py: 1.5,
                    fontWeight: 600,
                    boxShadow: '0 4px 14px rgba(209, 183, 143, 0.4)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-3px)',
                      boxShadow: '0 8px 25px rgba(209, 183, 143, 0.5)',
                    },
                  }}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
                </Button>
              </motion.div>
            </Grid>
          </Grid>
        </Box>
      </Container>

      <Snackbar open={submitSuccess} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          Mensagem enviada com sucesso! Entraremos em contato em breve.
        </Alert>
      </Snackbar>

      <Snackbar open={submitError} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="error" sx={{ width: '100%' }}>
          Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.
        </Alert>
      </Snackbar>
    </Box>
  );
} 