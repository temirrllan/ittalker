'use client'

import { useState } from 'react';
import HeroForm from '@/components/HeroForm';
import Badge from '@/components/Badge';
import SuccessPopup from '@/components/SuccessPopup';
import AnimatedSection from '@/components/AnimatedSection';

function Hero() {
  const [showSuccess, setShowSuccess] = useState(false);

  const features = [
    'Группы по 15 человек',
    'Только польза без воды',
  ];

  const features2 = [
    'От сбора требований до брокеров сообщений',
    'Работа в back-end реального проекта',
    'Еженедельная real-time практика'
  ]

  const companies = ['Теле2', 'Альфа банк', 'Сбербанк', 'Uzum'];

  return (
    <section className="pt-4 bg-[var(--bg-primary)] overflow-hidden rounded-b-3xl">
      <div className="md:container">
        {/* Mobile Hero */}
        <div className="md:hidden relative">

          {/* Content */}
          <div className="px-4">
            <AnimatedSection direction="right">
              <h1 className="text-[30px] leading-[129%]  tracking-[-0.01em] text-[#010024] mb-6 font-bold">
                Получи практические знания SA и увеличь свой доход!
              </h1>
            </AnimatedSection>


              <div className="flex flex-wrap gap-2 mb-2">
                {features.map((feature) => (
                  <Badge key={feature} className='bg-[#E9F0F7] text-xs'>{feature}</Badge>
              ))}
            </div>

            <div className='flex flex-wrap gap-2'>
              {features2.map((feature) => (
                <Badge key={feature} className='bg-[#E9F0F7] text-xs'>{feature}</Badge>
              ))}
            </div>
          </div>

          {/* Person Image with Card */}
          <div className="relative mt-8 mb-[-100px]">
            <img 
              src="/assets/hero-person.png" 
              alt="hero" 
              className="w-full max-w-[334px] mx-auto"
            />
            
            <div className="hidden sm:block absolute top-4 right-4 bg-white rounded-[21px] p-4 shadow-lg w-[165px]">
              <p className="text-xs font-semibold mb-1.5">
                Старший и ведущий SA:
              </p>
                {companies.map((company) => (
                  <li 
                    key={company}
                    className="text-[#2F87FB] text-base ml-6 font-semibold"
                  >
                    {company}
                  </li>
                ))}
            </div>
          </div>

          {/* Form */}
          <div className="relative z-10">
            <div className="bg-[rgba(12,54,127,0.5)] backdrop-blur-[25px] rounded-[25px]">
              <div className="px-6 py-8">
                <h3 className="text-[25px] leading-[129%] font-[550] text-white mb-8">
                  Запишись на бесплатный вебинар!
                </h3>
                <HeroForm 
                  className="mt-8"
                  onSubmitSuccess={() => setShowSuccess(true)} 
                />
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Hero */}
        <div className="h-full hidden md:block relative min-h-[calc(90vh-50px)]">
          {/* Background images */}
          <img 
            src="/assets/center-ellipse.png" 
            alt="" 
            className='absolute top-0 
              md:h-[calc(100%-100px)] md:left-[55%] md:-translate-x-1/2
              lg:h-[calc(100%-80px)] lg:left-[60%]
              xl:h-[calc(100%-60px)] xl:left-[62%]
              2xl:h-[calc(100%-40px)] 2xl:left-[65%]'
          />
          <img 
            src="/assets/right-bottom-ellipse.png" 
            alt="" 
            className='absolute 
              md:h-[calc(100%-100px)] md:right-[-10%] md:bottom-[calc(-5%)]
              lg:h-[calc(100%-80px)] lg:right-[-5%] lg:bottom-[calc(-7%)]
              xl:h-[calc(100%-60px)] xl:right-[-10%] xl:bottom-[calc(-10%)]
              2xl:h-[calc(100%-40px)] 2xl:bottom-[calc(-12%)]'
          />
          <img 
            src="/assets/left-bottom-ellipse.png" 
            alt="" 
            className='absolute 
              md:h-[calc(100%-100px)] md:left-[-10%] md:bottom-[calc(-5%)]
              lg:h-[calc(100%-80px)] lg:left-[-5%] lg:bottom-[calc(-7%)]
              xl:h-[calc(100%-80px)] xl:left-[-10%]  xl:bottom-[calc(-10%)]
              2xl:h-[calc(100%-40px)] 2xl:bottom-[calc(-12%)]'
          />
          <div className="grid md:grid-cols-2 gap-12 items-center ">
            <div className='mt-16'>
              <AnimatedSection direction="right">
                <h1 className="text-3xl lg:text-4xl font-bold mb-8">
                  Получи практические знания <br />
                  SA и увеличь свой доход!
                </h1>
              </AnimatedSection>
              <AnimatedSection direction="left" delay={0.2}>
                <div className='mb-56 space-y-1'>
                  <div className="flex gap-1.5 mb-2">
                    {features.map((feature) => (
                      <Badge key={feature} className="bg-[#E9F0F7] text-sm lg:text-base">{feature}</Badge>
                    ))}
                  </div>
                  <div className="grid gap-3">
                    {features2.map((feature) => (
                      <Badge key={feature} className="bg-[#E9F0F7] text-sm lg:text-base">{feature}</Badge>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
            <div className="relative h-full">
              <img 
                src="/assets/hero-person.png" 
                alt="hero" 
                className="
                  w-full 
                  absolute
                  right-[-10px]
                  md:bottom-[calc(20vh-420px)]
                  xl:bottom-[calc(20vh-360px)]
                  2xl:bottom-[calc(8vh-280px)]
                  h-[100vh]
                  object-contain
                "
              />
              <div 
                className={`absolute bg-white shadow-lg
                  md:top-[calc(5%)] md:right-[-10px] 
                  lg:top-[calc(10%)] lg:right-[-20px] 
                  xl:top-[calc(10%)] xl:right-[-50px]
                  rounded-3xl p-4 lg:p-6
                  w-[200px] lg:w-auto
                  transform transition-all duration-300
                `}
              >
                <p className="text-base lg:text-lg mb-2 font-semibold">
                  Старший и ведущий SA:
                </p>
                {companies.map((company) => (
                  <li 
                    className='ml-6 text-[var(--button-primary)] text-lg lg:text-xl font-semibold' 
                    key={company}
                  >
                    {company}
                  </li>
                ))}
              </div>
            </div>

          {/* Form */}
          <div 
            className={`
              absolute z-20 
              bg-[rgba(12,54,127,0.5)] backdrop-blur-[25px] rounded-[25px]
              
              // Mobile styles (до 768px)
              w-[90%] p-4 mx-4
              
              // Tablet styles (768px - 1024px)
              md:w-[90%] md:p-6 md:left-1/2 md:-translate-x-1/2 
              md:bottom-[calc(5%)]
              
              // Small desktop (1024px - 1280px)
              lg:w-[80%] lg:p-8 
              lg:bottom-[calc(7%)]
              
              // Medium desktop (1280px - 1536px)
              xl:w-[1000px] xl:p-10 xl:left-[39%] xl:-translate-x-1/2
              xl:bottom-[calc(10%)]
              
              // Large desktop (1536px and above)
              2xl:w-[1200px]  2xl:p-12 2xl:left-[47%] 2xl:-translate-x-1/2
              2xl:bottom-[calc(12%)]
              
              transform transition-all duration-300
            `}

            >
              <p className='text-start text-white text-xl lg:text-2xl font-semibold mb-6 lg:mb-8'>
                Запишись на тестовое собеседование!
              </p>
              <HeroForm 
                onSubmitSuccess={() => setShowSuccess(true)} 
              />
            </div>
          </div>
        </div>
      </div>

      <SuccessPopup 
        isOpen={showSuccess} 
        onClose={() => setShowSuccess(false)} 
      />
    </section>
  );
}

export default Hero;
