import type { Metadata } from 'next';
import { Inter, IBM_Plex_Mono } from 'next/font/google';
import './globals.css'; // your global styles

import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ThemeProvider } from './components/theme-provider';

// 1) Import the WhatsAppChatButton component
import WhatsAppChatButton from './components/WhatsAppChatButton';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

export const metadata: Metadata = {
  title: 'Deeds Limpeza',
  description: 'Professional cleaning and hygiene solutions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      {/* Make sure we have a proper meta viewport on mobile: */}
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </head>
      <body
        // Add overflow-x-hidden to body to help prevent horizontal scroll:
        className={`
          ${inter.variable}
          ${ibmPlexMono.variable}
          font-mono
          antialiased
          overflow-x-hidden
        `}
        suppressHydrationWarning
      >
        {/* 1) Wrap everything in the ThemeProvider for dark mode */}
        <ThemeProvider
          attribute='class'
          defaultTheme='light' // Set default theme to light mode
          enableSystem
          disableTransitionOnChange
        >
          {/* 2) Our top bar (disappears on scroll down, reappears on scroll up) */}
          <TopBar />

          {/* 3) Sticky navbar beneath the top bar */}
          <Navbar />

          {/* 4) Page content */}
          <main>{children}</main>

          {/* 5) Footer always at the bottom */}
          <Footer />

          {/* 6) Floating WhatsApp chat button (bottom-right corner) */}
          <WhatsAppChatButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
