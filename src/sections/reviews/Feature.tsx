'use client'

import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';

interface FeatureSectionProps {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
  buttonText?: string;
  location?: string;
}

const featureSectionsData: FeatureSectionProps[] = [
  {
    title: 'Трудоустройство и нетворкинг',
    description: 'В конце обучения мы приглашаем каждого ученика в закрытый чат выпускников. Там мы публикуем только подтвержденные вакансии, полезную информацию, а также устраиваем сходки и другие офлайн-мероприятия. Доступ к чату имеют выпускники со всех потоков!',
    image: '/assets/job-placement.png'
  },
  {
    title: 'Общение с лекторами. Бесплатно. Навсегда.',
    description: 'В закрытом чате находятся не только выпускники, но также и наши лекторы. На любой вопрос ученика лектор даст ответ, даже если ученик уже давно закончил у нас обучение.',
    image: '/assets/lecturer-communication.png',
    reverse: true
  },
  {
    title: 'After Party!',
    description: 'Совместное обучение сплачивает людей. Поэтому раз в 3 месяца мы проводим After Party для учеников со всех потоков. Там вы найдете полезные и приятные знакомства, контакты с будущими работодателями, коллегами, партнерами и единомышленниками.',
    image: '/assets/afterparty.png',
    location: 'На данный момент After Party проводим в городах Алматы и Астана.'
  }
];

const FeatureSection = ({ title, description, image, reverse = false, buttonText, location }: FeatureSectionProps) => {
  return (
    <div className={`bg-[var(--bg-section)] py-8 md:py-16 px-4 md:px-0 rounded-3xl mb-6`}>
      <div className="container mx-auto">
        <AnimatedSection direction="up">
          <div className={`flex flex-col ${reverse ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-6 md:gap-10`}>
            <div className="w-full md:w-1/2">
              <div className="relative w-full aspect-[4/3] md:aspect-[16/9]">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
            </div>
            
            <div className="w-full md:w-1/3 text-white">
              <h2 className="text-2xl md:text-3xl font-medium mb-4">{title}</h2>
              <p className="text-sm md:text-base opacity-90 mb-4">{description}</p>
              {location && (
                <p className="text-sm md:text-base opacity-80 mt-4">{location}</p>
              )}
              {buttonText && (
                <button className="bg-[var(--button-primary)] text-white px-6 py-2.5 rounded-lg hover:opacity-90 transition-opacity font-medium text-sm md:text-base mt-4">
                  {buttonText}
                </button>
              )}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

const FeatureSections = () => {
  return (
    <section className="py-8 md:py-16">
      <div className="container mx-auto">
        {featureSectionsData.map((feature, index) => (
          <FeatureSection 
            key={index} 
            {...feature} 
          />
        ))}
      </div>
    </section>
  );
};

export default FeatureSections;