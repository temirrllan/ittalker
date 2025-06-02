'use client'

import AnimatedSection from '@/components/AnimatedSection';

const HeroSection = () => {
  return (
    <section className="w-full md:px-10">
      <div className="relative rounded-3xl h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
        <div className="absolute inset-0">  
          <video
            src="/assets/hero2.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        </div>

        <div className="container w-full mx-auto h-full relative z-10">
          <div className="flex flex-col justify-end w-full h-full pb-12 md:pb-20 px-4 md:px-6">
            <AnimatedSection direction="up">
              <h1 className="text-2xl sm:text-2xl md:text-4xl lg:text-5xl text-white mb-0 font-bold max-w-xl md:whitespace-nowrap">
                Комьюнити it.t Academy: <br />
                <span className="mt-2">больше, чем просто обучение</span>
              </h1>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
