'use server';

import { z } from 'zod';

// Schema for form validation
const FormSchema = z.object({
  name: z.string().min(3, { message: 'Nome deve ter pelo menos 3 caracteres' }),
  email: z.string().email({ message: 'E-mail inválido' }),
  phone: z.string().min(10, { message: 'Telefone deve ter no mínimo 10 dígitos' }),
  message: z.string().optional(),
});

export type FormState = {
  errors?: {
    name?: string[];
    email?: string[];
    phone?: string[];
    message?: string[];
  };
  message?: string;
  success?: boolean;
};

export async function sendLead(prevState: FormState, formData: FormData): Promise<FormState> {
  // Validate the form data
  const validatedFields = FormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    message: formData.get('message'),
  });

  // If validation fails, return errors
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Falha na validação dos campos. Por favor, corrija os erros.',
      success: false,
    };
  }

  // Here would be the code to save the lead to a database or send an email
  // For this example, we're just logging the data and returning success
  console.log('Lead received:', validatedFields.data);

  try {
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Return success
    return {
      success: true,
      message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
    };
  } catch (error) {
    console.error('Error processing lead:', error);
    return { 
      success: false,
      message: 'Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.',
    };
  }
} 