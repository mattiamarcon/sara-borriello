import Footer from "@/app/components/Footer"
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