import type { Metadata } from 'next';
import { poppins, inter } from '@/theme';
import './globals.css';
import ThemeRegistry from '../components/ThemeRegistry';

export const metadata: Metadata = {
  title: 'Clínica Naturalize - Saúde e Bem-estar',
  description: 'Viva sua beleza natural com mais confiança. Estética avançada, ortodontia moderna e implantes em São Carlos.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} ${inter.variable}`}>
      <body>
        <ThemeRegistry>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
} 