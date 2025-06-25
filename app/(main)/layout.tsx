
import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"
import { Toaster } from "@/components/ui/sonner"
import FloatingWhatsApp from "@/app/components/floating-whatsapp"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        {children}
        <FloatingWhatsApp />
        <Footer />
    </>
  );
}