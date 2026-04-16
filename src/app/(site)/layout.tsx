import '@/styles/animate.css';
import '@/styles/prism-vsc-dark-plus.css';
import '@/styles/star.css';
import '@/styles/tailwind.css';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { FallingPattern } from '@/components/Common/FallingPattern';
import ScrollToTop from '@/components/ScrollToTop';
import { Plus_Jakarta_Sans } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import AuthProvider from '../context/AuthContext';
import ToasterContext from '../context/ToastContext';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
});

const useDarkBackgroundTheme = true;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={plusJakarta.className}>
      <body className='relative min-h-screen'>
        <div className='isolate relative'>
          <div className='pointer-events-none absolute inset-0 z-0'>
            <FallingPattern
              className='h-full min-h-screen w-full p-0'
              color={
                useDarkBackgroundTheme
                  ? 'rgba(167, 139, 250, 0.45)'
                  : 'rgba(134, 70, 244, 0.5)'
              }
              backgroundColor={
                useDarkBackgroundTheme ? '#020617' : 'transparent'
              }
              blurIntensity={useDarkBackgroundTheme ? '0.25em' : '0.35em'}
              density={useDarkBackgroundTheme ? 0.9 : 0.95}
            />
          </div>

          <div className='relative z-10'>
          <NextTopLoader
            color='#8646F4'
            crawlSpeed={300}
            showSpinner={false}
            shadow='none'
          />

          <AuthProvider>
            <Header />
            {children}
            <Footer />

            <ToasterContext />
          </AuthProvider>
          </div>
        </div>

        <ScrollToTop />
      </body>
    </html>
  );
}
