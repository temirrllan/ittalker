'use client'

import AnimatedSection from '@/components/AnimatedSection';
import Image from 'next/image';
import Link from 'next/link';


interface PriceCardProps {
  title: string;
  price: string;
  features: string[];
  monthlyPayment?: {
    months: string;
    amount: string;
  };
}

const PriceCard = ({ title, price, features, monthlyPayment }: PriceCardProps) => {
  return (
    <div className="bg-white rounded-[22px] flex flex-col h-full">
      <div className="relative">
        <div className="bg-[#18529D] text-white text-xl font-semibold py-3 md:py-4 px-4 md:px-8 rounded-b-[22px] text-center mx-12 md:mx-20">
          {price}
        </div>
      </div>

      <div className="p-4 md:p-8 flex flex-col h-full">
        <h3 className="text-2xl md:text-[32px] font-semibold text-[var(--text-primary)] mb-6 md:mb-8">
          {title}
        </h3>

        <div className="flex-grow">
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-baseline gap-2 md:gap-3">
                <span className="text-base md:text-lg leading-none">•</span>
                <span className="text-sm md:text-base font-medium whitespace-pre-line leading-snug">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {monthlyPayment && (
          <div className="mt-4 md:mt-6">
            <Link 
              href="#" 
              className="flex items-center gap-2 md:gap-3 bg-[#EBF3FF] rounded-[15px] p-3 md:p-4 hover:bg-[#E3EFFF] transition-colors group"
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
              <svg className="w-4 h-4 md:w-5 md:h-5 ml-auto text-[#006DFC] opacity-70 group-hover:opacity-100" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
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
        'Индивидуальные созвоны с\nлектором каждые 2 недели\nдлительностью до часа, на\nкоторых вы: закрепляете вопросы\nпо образовательной программе;\nразбираете кейс на вашем\nтекущем работе; получаете CV и\nтд далее',
        'Индивидуальная обратная связь\nпо домашним заданиям'
      ],
      monthlyPayment: {
        months: '0-0-12',
        amount: '82 500 тг/мес'
      }
    }
  ];

  return (
    <section className="py-8 md:py-16 px- md:px-0 bg-[#1A549E] rounded-3xl">
      <div className="container mx-auto">
        <AnimatedSection direction="up">
          <h2 className="text-2xl md:text-[32px] font-semibold mb-8 md:mb-12 text-white">
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