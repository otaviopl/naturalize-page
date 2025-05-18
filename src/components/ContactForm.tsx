"use client";

import { useFormStatus } from 'react-dom';
import { useActionState } from 'react';
import { Box, Button, Container, Grid, TextField, Typography, Alert } from '@mui/material';
import { sendLead, FormState } from '@/app/contact/actions';
import { useMemo } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import motion components
const MotionDiv = dynamic(
  () => import('framer-motion').then(mod => mod.motion.div),
  { ssr: false }
);

function SubmitButton() {
  const { pending } = useFormStatus();
  
  return (
    <Button
      type="submit"
      variant="contained"
      color="primary"
      size="large"
      disabled={pending}
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
      {pending ? 'Enviando...' : 'Enviar mensagem'}
    </Button>
  );
}

const initialState: FormState = {};

export default function ContactForm() {
  const [state, formAction] = useActionState(sendLead, initialState);
  
  const animation = useMemo(() => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  }), []);

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
        <MotionDiv
          initial={animation.initial}
          whileInView={animation.whileInView}
          viewport={animation.viewport}
          transition={animation.transition}
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
        </MotionDiv>

        <Box
          component="form"
          action={formAction}
          sx={{
            maxWidth: '800px',
            mx: 'auto',
            p: { xs: 3, md: 5 },
            borderRadius: 2,
            border: '1px solid rgba(209, 183, 143, 0.3)',
            backgroundColor: '#fff',
          }}
        >
          {state.message && (
            <Alert 
              severity={state.success ? "success" : "error"} 
              sx={{ mb: 3 }}
            >
              {state.message}
            </Alert>
          )}
          
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <MotionDiv
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
                  variant="outlined"
                  error={!!state.errors?.name}
                  helperText={state.errors?.name?.join(', ')}
                />
              </MotionDiv>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <MotionDiv
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
                  variant="outlined"
                  error={!!state.errors?.email}
                  helperText={state.errors?.email?.join(', ')}
                />
              </MotionDiv>
            </Grid>
            
            <Grid item xs={12}>
              <MotionDiv
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
                  variant="outlined"
                  error={!!state.errors?.phone}
                  helperText={state.errors?.phone?.join(', ')}
                />
              </MotionDiv>
            </Grid>
            
            <Grid item xs={12}>
              <MotionDiv
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
                  variant="outlined"
                  error={!!state.errors?.message}
                  helperText={state.errors?.message?.join(', ')}
                />
              </MotionDiv>
            </Grid>
            
            <Grid item xs={12}>
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <SubmitButton />
              </MotionDiv>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
} 