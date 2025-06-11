"use client"
import { MessageCircle, Clock, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function WhatsAppContactSection() {

  // Numero WhatsApp (sostituisci con il numero reale)
  const whatsappNumber = "+393409539298" // Formato: prefisso paese + numero senza +

 

  const openWhatsApp = (message: string) => {
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
  }

  const openWhatsAppDirect = () => {
    const defaultMessage = "Ciao Sara! Vorrei avere informazioni sui vostri servizi di personal training."
    openWhatsApp(defaultMessage)
  }

  return (
    <section
      id="contatti"
      className="py-10 bg-gradient-to-br from-green-50 to-white "
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">Contattami su WhatsApp</h2>
          <p className="text-lg text-gray-600  max-w-2xl mx-auto mb-8">
            Per una comunicazione rapida e diretta, preferisco WhatsApp. Riceverai risposta in tempi brevissimi!
          </p>

          {/* Pulsante WhatsApp principale */}
          <Button
            onClick={openWhatsAppDirect}
            className="bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200 cursor-pointer"
            size="lg"
          >
            <MessageCircle className="mr-3 h-6 w-6" />
            Scrivimi su WhatsApp
          </Button>
        </div>

        {/* Vantaggi di WhatsApp */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="text-center p-6">
            <div className="bg-green-100  rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-green-600 " />
            </div>
            <h3 className="font-semibold text-lg mb-2">Risposta Rapida</h3>
          </div>
          <div className="text-center p-6">
            <div className="bg-green-100  rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="h-8 w-8 text-green-600 " />
            </div>
            <h3 className="font-semibold text-lg mb-2">Comunicazione Diretta</h3>
          </div>
          <div className="text-center p-6">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-green-600 " />
            </div>
            <h3 className="font-semibold text-lg mb-2">Facile e Veloce</h3>
          </div>
        </div>

      </div>
    </section>
  )
}
