'use client'

import Link from 'next/link';
import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';

interface ReviewCardProps {
  name: string;
  image: string;
  description: string;
  story: string;
}

const reviewsData: ReviewCardProps[] = [
  {
    name: 'Куатбек',
    image: '/assets/kuatbek.png',
    description: 'Системный аналитик\nстудент 1-го потока',
    story: 'Узнайте историю Куатбека, как он с нуля поднялся до Junior специалиста'
  },
  {
    name: 'Анатолий',
    image: '/assets/review/1.PNG',
    description: 'Системный аналитик\nстудент 1-го потока',
    story: 'Узнайте историю Анатолия, как он с нуля поднялся до Junior специалиста'
  },
  {
    name: 'Софья',
    image: '/assets/sofya.png',
    description: 'Системный аналитик\nстудент 1-го потока',
    story: 'Узнайте историю Софьи, как она с нуля поднялась до Junior специалиста'
  },
  {
    name: 'Алишер',
    image: '/assets/alisher.png',
    description: 'Системный аналитик\nстудент 1-го потока',
    story: 'Узнайте историю Алишера, как он с нуля поднялся до Junior специалиста'
  },
  {
    name: 'Софья',
    image: '/assets/sofya.png',
    description: 'Системный аналитик\nстудент 1-го потока',
    story: 'Узнайте историю Софьи, как она с нуля поднялась до Junior специалиста'
  },
  {
    name: 'Алишер',
    image: '/assets/alisher.png',
    description: 'Системный аналитик\nстудент 1-го потока',
    story: 'Узнайте историю Алишера, как он с нуля поднялся до Junior специалиста'
  }
];

const ReviewCard = ({ name, image, description, story, index }: ReviewCardProps & { index: number }) => {
  return (
    <div className="bg-white rounded-[25px] p-4 md:p-8">
      <div className="flex flex-col gap-4 md:gap-6">
        {/* Mobile Layout */}
        <div className="flex md:hidden flex-col">
          <div className="relative w-full h-[200px]">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover rounded-[15px]"
            />
          </div>
          {index === 0 && (
            <div className='mt-4 space-y-2'>
              <h3 className="text-xl text-[var(--text-primary)] font-medium">
                {name}
              </h3>
              <p className="text-sm text-[var(--text-primary)] opacity-70">
                {description.split('\n').map((line, i) => (
                  <span key={i} className="block leading-snug">
                    {line}
                  </span>
                ))}
              </p>
              <p className="text-sm text-[var(--text-primary)] opacity-80 leading-snug">
                {story}
              </p>
              <Link 
                href="#" 
                className="text-[var(--button-primary)] text-sm font-medium hover:opacity-80 bg-[#F2F2F2] px-3 py-1.5 rounded-2xl transition-opacity inline-flex items-center mt-2"
              >
                Узнать подробнее
                <svg className="ml-1 w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          )}
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex items-start gap-6">
          <div className="relative w-[310px] h-[383px] flex-shrink-0">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover rounded-[15px]"
            />
          </div>
          <div className='flex flex-col justify-between h-[383px] w-full'>
            <div className='space-y-10'>
              <h3 className="text-3xl text-[var(--text-primary)] mt-4">
          {name}
              </h3>
              <p className="text-[15px] text-[var(--text-primary)] opacity-70">
          {description.split('\n').map((line, i) => (
            <span key={i} className="block leading-snug">
              {line}
            </span>
          ))}
              </p>
              <p className="text-[15px] text-[var(--text-primary)] opacity-80 leading-snug">
          {story}
              </p>
            </div>
            <Link 
              href="#" 
              className="text-[var(--button-primary)] text-md font-medium hover:opacity-80 bg-[#F2F2F2] px-4 py-4 rounded-3xl transition-opacity inline-flex items-center w-52"
            >
              Узнать подробнее
              <svg className="ml-1 w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const Reviews = () => {
  return (
    <section className="bg-[var(--bg-section)] py-16 px-4 md:px-0 rounded-3xl">
      <div className="container mx-auto">
        <AnimatedSection direction="up">
          <h2 className="text-[32px] text-white font-semibold mb-8">
            Отзывы
          </h2>

          {/* Mobile Layout */}
          <div className="flex flex-col gap-6 md:hidden">
            {reviewsData.slice(0, 4).map((review, index) => (
              <ReviewCard key={index} {...review} index={index} />
            ))}
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:grid md:grid-cols-2 gap-6 mb-8">
            {reviewsData.map((review, index) => (
              <ReviewCard key={index} {...review} index={index} />
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <button className="bg-[var(--button-primary)] text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity font-medium text-[15px]">
              Смотреть все
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Reviews;
