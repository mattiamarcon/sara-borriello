import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "@/components/ui/sonner"
import FloatingWhatsApp from "./components/floating-whatsapp";
import { Analytics } from "@vercel/analytics/next"

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
      <body
        className={`${merryweather.className} antialiased`}
      >
        <Navbar />
        {children}
        <Toaster position="top-right" richColors={true} />
        <FloatingWhatsApp />
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
