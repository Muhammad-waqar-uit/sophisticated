import type { Metadata } from 'next'
import Script from 'next/script' 
import './globals.css'

export const metadata: Metadata = {
  title: 'Xten',
  description: 'Made With Love',
  generator: 'xtentechnologies.com',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {children}

        {/* ✅ Tawk.to script */}
        <Script
          strategy="afterInteractive"
          src="https://embed.tawk.to/6884bf12828524191a31a5f0/1j138koc8"
        />
      </body>
    </html>
  )
}
