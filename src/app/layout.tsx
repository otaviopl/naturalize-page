import type { Metadata } from 'next';
import Script from 'next/script';
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
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-16970300534"
        strategy="afterInteractive"
      />
      <Script id="google-ads" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-16970300534');
        `}
      </Script>
      <body>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
