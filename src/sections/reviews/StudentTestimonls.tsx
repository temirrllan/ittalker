'use client'

import Image from 'next/image';
import { useState } from 'react';
import AnimatedSection from '@/components/AnimatedSection';

interface TestimonialGroup {
  title: string;
  testimonials: Testimonial[];
}

interface Testimonial {
  name: string;
  position: string;
  batchNumber: string;
  image: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  onNext: () => void;
  onPrev: () => void;
}

const testimonialGroups: TestimonialGroup[] = [
  {
    title: 'Отзывы студентов 1 потока',
    testimonials: [
      {
        name: 'Адема',
        position: 'Системный аналитик',
        batchNumber: '1-го',
        image: '/assets/array.png'
      },
      {
        name: 'Куатбек',
        position: 'Системный аналитик',
        batchNumber: '1-го',
        image: '/assets/array.png'
      },
      {
        name: 'Анатолий',
        position: 'Системный аналитик',
        batchNumber: '1-го',
        image: '/assets/array.png'
      },
      {
        name: 'Софья',
        position: 'Системный аналитик',
        batchNumber: '1-го',
        image: '/assets/array.png'
      }
    ]
  },
  {
    title: 'Отзывы студентов 2 потока',
    testimonials: [
      {
        name: 'Адема',
        position: 'Системный аналитик',
        batchNumber: '1-го',
        image: '/assets/array.png'
      },
      {
        name: 'Куатбек',
        position: 'Системный аналитик',
        batchNumber: '1-го',
        image: '/assets/array.png'
      },
      {
        name: 'Софья',
        position: 'Системный аналитик',
        batchNumber: '1-го',
        image: '/assets/array.png'
      },
      {
        name: 'Алишер',
        position: 'Системный аналитик',
        batchNumber: '1-го',
        image: '/assets/array.png'
      }
    ]
  }
];

const TestimonialCard = ({ testimonial, onNext, onPrev }: TestimonialCardProps) => {
  return (
    <div className="flex flex-col">
      {/* Card is just the image */}
      <div className="relative rounded-2xl overflow-hidden shadow-md w-full aspect-[3/4] mb-6">
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* Navigation buttons are outside the card */}
      <div className="flex justify-center gap-4 mt-4">
        <button 
          onClick={onPrev}
          className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#F0F0F0] flex items-center justify-center hover:bg-gray-200 transition-colors"
          aria-label="Previous testimonial"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 12L6 8L10 4" stroke="#006DFC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        <button 
          onClick={onNext}
          className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#F0F0F0] flex items-center justify-center hover:bg-gray-200 transition-colors"
          aria-label="Next testimonial"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 4L10 8L6 12" stroke="#006DFC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

const TestimonialSection = ({ group }: { group: TestimonialGroup }) => {
  const [currentIndexes, setCurrentIndexes] = useState([0, 1]);
  
  const handleNext = (cardIndex: number) => {
    setCurrentIndexes(prev => {
      const newIndexes = [...prev];
      newIndexes[cardIndex] = (newIndexes[cardIndex] + 1) % group.testimonials.length;
      return newIndexes;
    });
  };
  
  const handlePrev = (cardIndex: number) => {
    setCurrentIndexes(prev => {
      const newIndexes = [...prev];
      newIndexes[cardIndex] = (newIndexes[cardIndex] - 1 + group.testimonials.length) % group.testimonials.length;
      return newIndexes;
    });
  };
  
  return (
    <div className="mb-20">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-8 md:mb-10 text-[var(--text-primary)]">
        {group.title}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
        <TestimonialCard 
          testimonial={group.testimonials[currentIndexes[0]]} 
          onNext={() => handleNext(0)} 
          onPrev={() => handlePrev(0)} 
        />
        <TestimonialCard 
          testimonial={group.testimonials[currentIndexes[1]]} 
          onNext={() => handleNext(1)} 
          onPrev={() => handlePrev(1)} 
        />
      </div>
    </div>
  );
};

const TestimonialsComponent = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-12">
      <div className="container mx-auto max-w-7xl">
        {testimonialGroups.map((group, index) => (
          <AnimatedSection key={index} direction="up">
            <TestimonialSection group={group} />
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsComponent;