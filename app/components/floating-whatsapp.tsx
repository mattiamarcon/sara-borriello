"use client"

import { useState, useEffect } from "react"
import { MessageCircleMore, X,  } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  // Numero WhatsApp (sostituisci con il numero reale)
  const whatsappNumber = "3409539298"

  useEffect(() => {
    // Mostra il pulsante dopo 3 secondi
    const timer = setTimeout(() => {
      setIsVisible(true)
      // Mostra il tooltip per 5 secondi
      setTimeout(() => {
        setShowTooltip(true)
        setTimeout(() => setShowTooltip(false), 5000)
      }, 1000)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const openWhatsApp = () => {
    const message = "Ciao Sara! Vorrei avere informazioni sui vostri servizi di personal training."
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 cursor-pointer z-50">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: 20 }}
            className="absolute bottom-16 right-0 bg-white rounded-lg shadow-lg p-5 mb-2 max-w-xs "
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-md font-semibold text-gray-900 ">Hai domande?</p>
                <p className="text-sm text-gray-600 ">
                  Scrivimi su WhatsApp per una risposta rapida!
                </p>
              </div>
              <button onClick={() => setShowTooltip(false)} className="ml-2 text-gray-400 hover:text-gray-600">
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="absolute bottom-0 right-4 transform translate-y-1/2 rotate-45 w-2 h-2 bg-white "></div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-colors duration-200 cursor-pointer"
        aria-label="Contatta su WhatsApp"
      >
        <MessageCircleMore className="h-6 w-6" />
      </motion.button>

      {/* Animazione pulsante */}
      <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" onClick={openWhatsApp}></div>
    </div>
  )
}
