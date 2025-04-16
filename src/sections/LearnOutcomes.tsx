'use client'

import { useState } from 'react';
import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';


interface Outcome {
  icon: string;
  title: string;
}

function LearnOutcomes() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right');
  const cardsPerPage = 3;

  const outcomes: Outcome[] = [
    {
      icon: '/assets/tick.svg',
      title: 'Проектировать архитектуру систем с использованием современных подходов'
    },
    {
      icon: '/assets/tick.svg',
      title: 'Работать с базами данных и оптимизировать их производительность'
    },
    {
      icon: '/assets/tick.svg',
      title: 'Создавать качественную документацию и UML диаграммы'
    },
    {
      icon: '/assets/tick.svg',
      title: 'Эффективно собирать и анализировать требования'
    },
    {
      icon: '/assets/tick.svg',
      title: 'Проектировать и тестировать API'
    },
    {
      icon: '/assets/tick.svg',
      title: 'Работать с message brokers и кэшированием'
    },
    {
      icon: '/assets/tick.svg',
      title: 'Работать с SQL внутри реального проекта'
    },
    {
      icon: '/assets/tick.svg',
      title: 'Успешно проходить собеседования'
    },
    {
      icon: '/assets/tick.svg',
      title: 'Пользоваться Git и понимать принципы работы с репозиториями'
    }
  ];

  const totalPages = Math.ceil(outcomes.length / cardsPerPage);

  const handleSlide = (direction: 'prev' | 'next') => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setSlideDirection(direction === 'prev' ? 'right' : 'left');

    setTimeout(() => {
      if (direction === 'prev') {
        setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
      } else {
        setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
      }
    }, 300);

    setTimeout(() => {
      setIsAnimating(false);
    }, 600);
  };

  const getCurrentCards = () => {
    const startIndex = currentPage * cardsPerPage;
    return outcomes.slice(startIndex, startIndex + cardsPerPage);
  };

  return (
    <section id="advantages" className="py-12 md:py-16 bg-[#FCFCFE] rounded-t-3xl relative">
      <div className="absolute left-[-700px] top-[-200px] w-[2000px] h-[800px] z-0">
        <Image 
          src="/assets/learn-ellipse.png" 
          alt=""
          fill
          className="object-contain"
          priority
        />
      </div>
      <div className="absolute right-[-300px] bottom-[-300px] w-[1014px] h-[800px] z-0">
        <Image 
          src="/assets/learn-ellipse2.png" 
          alt=""
          fill
          className="object-contain"
          priority
        />
      </div>
      <div className="container relative z-10">
        <AnimatedSection>
          <h2 className="text-2xl md:text-4xl font-[700] mb-8 md:mb-16 text-white">
            Чему вы научитесь
          </h2>
        </AnimatedSection>

        {/* Mobile Version */}
        <div className="md:hidden">
          <AnimatedSection delay={0.2}>
            <div className="relative overflow-hidden">
              <div 
                className={`flex flex-col gap-4 min-h-[300px] transition-transform duration-300 ease-in-out
                  ${isAnimating ? (slideDirection === 'left' ? '-translate-x-full' : 'translate-x-full') : 'translate-x-0'}`}
              >
                {getCurrentCards().map((outcome, index) => (
                  <div 
                    key={currentPage * cardsPerPage + index}
                    className="flex items-start gap-4 bg-white shadow-sm rounded-xl p-4 "
                  >
                    <div className="w-10 h-10 bg-white rounded-full p-2 flex items-center justify-center flex-shrink-0">
                      <Image 
                        src={outcome.icon} 
                        alt=""
                        width={24}
                        height={24}
                      />
                    </div>
                    <p className="text-sm leading-tight text-[var(--text-primary)]">
                      {outcome.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4">
              <button 
                onClick={() => handleSlide('prev')}
                disabled={isAnimating}
                className="w-12 h-12 rounded-full border-2 border-[#18529D] flex items-center justify-center transition-colors disabled:opacity-50"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#18529D" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={() => handleSlide('next')}
                disabled={isAnimating}
                className="w-12 h-12 rounded-full border-2 border-[#18529D] flex items-center justify-center transition-colors disabled:opacity-50"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#18529D" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </AnimatedSection>
        </div>

        {/* Desktop Version */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {outcomes.map((outcome, index) => (
            <AnimatedSection 
              key={index} 
              delay={index * 0.1}
              direction={
                index % 3 === 0 ? 'left' : 
                index % 3 === 1 ? 'up' : 'right'
              }
            >
              <div className="bg-white flex items-start gap-4 group shadow-sm rounded-xl p-4 pt-6 h-[7rem] z-50">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Image 
                    src={outcome.icon} 
                    alt={outcome.title}
                    width={16}
                    height={16}
                  />
                </div>
                <p className="text-md font-medium text-[var(--text-primary)]">
                  {outcome.title}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LearnOutcomes;