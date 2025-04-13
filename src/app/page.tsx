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

const questions = [
  'Можно ли приобрести все 4 курса вместе и будет ли скидка?',
  'Есть ли рассрочка?',
  'Может ли компания оплатить мое обучение?',
  'Как понять в какую группу меня зачислят?'
];

export default function Home() {
  return (
    <main className="relative w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <Analyze />
      <Rules />
      <Team />
      <Reviews />
      <FAQ questions={questions}/>
      <PriceSection/> 
      <ConsultationForm />
      <Footer />
    </main>
  );
}
