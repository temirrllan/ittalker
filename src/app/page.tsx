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
  'Я новичок в айти. Смогу ли я понять ваш курс?',
  'Я уже работаю SA или в IT-профессии. Будет ли мне полезен ваш курс?',
  'Вы трудоустраиваете после обучения?',
  'Есть ли рассрочка?',
  'Может ли компания оплатить мое обучение?'
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
