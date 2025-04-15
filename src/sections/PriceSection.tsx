'use client'

import AnimatedSection from '@/components/AnimatedSection';
import Image from 'next/image';
import Link from 'next/link';


interface FeatureItem {
  text: string;
  indent?: boolean;
}

interface PriceCardProps {
  title: string;
  price: string;
  features: (string | FeatureItem)[];
  monthlyPayment?: {
    months: string;
    amount: string;
  };
}

const PriceCard = ({ title, price, features, monthlyPayment }: PriceCardProps) => {
  return (
    <div className="bg-[#F5F9FF]  rounded-[22px] flex flex-col h-full">
      <div className="relative">
        <div className="bg-[#18529D] text-white text-2xl font-semibold py-3 md:py-4 px-4 md:px-8 rounded-b-[22px] text-center mx-12 md:mx-20">
          {price}
        </div>
      </div>

      <div className="p-4 px-6 md:p-8 md:px-10 flex flex-col h-full ">
        <h3 className="text-2xl md:text-[32px] text-center font-semibold text-[#18529D] mb-2 md:mb-4">
          {title}
        </h3>

        <div className="flex-grow">
          <ul className='list-none'>
          {features.map((feature, index) => {
            const isObject = typeof feature === 'object';
            const text = isObject ? feature.text : feature;

            const isIntroLine = !isObject && text.includes('дополнительно:');

            return (
              <li
          key={index}
          className={`flex items-start gap-2 md:gap-3
          ${
            isIntroLine ? '' : 'pl-8 md:pl-8'
          }
          `}
              >
          <span className={`text-base md:text-md leading-none mt-1 ${isIntroLine ? 'invisible ' : ''}`}>
            •
          </span>
          <span className="text-sm md:text-base font-medium whitespace-pre-line leading-snug text-left">
            {text}
          </span>
              </li>
            );
          })}
          </ul>
        </div>

        {monthlyPayment && (
          <div className="mt-4 md:mt-6">
            <Link 
              href="#" 
              className="flex items-center gap-2 md:gap-3 bg-[#EBF3FF] border-[#006DFC] border  rounded-[22px] p-3 md:p-4 hover:bg-[#E3EFFF] transition-colors group"
            >
              <div className="w-8 h-8 md:w-10 md:h-10 relative flex-shrink-0">
                <Image
                  src="/assets/kaspi.png"
                  alt="Kaspi Bank"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <div className="text-[13px] md:text-[15px] text-[var(--text-primary)] opacity-70">
                  {monthlyPayment.months}
                </div>
                <div className="text-[var(--text-primary)] font-medium text-base md:text-[20px]">
                  {monthlyPayment.amount}
                </div>
              </div>
              <img src='/assets/arrow.svg' alt='arrow-right' className='w-8 h-8 ml-14' />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

const PriceSection = () => {
  const priceCards = [
    {
      title: 'Базовый',
      price: '250 000 тг',
      features: [
        'Все уроки курса',
        'Записанные воркшопы',
        'Занятия доступны сразу.\nПрохождение - в вашем темпе',
        'Доступ на 6 месяцев'
      ],
      monthlyPayment: {
        months: '0-0-12',
        amount: '20 830 тг/мес'
      }
    },
    {
      title: 'С обратной связью',
      price: '500 000 тг',
      features: [
        'Все уроки курса',
        'Живые воркшопы с лектором и\nпрактика + их записи',
        'Наставник, который онлайн-\nнаправит с большим багажом, как на\nработе системного аналитика',
        'Доступ к чату группы, где лектор\nобязан отвечать на любой ваш\nвопрос в течение 24 часов',
        'Обратная связь по всем вашим\nдомашним заданиям, помощь в\nустановке и настройке ПО',
        'Доступ к закрытому чату\nвыпускников, где мы публикуем\nценную информацию, вакансии,\nорганизуем нетворкинг',
        'Сертификат о прохождении обучения',
        'Доступ на 6 месяцев'
      ],
      monthlyPayment: {
        months: '0-0-12',
        amount: '41 660 тг/мес'
      }
    },
    {
      title: 'Премиум',
      price: '990 000 тг',
      features: [
        'Все перечисленное в тарифе "С\nобратной связью", и дополнительно:',
        { indent: true, text: 'Индивидуальные созвоны с лектором один раз в неделю длительностью до часа, на которых вы: закрываете вопросы по образовательной программе; разбираете кейс на вашей текущей работе; улучшаете CV и так далее' },
        { indent: true, text: 'Индивидуальная обратная связь\nпо домашним заданиям' }
      ],
      monthlyPayment: {
        months: '0-0-12',
        amount: '82 500 тг/мес'
      }
    }
  ];

  return (
    <section className="py-8 md:py-16 px- md:px-0 bg-[#1A549E] rounded-3xl relative overflow-hidden">
        <div 
          className="absolute w-[499px] h-[297px] left-[2%] top-[11%] opacity-30 blur-[100px]"
          style={{
            background: '#ECF4FF',
            borderRadius: '499px/297px'
          }}
        />
        <div 
          className="absolute w-[499px] h-[297px] left-[30.7%] top-[8.6%] opacity-30 blur-[100px]"
          style={{
            background: '#ECF4FF',
            borderRadius: '499px/297px'
          }}
        />
        <div 
          className="absolute w-[555px] h-[297px] left-[60.2%] top-[11%] opacity-45 blur-[100px]"
          style={{
            background: '#ECF4FF',
            borderRadius: '555px/297px'
          }}
        />
        {/* Bottom ellipse */}
        <div 
          className="absolute w-[2001px] h-[320px] -left-[20.4%] top-[67.3%] opacity-30 blur-[100px]"
          style={{
            background: '#FFFFFF',
            borderRadius: '2001px/355px'
          }}
        />
      
      <div className="container mx-auto relative z-10">
        <AnimatedSection direction="up">
          <h2 className="text-2xl md:text-[38px] font-semibold mb-8 md:mb-12 text-white">
            Тарифы
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-6">
            {priceCards.map((card, index) => (
              <PriceCard key={index} {...card} />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PriceSection;