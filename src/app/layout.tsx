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
    url: 'localhost:8080',
    siteName: 'Longlister',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
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
