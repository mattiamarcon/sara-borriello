"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, Bluetooth, Shirt, Shield, Clock, Target, Settings, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"


const ProductPage = () => {
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

  const benefits = [
    {
      icon: Clock,
      title: "Efficienza Temporale",
      description: "Sessioni di soli 20 minuti equivalenti a 3-4 ore di allenamento tradizionale",
    },
    {
      icon: Target,
      title: "Versatilità Completa",
      description: "Adatto per tonificazione, perdita di peso, riabilitazione e performance sportive",
    },
    {
      icon: Settings,
      title: "Programmi Personalizzabili",
      description: "24 programmi individuali e 10 automatici per ogni esigenza",
    },
    {
      icon: Users,
      title: "Oltre 300 Muscoli",
      description: "Allena simultaneamente tutti i principali gruppi muscolari",
    },
  ]

  const openWhatsApp = () => {
    const message =
      "Ciao Sara! Sono interessato/a all'I-Motion EMS Training. Vorrei prenotare una consulenza e avere maggiori informazioni."
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/3409539298?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-first/10 to-first/10">
        {/* Hero Section */}
        {/* <section className="relative overflow-hidden bg-gradient-to-r from-first via-first/90 to-first text-white pt-32">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative container mx-auto px-6 py-20">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-white/20 text-white hover:bg-white/30 text-lg px-6 py-2">
                Tecnologia EMS Avanzata
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r text-white bg-clip-text ">
                I-Motion EMS
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white leading-relaxed">
                L'avanguardia dell'allenamento muscolare per risultati rapidi e tangibili
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href={"#info"}
                  className="bg-white text-first cursor-pointer items-center justify-center inline-flex px-7 text-lg font-semibold rounded-md"
                >
                  Scopri di Più
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg"
                  onClick={openWhatsApp}
                >
                  Contattami
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
        </section> */}


        <section className="relative w-full h-screen overflow-hidden">
      {/* Video di sfondo */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0 brightness-50"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src="/esVideo2.mp4" type="video/mp4" />
        {/* Fallback per browser che non supportano il video */}
        Il tuo browser non supporta i video HTML5.
      </video>

      {/* Overlay opzionale per migliorare la leggibilità del testo */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>

      {/* Contenuto sovrapposto al video */}
      <div className="relative z-20 flex items-center justify-center h-full px-4">
        <div className="text-center text-white max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Tecnologia EMS Avanzata</h1>
          <p className="text-lg md:text-xl mb-8 ">
            L'avanguardia dell'allenamento muscolare per risultati rapidi e tangibili
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href={"#info"}
                  className="bg-first text-white cursor-pointer items-center justify-center inline-flex px-7 py-3 text-xl rounded-md"
                >
                  Scopri di Più
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
                  onClick={openWhatsApp}
                >
                  Contattami
                </Button>
              </div>
        </div>
      </div>
    </section>

        {/* Product Overview */}
        <section className="py-16 container mx-auto px-6">

          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-first mb-6">Rivoluziona il tuo allenamento</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Le tute I-Motion EMS utilizzano la tecnologia di elettrostimolazione muscolare per offrire un allenamento
              completo ed efficace in tempi record. Grazie agli elettrodi integrati, puoi allenare oltre 300 muscoli
              simultaneamente in sessioni di soli 20 minuti.
            </p>
          </div>

          <div className="max-w-3xl mx-auto mb-16">
            <div className="relative bg-gradient-to-br from-primary-light/20 to-primary-dark/20 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/chiSono.jpg"
                alt="I-Motion EMS Training Suit"
                width={1200}
                height={800}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/30 to-transparent"></div>
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
              <h2 className="text-3xl md:text-4xl font-bold text-first mb-4">Benefici dell'Allenamento EMS</h2>
              <p className="text-lg text-gray-600">Massimizza i risultati con la minima investimento di tempo</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-first shadow-lg"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-first to-first rounded-xl group-hover:scale-110 transition-transform duration-300">
                        <benefit.icon className="w-9 h-9 p-1 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-first mb-3">{benefit.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-r from-first to-first text-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="group">
                <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                  20
                </div>
                <div className=" text-lg">Minuti per Sessione</div>
              </div>
              <div className="group">
                <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                  300+
                </div>
                <div className=" text-lg">Muscoli Allenati</div>
              </div>
              <div className="group">
                <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                  34
                </div>
                <div className=" text-lg">Programmi Disponibili</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-first mb-6">
                Inizia la tua trasformazione oggi
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Scopri come le tute I-Motion EMS possono rivoluzionare il tuo approccio al fitness. Contattami per
                una consulenza personalizzata e per provare questa tecnologia innovativa.
              </p>
              <Button
                onClick={openWhatsApp}
                className="  p-7 my-5 text-xl bg-first text-white  hover:bg-second  cursor-pointer"
              >
                Contattami
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default ProductPage
