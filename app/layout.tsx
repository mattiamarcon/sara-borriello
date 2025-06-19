import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "@/components/ui/sonner"
import FloatingWhatsApp from "./components/floating-whatsapp";
import { GoogleAnalytics } from '@next/third-parties/google'

const merryweather=Merriweather({
  variable: "--font-merryweather",
  subsets: ["cyrillic"],
  weight: "300"
})

export const metadata: Metadata = {
  title: "Sara Borriello",
  description: "Sara Borriello trainer web site",
} 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>     
        <script defer src="https://cloud.umami.is/script.js" data-website-id="5f8d1241-313b-45f0-b625-5107de417c2f"></script>
      </head>
      <body
        className={`${merryweather.className} antialiased`}
      >
        <Navbar />
        {children}
        <Toaster position="top-right" richColors={true} />
        <FloatingWhatsApp />
        <Footer />
        <GoogleAnalytics gaId="G-7ES4TK6D3T" />
      </body>
    </html>
  );
}
