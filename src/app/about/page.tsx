import Navbar from "@/sections/Navbar";
import LearnOutcomes from "@/sections/LearnOutcomes";
import Learn from "@/sections/Learn";
import FAQ from "../../sections/FAQ";
import ConsultationForm from "../../sections/ConsultationForm";
import Footer from "../../sections/Footer";
import AboutHero from "@/sections/AboutHero";

const questions = [
    'Я новичок и почти ничего не понял. Я точно смогу освоить ваш курс? ',
    'Я уже работаю в IT, но в другой сфере, что я получу от курса?',
    'Я системный аналитик уровня Middle/Senior, нужен ли мне этот курс?'
]

export default function Reviews() {
    return (
        <main className="relative w-full overflow-x-hidden">
            <Navbar bgColor="bg-white"/>
            <AboutHero />
            <LearnOutcomes />
            <Learn />
            <FAQ questions={questions}/>
            <ConsultationForm bgColor="bg-[#18529D66]" textColor="text-white" />
            <Footer />
        </main>
    );
}