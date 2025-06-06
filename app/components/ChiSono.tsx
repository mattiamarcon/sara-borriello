import Image from "next/image"


export default function ChiSono() {


  return (
    <section id="chi-sono" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <Image src="/manubrio.jpg" alt="Personal Trainer" fill className="object-cover" />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-first mb-6">Chi Sono</h2>
            <p className="text-lg text-gray-700 mb-6">
              Mi chiamo Sara Borriello, sono una chinesiologa sportiva, laureata in Scienze Motorie con specializzazione in Scienze dello Sport. Lavoro ogni giorno nel mio studio di personal trainer, dove aiuto persone di ogni età a ritrovare benessere, forza e consapevolezza attraverso programmi di esercizio fisico mirati e personalizzati.
            </p>
            <p className="text-lg text-gray-700  mb-8">
              Il mio approccio si basa sulla valutazione funzionale del corpo, sull&apos;ascolto attivo e su un metodo costruito su misura per le esigenze di ciascuno: dalla prevenzione degli infortuni al recupero post-riabilitativo, fino al miglioramento della performance sportiva.
            </p>
            <p className="text-lg text-gray-700  mb-8">
              All&apos;interno dello studio seguo sportivi, atleti e persone comuni, offrendo percorsi individuali che uniscono tecnica, motivazione e sostenibilità nel tempo. Collaboro anche con fisioterapisti e altri professionisti del benessere per garantire un servizio completo e integrato.
            </p>
            <p className="text-lg text-gray-700  mb-8">
              Credo che il movimento sia una vera forma di cura e crescita personale. Se vuoi migliorare il tuo stato di forma, prevenire dolori o semplicemente sentirti meglio nel tuo corpo, sei nel posto giusto.
            </p>

          </div>
        </div>
      </div>
    </section>
  )
}
