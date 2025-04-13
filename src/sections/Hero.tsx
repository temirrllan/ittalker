'use client'

import { useState } from 'react';
import HeroForm from '@/components/HeroForm';
import Badge from '@/components/Badge';
import SuccessPopup from '@/components/SuccessPopup';
import AnimatedSection from '@/components/AnimatedSection';
import styles from '@/styles/Hero.module.css';
import Image from 'next/image';

function Hero() {
  const [showSuccess, setShowSuccess] = useState(false);

  const features = [
    'Группы по 20 человек',
    'Еженедельная real-time практика',
  ];

  const features2 = [
    'Настоящая практика в реальном проекте',
    'От старта в профессии до уровня middle',
    'Опытные и новички - в разных группах', 
    'Длительность обучения - 3 месяца'
  ]

  const companies = ['Теле2', 'Альфа банк', 'Сбербанк', 'Uzum'];

  return (
    <section className="pt-6 bg-[var(--bg-primary)] overflow-hidden rounded-b-3xl">
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

            <div className='flex flex-wrap-reverse gap-2'>
              {features2.map((feature) => (
                <Badge key={feature} className='bg-[#E9F0F7] text-xs'>{feature}</Badge>
              ))}
            </div>
          </div>

          {/* Person Image with Card */}
          <div className={styles.mobileHeroImage}>
            <img 
              src="/assets/hero-person.png" 
              alt="hero" 
              className={styles.heroImage}
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
                <div className='flex flex-col w-full'>
                  <div className='flex justify-between items-start mb-8'>
                    <h3 className="text-[25px] font-semibold text-white">
                      Запишись на бесплатный вебинар!
                    </h3>
                    <div className='md:hidden flex gap-x-2 bg-[#6989BE] opacity-90 rounded-xl p-2'>
                      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <Image 
                          src="/assets/colorful/insta.svg" 
                          alt="Instagram" 
                          width={50}
                          height={50}
                          className="cursor-pointer hover:opacity-80 transition-opacity"
                        />
                      </a>
                      <a href="https://t.me" target="_blank" rel="noopener noreferrer">
                        <Image 
                          src="/assets/colorful/tg.svg" 
                          alt="Telegram" 
                          width={50}
                          height={50}
                          className="cursor-pointer hover:opacity-80 transition-opacity"
                        />
                      </a>
                    </div>
                  </div>

                  <HeroForm 
                    className="mt-8"
                    onSubmitSuccess={() => setShowSuccess(true)} 
                  />
                </div>
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
            className={`${styles.ellipseBg} ${styles.centerEllipse}`}
          />
          <img 
            src="/assets/right-bottom-ellipse.png" 
            alt="" 
            className={`${styles.sideEllipse} ${styles.rightEllipse}`}
          />
          <img 
            src="/assets/left-bottom-ellipse.png" 
            alt="" 
            className={`${styles.sideEllipse} ${styles.leftEllipse}`}
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
                className={styles.heroImage}
              />
              <div className={styles.companyCard}>
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
              md:w-[90%] md:px-6 md:left-1/2 md:-translate-x-1/2 
              md:bottom-[calc(5%)]
              
              // Small desktop (1024px - 1280px)
              lg:w-[80%] lg:px-8  
              lg:bottom-[calc(7%)]
              
              // Medium desktop (1280px - 1536px)
              xl:w-[1000px] xl:px-10 xl:left-[39%] xl:-translate-x-1/2
              xl:bottom-[calc(7%)]
              
              // Large desktop (1536px and above)
              2xl:w-[1200px]  2xl:px-12 2xl:left-[47%] 2xl:-translate-x-1/2
              2xl:bottom-[calc(6%)]
              
              transform transition-all duration-300
            `}

            >
              <p className='text-start text-white text-xl lg:text-3xl font-bold mb-6 lg:mb-8'>
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
