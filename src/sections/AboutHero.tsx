import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';

const badges = [
  { text: '12 недель', bgColor: 'bg-[#5283D8]', textColor: 'text-white' },
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
    <section className="bg-white pt-8 pb-16 sm:pt-12 sm:pb-16 md:pt-14 md:pb-20 px-4 md:px-0 rounded-5xl z-50">
      <div className="container mx-auto">
        <AnimatedSection direction="up">
          <div className="max-w-[91.625rem] mx-auto">
            <div className="grid md:grid-cols-2 gap-2 md:gap-12">
              <div>
              <h1 className="text-2xl leading-[32px] sm:text-2xl sm:leading-[34px] md:text-3xl md:leading-[43px] lg:text-[2.58rem] lg:leading-[45px] font-semibold tracking-[-0.01em] text-[#010024] mb-4 md:mb-6">
                Об образовательной программе
              </h1>

                
                <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-5 md:mb-5">
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
                  <p className="text-sm sm:text-base md:text-m leading-[150%] text-[#000000]">
                    Каждый модуль состоит из 3 частей: записанная теория, воркшоп, домашнее задание*. Обучение происходит по схеме:
                  </p>
                  <ul className="flex flex-col">
                    {listItems.map((item, index) => (
                      <li key={index} className="text-sm sm:text-base md:text-m leading-[150%] text-[#000000]">
                        • {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm sm:text-base md:text-m leading-[150%] text-[#000000]">
                    ДЗ и практика на воркшопах максимально приближены к реальным рабочим, &ldquo;боевым&rdquo; задачам системного аналитика.
                  </p>
                </div>
              </div>

              <div className="relative md:-top-5 rounded-[1rem] md:rounded-[1.375rem] h-full">
                <div className="relative aspect-[4/3] w-full">
                  <Image 
                    src="/assets/about-hero.png" 
                    alt="About Hero"
                    fill
                    className="object-contain"
                  />
                  
                  <div className="absolute -bottom-20 left-4 z-10 p-4 sm:p-6 bg-[#CADEFF]/70 backdrop-blur-[10px] rounded-[1.5rem] sm:rounded-[1.625rem] max-w-[90%]">
                    <p className="
                      text-sm leading-[18px] 
                      sm:text-base sm:leading-[20px] 
                      md:text-m md:leading-[24px] 
                      text-[#000000]"
                    >
                      Специально для наших учеников мы разработали <span className="font-semibold">онлайн-магазин</span> с полноценным back-end и front-end, в котором вы будете работать под руководством лектора. Настоящая живая практика как на работе!
                    </p>
                  </div>
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
