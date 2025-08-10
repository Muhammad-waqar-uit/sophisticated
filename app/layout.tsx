import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  metadataBase: new URL("https://xtentechnologies.com"),
  title: {
    default: "XTEN Technologies",
    template: "%s | XTEN Technologies",
  },
  description:
    "XTEN Technologies – Delivering cutting-edge software, web, and digital solutions to empower your business in the modern world.",
  keywords: [
    "XTEN Technologies",
    "software development",
    "web solutions",
    "IT services",
    "technology",
    "digital transformation",
  ],
  openGraph: {
    title: "XTEN Technologies",
    description:
      "Delivering cutting-edge software, web, and digital solutions to empower your business in the modern world.",
    url: "https://xtentechnologies.com",
    siteName: "XTEN Technologies",
    images: [
      {
        url: "/og-image.png", // Add this image to your public/ folder
        width: 1200,
        height: 630,
        alt: "XTEN Technologies",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@xtentech", // Replace with actual handle
    creator: "@xtentech", // Replace with actual handle
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "https://xtentechnologies.com",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
  colorScheme: "dark light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
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
  );
}
