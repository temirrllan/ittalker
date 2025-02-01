'use client'

import { useState } from 'react';
import AnimatedSection from '@/components/AnimatedSection';

function Reviews() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  const reviews = [
    {
      id: 1,
      image: '/assets/review_1.png',
    },
    {
      id: 2,
      image: '/assets/review_2.png',
    },
    {
      id: 3,
      image: '/assets/review_3.png',
    }
  ];

  const handleSlide = (direction: 'prev' | 'next') => {
    if (isAnimating) return;
    setIsAnimating(true);

    setCurrentSlide((prev) => {
      if (direction === 'next') {
        return prev === reviews.length ? 1 : prev + 1;
      }
      return prev === 1 ? reviews.length : prev - 1;
    });

    setTimeout(() => setIsAnimating(false), 500);
  };

  const getVisibleSlides = () => {
    const result = [];
    const totalSlides = reviews.length;
    const prevIndex = currentSlide === 1 ? totalSlides - 1 : currentSlide - 2;
    result.push(reviews[prevIndex]);
    result.push(reviews[currentSlide - 1]);
    const nextIndex = currentSlide === totalSlides ? 0 : currentSlide;
    result.push(reviews[nextIndex]);
    return result;
  };

  return (
    <section id="reviews" className="py-16">
      <div className="container">
        <AnimatedSection>
          <h2 className="text-2xl md:text-4xl font-semibold mb-8 md:mb-12">Отзывы</h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="relative">
            <div className="overflow-hidden h-[500px] sm:h-[400px] md:h-[500px]">
              <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-[26px] w-full max-w-[968px] mx-auto">
                {getVisibleSlides().map((review, index) => (
                  <div 
                    key={review.id}
                    className={`
                      transition-all duration-500 ease-in-out transform
                      ${index === 1 
                        ? 'w-[80%] h-[400px] sm:w-[70%] md:w-[80%] opacity-100 z-20' 
                        : 'w-[20%] h-[400px] sm:w-[30%] md:w-[40%] opacity-50 z-10'
                      }
                      relative
                    `}
                    style={{
                      transform: `
                        scale(${index === 1 ? '1' : '0.9'})
                        translateY(${index === 1 ? '0' : '20px'})
                      `
                    }}
                  >
                    <img 
                      src={review.image} 
                      alt={`Review ${review.id}`} 
                      className={`
                        w-full h-full object-contain
                        transition-all duration-500 ease-in-out
                        ${index === 1 ? 'rounded-[18px] sm:rounded-[20px] md:rounded-[22px]' : 'rounded-[16px] sm:rounded-[18px] md:rounded-[20px]'}
                      `}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
              <button
                onClick={() => handleSlide('prev')}
                disabled={isAnimating}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#18529D] flex items-center justify-center hover:bg-[#18529D] hover:text-white transition-colors disabled:opacity-50"
              >
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  className="text-[#18529D] group-hover:text-white"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => handleSlide('next')}
                disabled={isAnimating}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#18529D] flex items-center justify-center hover:bg-[#18529D] hover:text-white transition-colors disabled:opacity-50"
              >
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor"
                  className="text-[#18529D] group-hover:text-white"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

export default Reviews;
