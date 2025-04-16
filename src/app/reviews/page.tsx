import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";
import Hero from "@/sections/reviews/Hero";
import ConsultationForm from "@/sections/ConsultationForm";
import FeatureSections from "@/sections/reviews/Feature";
import StudentTestimonials from "@/sections/reviews/StudentTestimonls";
import SocialLinks from "@/components/SocialLinks";

export default function ReviewsPage() {
    return (
        <main className="relative w-full overflow-x-hidden">
            <Navbar bgColor="bg-white"/>
            <Hero />
            <FeatureSections />
            <StudentTestimonials />
            <ConsultationForm 
            isEllipses={true} 
            ellipseColor="#ECF4FF"
             description="Оставь заявку и мы вас проконсультируем" title="Присоединяйся к сообществу SA!"  textColor="text-white" image="/assets/consult.png" backgroundImage="/assets/consult_bg.png"/>
            <Footer />
            <SocialLinks />
        </main>
    );
}