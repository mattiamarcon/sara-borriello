"use client"

import Carousel from "@/components/ui/carousel"

export function CarouselDemo() {
  const slideData = [
    {
      title: "Personal Training",
      button: "Scopri di Più",
      src: "/handball.jpeg",
      description:
        "Il personal training è un servizio di allenamento personalizzato che ti permette di raggiungere i tuoi obiettivi di fitness con l'aiuto di un trainer dedicato. Le sessioni sono progettate specificamente per te, tenendo conto delle tue esigenze, del tuo livello di fitness e dei tuoi obiettivi. Offriamo diverse modalità: sessioni individuali per la massima personalizzazione, in coppia per condividere l'esperienza con un partner, o in piccoli gruppi di tre persone per un allenamento dinamico e motivante. Sono disponibili anche pacchetti multi-seduta con validità di 3 mesi per ottimizzare i risultati nel tempo.",
    },
    {
      title: "Allenamento EMS",
      button: "Scopri i Benefici",
      src: "/chiSono.jpg",
      description:
        "L'allenamento EMS (Electrical Muscle Stimulation) utilizza una speciale tutina che stimola elettricamente i muscoli durante l'esercizio. Questo metodo innovativo ti permette di ottenere risultati equivalenti a un'ora di allenamento tradizionale in soli 30-35 minuti. Con i nostri pacchetti multi-seduta riceverai vantaggi esclusivi per massimizzare il tuo investimento. L'EMS è particolarmente efficace per la tonificazione muscolare, il recupero da infortuni e per chi ha poco tempo a disposizione.",
    },
    {
      title: "Schede Personalizzate",
      button: "Richiedi Info",
      src: "/training1.jpeg",
      description:
        "Le schede di allenamento personalizzate sono programmi creati su misura che puoi seguire autonomamente a casa o in palestra. Ogni scheda è progettata in base alle tue esigenze specifiche e ai materiali a tua disposizione, con una durata di 1-2 mesi. Il servizio include la creazione iniziale della scheda e successivi rinnovi a condizioni agevolate per garantire progressi costanti. Questo servizio è ideale per chi preferisce allenarsi in autonomia ma desidera comunque un programma professionale e strutturato.",
    },
    {
      title: "Online Training",
      button: "Inizia Ora",
      src: "/training2.jpeg",
      description:
        "L'online training ti permette di allenarti comodamente da casa tua con la guida di un personal trainer professionista tramite videochiamata. Ogni sessione ti offre feedback in tempo reale, correzioni sulla tecnica e motivazione costante. Questo servizio è perfetto per chi non può recarsi in studio ma desidera comunque un allenamento guidato e personalizzato. Gli orari sono flessibili e l'allenamento può essere adattato agli spazi e all'attrezzatura che hai a disposizione.",
    },
  ]

  return (
    <div id="servizi" className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  )
}

