'use client'

import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';

const HeroSection = () => {
  return (
    <section className="w-full md:px-10 ">
    <div className='relative rounded-3xl h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden'>
      <div className="absolute inset-0 px-10">
        <Image
          src="/assets/reviews.png" // Make sure to add this image to your project
          alt="IT Talker Community"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      </div>

      <div className="container mx-auto h-full relative z-10">
        <div className="flex flex-col justify-end h-full pb-12 md:pb-20 px-4 md:px-6">
          <AnimatedSection direction="up">
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold max-w-xl leading-tight">
              Комьюнити it.t Academy:
              <br />
              <span className="block mt-2">больше, чем просто обучение</span>
            </h1>
            
            <div className="mt-6 md:mt-8">
              <button className="bg-[var(--button-primary)] text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity font-medium text-base md:text-lg">
                Присоединиться
              </button>
            </div>
          </AnimatedSection>
        </div>
      </div>
        </div>
    </section>
  );
};

export default HeroSection;