import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";
import Hero from "@/sections/reviews/Hero";
import ConsultationForm from "@/sections/ConsultationForm";
import FeatureSections from "@/sections/reviews/Feature";
import StudentTestimonials from "@/sections/reviews/StudentTestimonls";

export default function ReviewsPage() {
    return (
        <main className="relative w-full overflow-x-hidden">
            <Navbar bgColor="bg-white"/>
            <Hero />
            <FeatureSections />
            <StudentTestimonials />
            <ConsultationForm />
            <Footer />
        </main>
    );
}