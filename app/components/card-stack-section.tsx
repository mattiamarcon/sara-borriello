"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { ChevronRight, Quote, Pause, Play } from "lucide-react"
import { createClient } from "@/utils/supabase/client"

interface CardProps {
  id: number
  name: string
  role: string
  content: string
}

export default function CardStackAdvanced() {

  const db=createClient();

  const [cards, setCards] = useState<CardProps[]>([])
  const [autoplay, setAutoplay] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const [testimonials,setTestimonials]=useState<CardProps[]>([]);

  useEffect(() => {
  async function getRecensioni() {
    const { data, error } = await db.from("Recensioni").select("*");

    if (data) {
      const nuoveTestimonianze = data.map(rec => ({
        id: rec.id,
        name: rec.nome + " " + rec.cognome,
        role: rec.clienteDa,
        content: rec.descrizione,
      }));

      setTestimonials(nuoveTestimonianze);
    }
  }

  getRecensioni();
}, []);



  // Controlla se il dispositivo è mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Controlla all'inizio
    checkIfMobile()

    // Aggiungi event listener per il resize
    window.addEventListener("resize", checkIfMobile)

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  useEffect(() => {
    // Inizializza lo stack con le prime 3 carte (o 2 su mobile)
    const initialCards = isMobile ? testimonials.slice(0, 2) : testimonials.slice(0, 3)
    setCards(initialCards)
  }, [testimonials,isMobile])

  const rotateCards = () => {
    setCards((prevCards) => {
      const newCards = [...prevCards]
      // Rimuovi la prima carta
      const firstCard = newCards.shift()
      // Trova la prossima carta da aggiungere
      if (firstCard) {
        const nextCardIndex =
          (testimonials.findIndex((t) => t.id === firstCard.id) + prevCards.length) % testimonials.length
        // Aggiungi la nuova carta in fondo
        newCards.push(testimonials[nextCardIndex])
      }
      return newCards
    })
  }

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (autoplay && cards.length > 0) {
      interval = setInterval(() => {
        rotateCards()
      }, 5000)
    }

    return () => clearInterval(interval)
  }, [autoplay, cards])

  const toggleAutoplay = () => {
    setAutoplay(!autoplay)
  }

  return (
    <section id="recensioni" className="relative w-full h-screen overflow-hidden">
      {/* Video di background */}
      <div className="absolute inset-0 w-full h-full">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/bgVideo.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Contenuto sovrapposto */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Cosa Dicono i Nostri Clienti</h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Scopri le esperienze di chi ha già intrapreso un percorso di allenamento personalizzato.
          </p>
        </div>

        {/* Controlli di navigazione (spostati sopra le card per mobile) */}
        <div className="flex justify-center space-x-4 mb-4 md:hidden">
          <button
            onClick={rotateCards}
            className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            aria-label="Prossima testimonianza"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          <button
            onClick={toggleAutoplay}
            className={`w-12 h-12 rounded-full backdrop-blur-sm flex items-center justify-center text-white transition-colors ${
              autoplay ? "bg-primary-dark/80" : "bg-white/20 hover:bg-white/30"
            }`}
            aria-label={autoplay ? "Disattiva riproduzione automatica" : "Attiva riproduzione automatica"}
          >
            {autoplay ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
          </button>
        </div>

        <div className="relative w-full max-w-3xl mx-auto h-[350px] md:h-[350px]">
          <div className="relative h-full w-full flex items-center justify-center">
            <AnimatePresence>
              {cards.map((card, index) => {
                const isTop = index === 0
                // Calcola scale e offset diversi per mobile
                const scale = isMobile ? 1 - index * 0.07 : 1 - index * 0.05
                const yOffset = isMobile ? index * -15 : index * -20

                return (
                  <motion.div
                    key={card.id}
                    initial={isTop ? { scale: 0.8, y: 100, opacity: 0 } : {}}
                    animate={{
                      scale: scale,
                      y: yOffset,
                      zIndex: cards.length - index,
                      opacity: 1 - index * (isMobile ? 0.15 : 0.2),
                    }}
                    exit={{ scale: 0.8, y: -100, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className={cn(
                      "absolute w-[90%] md:w-full max-w-2xl mx-auto",
                      isTop ? "cursor-pointer" : "pointer-events-none",
                    )}
                    onClick={isTop ? rotateCards : undefined}
                  >
                    <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                      <div className="grid grid-cols-1">
                        <div className="p-6 md:p-8 flex flex-col justify-between">
                          <div>
                            <div className="flex items-start mb-4">
                              <Quote className="h-6 w-6 md:h-8 md:w-8 text-primary-light mr-2 flex-shrink-0 rotate-180" />
                              <p className="text-gray-700 italic text-sm md:text-base">
                                {isMobile
                                  ? card.content.length > 120
                                    ? card.content.substring(0, 120) + "..."
                                    : card.content
                                  : card.content}
                              </p>
                            </div>
                          </div>
                          <div className="mt-4">
                            <p className="font-semibold text-primary-dark text-base md:text-lg">{card.name}</p>
                            <p className="text-xs md:text-sm text-gray-500 ">{card.role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>

          {/* Controlli di navigazione (per desktop, sotto le card) */}
          <div className="absolute -bottom-16 left-0 right-0 hidden md:flex justify-center space-x-4">
            <button
              onClick={rotateCards}
              className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              aria-label="Prossima testimonianza"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            <button
              onClick={toggleAutoplay}
              className={`w-10 h-10 rounded-full backdrop-blur-sm flex items-center justify-center text-white transition-colors ${
                autoplay ? "bg-primary-dark/80" : "bg-white/20 hover:bg-white/30"
              }`}
              aria-label={autoplay ? "Disattiva riproduzione automatica" : "Attiva riproduzione automatica"}
            >
              {autoplay ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
