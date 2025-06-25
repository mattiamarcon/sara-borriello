import Hero from "../components/Hero";
import { CarouselDemo } from "../components/CarouselServizi";
import ChiSono from "../components/ChiSono";
import Mappa from "../components/Mappa";
import CardStackSection from "../components/card-stack-section";
import WhatsAppContactSection from "../components/whatsapp-contact-section";
import ReviewLink from "../components/ReviewLink";
import EmsPage from "../components/EMSpage";

export default function Home() {
  return (
    <>
      <Hero />
      <ChiSono />
      <div className="mx-auto bg-gray-50 pt-10">
        <h1 className="text-4xl md:text-5xl font-bold text-first text-center">I Nostri Servizi</h1>
        <CarouselDemo />
      </div>
      <CardStackSection />
      <EmsPage />
      <ReviewLink />
      <WhatsAppContactSection />
      <Mappa />
    </>
  );
}
