import type { Metadata } from 'next';
import { poppins, inter } from '@/theme';
import './globals.css';
import ClientProviders from '../components/ClientProviders';

export const metadata: Metadata = {
  title: 'Clínica Naturalize - Saúde e Bem-estar',
  description:
    'Viva sua beleza natural com mais confiança. Estética avançada, ortodontia moderna e implantes em São Carlos.',
  icons: {
    icon: [
      { url: '/logo/naturalize-logo12.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/logo/naturalize-logo12.ico', sizes: '192x192', type: 'image/x-icon' },
    ],
    shortcut: '/logo/naturalize-logo12.ico',
    apple: '/logo/naturalize-logo12.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} ${inter.variable}`}>
      <body>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
