'use client'
import { useState } from 'react';
import AnimatedSection from '@/components/AnimatedSection';

interface FAQProps {
  questions: string[];
}

interface FAQItemProps {
  question: string;
  isOpen?: boolean;
  onClick: () => void;
}

const FAQItem = ({ question, isOpen = false, onClick }: FAQItemProps) => {
  return (
    <div 
      className="flex justify-between items-center w-full cursor-pointer py-6"
      onClick={onClick}
    >
      <h3 className="text-[1.25rem] font-medium leading-[109%] tracking-[-0.01em] text-black max-w-[48.875rem]">
        {question}
      </h3>
      <div className="w-[2.25rem] h-[2.25rem] bg-[#18529D] rounded-[2rem] flex items-center justify-center flex-shrink-0">
        <div className="relative w-[1rem] h-[1rem]">
          <span className={`absolute block w-full h-[0.07075rem] bg-white top-1/2 -translate-y-1/2 transition-transform ${isOpen ? 'rotate-0' : 'rotate-90'}`} />
          <span className="absolute block w-full h-[0.07075rem] bg-white top-1/2 -translate-y-1/2" />
        </div>
      </div>
    </div>
  );
};

const FAQ = ({ questions }: FAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 md:px-0">
      <div className="container mx-auto max-w-[80rem]">
        <AnimatedSection direction="up">
          <h2 className="text-[2.78rem] font-semibold leading-[129%] tracking-[-0.01em] text-[#010024] mb-8">
            Вопрос - ответ
          </h2>

          <div className="flex flex-col">
            {questions.map((question, index) => (
              <FAQItem
                key={index}
                question={question}
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
