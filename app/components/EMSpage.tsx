"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Zap, Bluetooth, Shirt, Shield} from "lucide-react"

import Image from "next/image"


const EmsPage = () => {
  const features = [
    {
      icon: Shirt,
      title: "Bio-Jacket con 18 elettrodi",
      description: "Stimola i principali gruppi muscolari per un allenamento completo e profondo",
    },
    {
      icon: Bluetooth,
      title: "Tecnologia Wireless Bluetooth",
      description: "Massima libertà di movimento eliminando l'ingombro dei cavi",
    },
    {
      icon: Zap,
      title: "SlimFlex Technology",
      description: "Design ergonomico e ultraleggero che si adatta perfettamente al corpo",
    },
    {
      icon: Shield,
      title: "Materiali Antibatterici",
      description: "Garantisce igiene e comfort durante ogni sessione di allenamento",
    },
  ]

  const whatsappNumber = "+393409539298"



  return (
    <>
      <div id="ems" className="min-h-screen bg-gradient-to-br from-gray-50 via-first/10 to-first/10">
        <section className="py-16 container mx-auto ">

          <div className="max-w-4xl mx-auto text-center mb-16 px-6">
            <h2 className="text-3xl md:text-5xl font-bold text-first mb-6">Tecnologia EMS</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Le tute I-Motion EMS utilizzano la tecnologia di elettrostimolazione muscolare per offrire un allenamento
              completo ed efficace in tempi record. Grazie agli elettrodi integrati, puoi allenare oltre 300 muscoli
              simultaneamente in sessioni di soli 20 minuti.
            </p>
          </div>

          <div className="w-full md:max-w-4xl mx-auto mb-16">
            <div className="relative bg-gradient-to-br from-first to-second md:rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/chiSono.jpg"
                alt="I-Motion EMS Training Suit"
                width={1200}
                height={800}
                className="w-full h-auto object-cover "
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white" id="info">

          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-first mb-4">Caratteristiche Principali</h2>
              <p className="text-lg text-gray-600">Tecnologia all'avanguardia per un'esperienza di allenamento unica</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-first shadow-lg hover:scale-105"
                >
                  <CardContent className="p-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-first to-first rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-first mb-4">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

          </div>

        </section>

         {/* Benefits Section */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-first/10">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-second mb-4">Benefici dell'Allenamento EMS</h2>
              <p className="text-lg text-gray-600">Massimizza i risultati con il minimo investimento di tempo</p>
            </div>

            <div className="max-w-5xl mx-auto space-y-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-second mb-6">Efficienza Temporale Rivoluzionaria</h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    L'allenamento I-Motion EMS ridefinisce completamente il concetto di efficienza nell'esercizio
                    fisico. Una singola sessione di 20 minuti è in grado di fornire gli stessi benefici di 3-4 ore di
                    allenamento tradizionale in palestra. Questa straordinaria efficienza è possibile grazie alla
                    stimolazione simultanea di oltre 300 muscoli, un risultato impossibile da raggiungere con
                    l'esercizio convenzionale.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Per chi vive una vita frenetica e ha difficoltà a trovare tempo per lunghe sessioni di allenamento,
                    l'EMS rappresenta la soluzione ideale per mantenersi in forma senza compromessi sui risultati.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-first">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-second mb-2">20 min</div>
                    <div className="text-gray-600 mb-4">Sessione EMS</div>
                    <div className="text-2xl text-gray-400 mb-2">=</div>
                    <div className="text-3xl font-bold text-first mb-2">3-4 ore</div>
                    <div className="text-gray-600">Allenamento tradizionale</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 bg-white rounded-xl p-8 shadow-lg border-2 border-first">
                  <h4 className="text-xl font-bold text-second mb-4 text-center">Versatilità Applicativa</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Tonificazione muscolare</span>
                      <div className="w-20 h-2 bg-first rounded-full"></div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Perdita di peso</span>
                      <div className="w-20 h-2 bg-second rounded-full"></div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Riabilitazione</span>
                      <div className="w-20 h-2 bg-first rounded-full"></div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Performance sportive</span>
                      <div className="w-20 h-2 bg-second rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <h3 className="text-2xl font-bold text-second mb-6">Adattabilità Completa agli Obiettivi</h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    L'I-Motion EMS si distingue per la sua straordinaria versatilità, adattandosi perfettamente a una
                    vasta gamma di obiettivi fitness. Che tu stia cercando di tonificare il corpo, perdere peso,
                    recuperare da un infortunio o migliorare le performance sportive, questa tecnologia offre programmi
                    specifici e personalizzabili per ogni esigenza.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    I 34 programmi disponibili (24 individuali e 10 automatici) permettono una personalizzazione totale
                    dell'allenamento, garantendo che ogni sessione sia ottimizzata per i tuoi obiettivi specifici e il
                    tuo livello di fitness attuale.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-second to-first rounded-xl p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Attivazione Muscolare Superiore</h3>
                <p className="text-lg leading-relaxed mb-6">
                  L'allenamento I-Motion EMS è in grado di attivare simultaneamente oltre 300 muscoli, raggiungendo
                  anche quelli più profondi e difficili da stimolare con l'esercizio tradizionale. Questa attivazione
                  completa garantisce uno sviluppo muscolare armonico e simmetrico, migliorando non solo l'aspetto
                  estetico ma anche la funzionalità e la stabilità del corpo.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold mb-2">300+</div>
                    <div>Muscoli Attivati</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">90%</div>
                    <div>Fibre Muscolari</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">100%</div>
                    <div>Simmetria</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>     
      </div>
    </>
  )
}

export default EmsPage;