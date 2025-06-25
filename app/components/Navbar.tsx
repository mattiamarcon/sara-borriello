"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { createClient } from '@/utils/supabase/client'
import { useRouter } from "next/navigation"

export default function Navbar({isLogged}:{isLogged:boolean}) {
   const supabase= createClient();

  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const router = useRouter()

  const [logged,setLogged]=useState(isLogged)

  useEffect(()=>{
    setLogged(isLogged)
  },[isLogged])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & oltre i primi 100px
        setIsVisible(false)
      } else {
        // Scrolling up o nella parte superiore della pagina
        setIsVisible(true)
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  async function signOut(){
    const { error } = await supabase.auth.signOut();

    if(!error){
      setLogged(false);
    }
    
    router.push("/");
    router.refresh(); 
}

  const navLinks = [
    { href: "#chi-sono", label: "Chi sono" },
    { href: "#servizi", label: "Servizi" },
    { href: "#recensioni", label: "Recensioni" },
    { href: "#ems", label: "EMS" },
  ]

  const hideNavigation=[
    {label: "Dashboard", href:"/dashboard"},
  ]

  // Funzione per chiudere la sidebar
  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-black/60 backdrop-blur-md shadow-sm " : "bg-transparent",
        isVisible ? "translate-y-0" : "-translate-y-full",
      )}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between ">
        <Link href="/" className="flex items-center ">
          <Image src="/logo.svg" alt="Sara Personal Training" width={50} height={50} className="h-12 w-auto  " />
          <span className="ml-3 text-2xl font-semibold text-first hidden sm:inline-block">Sara Borriello Trainer</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-xl font-medium text-white">
              {link.label}
            </Link>
          ))}
          {logged && 
            <>
              {hideNavigation.map((link) => (
                <Link key={link.href} href={link.href} className="text-xl font-medium text-white">
                  {link.label}
                </Link>
              ))}
            </>
          }
          {isLogged ? <button className="text-lg font-normal text-white" onClick={()=>{signOut()}}>Log out</button> : <Link href={"/login"} className="text-lg font-normal text-white">Accedi</Link>}
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button onClick={() => setIsOpen(true)} className="md:hidden">
              <Menu color="white" size={30} />
              <span className="sr-only">Menu</span>
            </button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col h-full bg-white">
              <div className="flex justify-between items-center mb-8">
                <Link href="/" className="flex items-center m-2" onClick={handleLinkClick}>
                  <Image src="/logo.svg" alt="Sara Personal Training" width={50} height={50} className="" />
                </Link>
              </div>
              <nav className="flex flex-col space-y-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-base font-medium text-black ml-3"
                    onClick={handleLinkClick}
                  >
                    {link.label}
                  </Link>
                ))}
                {logged &&
                  <>
                    {hideNavigation.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-base font-medium text-black ml-3"
                        onClick={handleLinkClick}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </>
                }
                {isLogged ? <button className="text-lg ml-3  text-black w-fit h-fit" onClick={()=>{signOut(), setIsOpen(false)}}>Log out</button> : <Link href={"/login"} onClick={()=>setIsOpen(false)} className="text-lg  text-black ml-3">Accedi</Link>}
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
