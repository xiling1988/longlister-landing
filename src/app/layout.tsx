import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'
import { googleTagManagerUrl } from './constants'

export const metadata: Metadata = {
  title: 'Longlister',
  description: 'The Recruitment Revolution',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Longlister',
    description: 'The Recruitment Revolution',
    url: 'https://longlister.com',
    siteName: 'Longlister',
    images: [
      {
        url: 'https://longlister.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Longlister logo with tagline "The Recruitment Revolution"',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Longlister',
    description: 'The Recruitment Revolution',
    images: ['https://longlister.com/og-image.png'],
  },
  themeColor: '#fe373d',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <head>
        {/* Google Analytics */}
        <Script strategy='afterInteractive' src={googleTagManagerUrl} />
        <Script
          id='ga-init'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-YB8L9N217V');
            `,
          }}
        />
      </head>
      <body className=''>{children}</body>
    </html>
  )
}
