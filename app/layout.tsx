import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner"
import Navbar from "./components/Navbar";
import { createSupabaseServer } from "@/utils/supabase/server"


const merryweather=Merriweather({
  variable: "--font-merryweather",
  subsets: ["cyrillic"],
  weight: "300"
})

export const metadata: Metadata = {
  title: "Sara Borriello",
  description: "Sara Borriello trainer web site",
} 

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const supabase = await createSupabaseServer()

  const {data} = await supabase.auth.getUser();

  return (
    <html lang="en">
      <head>     
        <script defer src="https://cloud.umami.is/script.js" data-website-id={process.env.UMAMI_WEBSITE_ID} ></script>
      </head>
      <body
        className={`${merryweather.className} antialiased`}
      >
        <Navbar isLogged={!!data.user} />
        {children}
        <Toaster position="top-right" richColors={true} />
      </body>
    </html>
  );
}
