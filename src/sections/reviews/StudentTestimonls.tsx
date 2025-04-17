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
  images: string[];  // Changed from single image to array of images
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const testimonialGroups: TestimonialGroup[] = [
  {
    title: 'Отзывы студентов 1 потока',
    testimonials: [
      {
        name: 'Айнура',
        position: 'Системный аналитик',
        batchNumber: '1-го',
        images: ['/assets/review/ainur1.png', '/assets/review/ainur2.png', '/assets/review/ainur3.png', '/assets/review/ainur4.png']
      },
      {
        name: 'Айнура',
        position: 'Системный аналитик',
        batchNumber: '1-го',
        images: ['/assets/review/anatoly1.jpeg', '/assets/review/anatoly2.jpeg', '/assets/review/anatoly3.jpeg', '/assets/review/anatoly4.jpeg']
      },
      {
        name: 'Адема',
        position: 'Системный аналитик',
        batchNumber: '1-го',
        images: ['/assets/review/adema1.png', '/assets/review/adema2.png', '/assets/review/adema3.png', '/assets/review/adema4.png']
      },
      {
        name: 'Алишер',
        position: 'Системный аналитик',
        batchNumber: '1-го',
        images: ['/assets/review/alisher1.png', '/assets/review/alisher4.jpg', '/assets/review/alisher3.jpg', '/assets/review/alisher2.png', '/assets/review/alisher5.jpg']
      },
      {
        name: 'Даяна',
        position: 'Системный аналитик',
        batchNumber: '1-го',
        images: ['/assets/review/dayana.png', '/assets/review/dayana2.png', '/assets/review/dayana3.png', '/assets/review/dayana4.png']
      },
      {
        name: 'Даяна',
        position: 'Системный аналитик',
        batchNumber: '1-го',
        images: ['/assets/review/sanya.png', '/assets/review/sanya2.png', '/assets/review/sanya3.png', '/assets/review/sanya4.png',]
      },
      {
        name: 'Адема',
        position: 'Системный аналитик',
        batchNumber: '1-го',
        images: ['/assets/review/sofya1.png', '/assets/review/sofya2.png', '/assets/review/sofya3.png', '/assets/review/sofya4.png']
      },
      {
        name: 'Асхат',
        position: 'Системный аналитик',
        batchNumber: '1-го',
        images: ['/assets/review/ashat1.png', '/assets/review/ashat2.png', '/assets/review/ashat3.png']
      },
      {
        name: 'Даниар',
        position: 'Системный аналитик',
        batchNumber: '1-го',
        images: ['/assets/review/danyar1.png', '/assets/review/danyar2.png', '/assets/review/danyar3.png', '/assets/review/danyar4.png']
      },
      {
        name: 'Куатбек',
        position: 'Системный аналитик',
        batchNumber: '2-го',
        images: ['/assets/review/kuatbek.png', '/assets/review/kuatbek2.png', '/assets/review/kuatbek3.png', '/assets/review/kuatbek4.png']
      },
    ]
  },
  {
    title: 'Отзывы студентов 2 потока',
    testimonials: [
      {
        name: 'Александра',
        position: 'Системный аналитик',
        batchNumber: '2-го',
        images: ['/assets/alexa-1.PNG', '/assets/alexa-2.PNG', '/assets/alexa-3.PNG', '/assets/alexa-4.PNG']
      },
      {
        name: 'Жасулан',
        position: 'Системный аналитик',
        batchNumber: '2-го',
        images: ['/assets/review/jasulan1.jpeg', '/assets/review/jasulan2.jpeg', '/assets/review/jasulan3.jpeg']
      },
      {
        name: 'Альбина',
        position: 'Системный аналитик',
        batchNumber: '2-го',
        images: ['/assets/review/albina.PNG', '/assets/review/albina2.PNG', '/assets/review/albina3.PNG', '/assets/review/albina4.PNG']
      },
      {
        name: 'Адема',
        position: 'Системный аналитик',
        batchNumber: '2-го',
        images: ['/assets/review/akjol.png', '/assets/review/akjol2.png', '/assets/review/akjol4.png', '/assets/review/akjol3.png']
      },
      {
        name: 'Асель',
        position: 'Системный аналитик',
        batchNumber: '2-го',
        images: ['/assets/review/asel1.png', '/assets/review/asel2.png', '/assets/review/asel3.png', '/assets/review/asel4.png']
      },
      {
        name: 'Алишер',
        position: 'Системный аналитик',
        batchNumber: '2-го',
        images: ['/assets/review/jazira.PNG', '/assets/review/jazira3.PNG', '/assets/review/jazira2.PNG', '/assets/review/jazira4.PNG']
      },
    ]
  }
];

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextImage = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentImageIndex((prev) => (prev + 1) % testimonial.images.length);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const prevImage = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentImageIndex((prev) => (prev - 1 + testimonial.images.length) % testimonial.images.length);
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <div className="flex flex-col">
      {/* Card with image carousel */}
      <div className="relative rounded-2xl overflow-hidden shadow-md w-full aspect-square mb-6">
        {/* Navigation Arrows */}
        <button
          onClick={prevImage}
          className="w-12 h-12 md:w-16 md:h-16 absolute left-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-[#F0F0F0] flex items-center justify-center hover:bg-gray-200 transition-colors"
          aria-label="Previous image"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 12L6 8L10 4" stroke="#006DFC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button
          onClick={nextImage}
          className="w-12 h-12 md:w-16 md:h-16 absolute right-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-[#F0F0F0] flex items-center justify-center hover:bg-gray-200 transition-colors"
          aria-label="Next image"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 4L10 8L6 12" stroke="#006DFC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className={`relative w-full h-full transition-opacity duration-300 ${isAnimating ? 'opacity-50' : 'opacity-100'}`}>
          <Image
            src={testimonial.images[currentImageIndex]}
            alt={testimonial.name}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
};

const TestimonialSection = ({ group }: { group: TestimonialGroup }) => {
  return (
    <div className="mb-20">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-8 md:mb-10 text-[var(--text-primary)]">
        {group.title}
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
        {group.testimonials.map((testimonial, index) => (
          <TestimonialCard 
            key={index}
            testimonial={testimonial}
          />
        ))}
      </div>
    </div>
  );
};

const TestimonialsComponent = () => {
  return (
    <section className="pt-12 md:pt-16 lg:py-20 px-4 md:px-8 lg:px-12">
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