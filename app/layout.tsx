import type { Metadata } from 'next'
import Script from 'next/script'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'
import Footer from "@/components/Footer"
import Navigation from "@/components/Navigation"


export const metadata: Metadata = {
  title: 'XTEN',
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
                <Navigation />
        
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
          <Script
            strategy="afterInteractive"
            src="https://embed.tawk.to/6884bf12828524191a31a5f0/1j138koc8"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
            integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
          />
        </ThemeProvider>
        <Footer />

      </body>
    </html>
  )
}