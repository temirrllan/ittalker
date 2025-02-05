import AboutUs from "@/sections/AboutUs";
import RecordForm from "@/sections/Features";
import Hero from "@/sections/Hero";
import Learn from "@/sections/Learn";
import LearnOutcomes from "@/sections/LearnOutcomes";
import Navbar from "@/sections/Navbar";
import PriceSection from "@/sections/PriceSection";
import Reviews from "@/sections/Reviews";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <main className="relative w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <AboutUs />
      <RecordForm />
      <LearnOutcomes />
      <Learn />
      <Reviews />
      <PriceSection />
      <Footer />
    </main>
  );
}
