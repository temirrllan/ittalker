import Hero from "@/sections/Hero";
import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";
import Rules from "@/sections/Rules";
import Analyze from "@/sections/Analyze";
import Reviews from "@/sections/Reviews";
import Team from "@/sections/Team";
import PriceSection from "@/sections/PriceSection";
import ConsultationForm from "@/sections/ConsultationForm";
import FAQ from '@/sections/FAQ';

export default function Home() {
  return (
    <main className="relative w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <Analyze />
      <Rules />
      <Team />
      <Reviews />
      <FAQ />
      <PriceSection/> 
      <ConsultationForm />
      <Footer />
    </main>
  );
}
