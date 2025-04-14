import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';

const badges = [
  { text: '12 недель', bgColor: 'bg-[#3478F6]', textColor: 'text-white' },
  { text: 'Набор открыт', bgColor: 'bg-[#F1F6FF]', textColor: 'text-[#3478F6]' },
  { text: 'Доступ 6 месяцев', bgColor: 'bg-[#F1F6FF]', textColor: 'text-[#3478F6]' },
];

const listItems = [
  'в начале недели на образовательной платформе вам предоставляется теоретический материал, который необходимо изучить перед воркшопом',
  'в конце недели на воркшопе в режиме реального времени вы практикуетесь вместе с лектором. Все воркшопы записываются, поэтому пропуск воркшопа не скажется на вашей успеваемости',
  'после воркшопа вы делаете ДЗ по пройденной теме',
];

const AboutHero = () => {
  return (
    <section className="py-10 sm:py-16 md:py-20 px-4 md:px-0">
      <div className="container mx-auto">
        <AnimatedSection direction="up">
          <div className="max-w-[91.625rem] mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.78rem] font-semibold leading-[129%] tracking-[-0.01em] text-[#010024] mb-4 md:mb-6">
                  Об образовательной программе
                </h1>
                
                <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-8 md:mb-12">
                  {badges.map((badge, index) => (
                    <div 
                      key={index}
                      className={`flex items-center ${badge.bgColor} px-3 sm:px-5 py-1.5 sm:py-2 rounded-[6.25rem]`}
                    >
                      <span className={`text-sm sm:text-base md:text-lg font-medium ${badge.textColor}`}>
                        {badge.text}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-4 sm:gap-6">
                  <p className="text-sm sm:text-base md:text-lg leading-[150%] text-[#000000]">
                    Каждый модуль состоит из 3 частей: записанная теория, воркшоп, домашнее задание*. Обучение происходит по схеме:
                  </p>
                  <ul className="flex flex-col gap-4 sm:gap-6">
                    {listItems.map((item, index) => (
                      <li key={index} className="text-sm sm:text-base md:text-lg leading-[150%] text-[#000000]">
                        • {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm sm:text-base md:text-lg leading-[150%] text-[#000000]">
                    ДЗ и практика на воркшопах максимально приближены к реальным рабочим, &ldquo;боевым&rdquo; задачам системного аналитика.
                  </p>
                </div>
              </div>

              <div className="bg-[#F8F8F8] rounded-[1rem] md:rounded-[1.375rem] p-4 sm:p-6 md:p-8 h-full">
                <div className="relative aspect-[4/3] w-full">
                  <Image 
                    src="/assets/about-hero.png" 
                    alt="About Hero"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-[#E3EDFF] rounded-[0.5rem] sm:rounded-[0.625rem]">
                  <p className="text-sm sm:text-base md:text-lg leading-[129%] text-[#000000]">
                    Специально для наших учеников мы разработали <span className="font-semibold">онлайн-магазин</span> с полноценным back-end и front-end, в котором вы будете работать под руководством лектора. Настоящая живая практика как на работе!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AboutHero;
