import type { Metadata } from 'next';
import { poppins, inter } from '@/theme';
import './globals.css';
import ClientProviders from '../components/ClientProviders';
import Script from 'next/script';

const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

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
      {gtmId ? (
        <Script id="gtm-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('consent', 'default', {
              ad_personalization: 'denied',
              ad_storage: 'denied',
              ad_user_data: 'denied',
              analytics_storage: 'denied',
            });
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),
                dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gtmId}');
          `}
        </Script>
      ) : null}
      <body>
        {gtmId ? (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        ) : null}
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
