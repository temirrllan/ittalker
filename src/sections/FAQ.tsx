'use client'
import { useState } from 'react';
import AnimatedSection from '@/components/AnimatedSection';

interface FAQProps {
  questions: string[];
}

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen?: boolean;
  onClick: () => void;
}

const FAQItem = ({ question, answer, isOpen = false, onClick }: FAQItemProps) => {
  return (
    <div className="border-b border-gray-200 last:border-none">
      <div 
        className="flex justify-between items-center w-full cursor-pointer py-6"
        onClick={onClick}
      >
        <h3 className="text-[1rem] md:text-[1.25rem] font-medium leading-[109%] tracking-[-0.01em] text-black max-w-[48.875rem]">
          {question}
        </h3>
        <div className="w-[2.25rem] h-[2.25rem] bg-[#18529D] rounded-[2rem] flex items-center justify-center flex-shrink-0">
          <div className="relative w-[1rem] h-[1rem]">
            <span className={`absolute block w-full h-[0.07075rem] bg-white top-1/2 -translate-y-1/2 transition-transform ${isOpen ? 'rotate-0' : 'rotate-90'}`} />
            <span className="absolute block w-full h-[0.07075rem] bg-white top-1/2 -translate-y-1/2" />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="pb-6">
          <p className="text-[0.875rem] md:text-[1rem] text-gray-700 whitespace-pre-line">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
};

const FAQ = ({ questions }: FAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const answers = [
    'Да, сможете! Половина учебного процесса проходит в формате воркшопов: на еженедельной онлайн-встрече лектор объясняет вам материал и отвечает на ваши вопросы. Поэтому у нас гибкая система обучения - опытных мы отправляем к опытным, новичков к новичкам. В группе для новичков материал объясняется более доступным языком со множеством примеров.',
    
    'Мы предусмотрели разделение опытных и начинающих учеников. В группу опытных мы добавляем тех, кто уже работает в какой-либо IT-профессии. Эту группу ведут сильные лекторы, которые способны обогатить профессиональный опыт ученика новыми нюансами. Поскольку все ученики в такой группе примерно одного уровня, лектору не придется долго объяснять базу и вы сможете быстро перейти к интересным нюансам, которые отделяют вас от желанного грейда.\nПоэтому да, курс будет вам полезен!',
    
    'Да! Но при соблюдении трех условий:\n1. Ученик проходил обучение по тарифам "С обратной связью" или "Премиум";\n2. Ученик выполнил все домашние задания на проходной балл в течение трех месяцев обучения;\n3. Ученик успешно прошел финальный экзамен у лектора.\n\nПосле экзамена, при соблюдении всех условий с вашей стороны, мы обязуемся предоставить вам одно собеседование в компанию одного из наших партнеров. Опытным ищем оффер, а новичкам - практику, после которой работодатель по своему усмотрению оставляет вас в штате с окладом.',
    
    'Да, вы можете купить курс в рассрочку 0-0-12. Ежемесячный платеж вы увидите ниже в разделе "Тарифы". Оставляйте заявку и наш куратор ответит на все ваши вопросы :)',
    
    'Конечно! Мы работаем с любой казахстанской компанией. Ограничений на число обучаемых нет, длительность обучения и цена для корпоративного сектора не меняется*. Ученики, как и все остальные, получат сертификат в конце обучения. Мы поможем с оформлением бумаг и возьмем на себя расходы по документообороту. Пишите на почту info@ittalker.kz, чтобы наш менеджер проконсультировал вас!\n\n*акции, скидки и промокоды не применяются.'
  ];

  return (
    <section className="py-20 md:px-0">
      <div className="container mx-auto max-w-[80rem]">
        <AnimatedSection direction="up">
          <h2 className="text-[1.75rem] md:text-[2.78rem] font-semibold leading-[129%] tracking-[-0.01em] text-[#010024] mb-8">
            Вопрос - ответ
          </h2>

          <div className="flex flex-col">
            {questions.map((question, index) => (
              <FAQItem
                key={index}
                question={question}
                answer={answers[index]}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FAQ;
