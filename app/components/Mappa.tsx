"use client"

import type React from "react"


export default function Mappa() {
  

  return (
    <section id="contatti" className="py-20 bg-gray-50 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-first mb-4">Vieni a trovarmi</h2>
        </div>
          <iframe src="https://www.google.com/maps/embed?pb=!3m2!1sit!2sit!4v1746883596310!5m2!1sit!2sit!6m8!1m7!1s__7xROK4_Z6Kg-KY8gngqw!2m2!1d45.88707090178094!2d12.58032084208626!3f256.8610348057811!4f1.060465272040787!5f0.7820865974627469" 
            className="w-full h-full min-h-[600px]"
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
      </div>
    </section>
  )
}
