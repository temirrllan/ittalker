import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';

const Rules = () => {
  return (
    <section className="relative overflow-hidden bg-[#6587C1] text-white py-16 px-4 md:px-0 rounded-xl ">
      {/* Left Blob */}
    <div className="absolute w-[667px] h-[505px] bg-[#04326F] opacity-45 rounded-full blur-[120px] z-0" style={{ top: '323px', left: '-230px' }} />

    {/* Right Blob */}
    <div className="absolute w-[299px] h-[467px] bg-[#004DFF] opacity-45 rounded-full blur-[120px] z-0" style={{ top: '204px', left: '1587px' }} />

    {/* Top Blob */}
    <div className="absolute w-[652px] h-[299px] bg-[#ECF4FF] opacity-45 rounded-full blur-[120px] z-0" style={{ top: '68px', left: '978px' }} />

    {/* Bottom Blob */}
    <div className="absolute w-[1014px] h-[299px] bg-[#ECF4FF] opacity-45 rounded-full blur-[120px] z-0" style={{ top: '887px', left: '195px' }} />
    <div className="relative z-10">
      <div className="container mx-auto">
        <AnimatedSection direction="up">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            5 правил it.t Academy
          </h2>
          <p className="text-lg md:text-xl mb-12 text-white">
            Чтобы ваше обучение действительно принесло вам пользу:
          </p>

          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2">
              <div className="bg-white rounded-[25px] p-8 h-full">
                <h3 className="text-[var(--text-primary)] text-2xl font-semibold mb-4">
                  Доступен для новичков, полезно для опытных
                </h3>
                <p className="text-[var(--text-primary)] opacity-80 mb-6">
                  Мы разделяем уже опытных IT-специалистов от тех, кто только начал свой путь в IT. Перед зачислением ученика мы оцениваем его уровень знаний и зачисляем его в соответствующую группу
                </p>
                <Link 
                  href="#" 
                  className="text-[var(--button-primary)] font-medium hover:opacity-80 transition-opacity inline-flex items-center"
                >
                  Узнать свой уровень
                  <svg className="ml-2 w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Second card - Takes 1 column in first row */}
            <div className="col-span-1">
              <div className="bg-white rounded-[25px] p-8 h-full">
                <h3 className="text-[var(--text-primary)] text-2xl font-semibold mb-4">
                  Уют
                </h3>
                <p className="text-[var(--text-primary)] opacity-80">
                  В группе не может быть больше 20 человек. Лектор запоминает каждого ученика лично, а учебный процесс становится более уютным.
                </p>
              </div>
            </div>

            {/* Third, Fourth, and Fifth cards - Each takes 1 column in second row */}
            <div className="col-span-1">
              <div className="bg-white rounded-[25px] p-8 h-full">
                <h3 className="text-[var(--text-primary)] text-2xl font-semibold mb-4">
                  От начала до конца
                </h3>
                <p className="text-[var(--text-primary)] opacity-80">
                  Лектор ведет группу от начала и до конца обучения, что позволяет ему лучше чувствовать успеваемость ученика.
                </p>
              </div>
            </div>

            <div className="col-span-1">
              <div className="bg-white rounded-[25px] p-8 h-full">
                <h3 className="text-[var(--text-primary)] text-2xl font-semibold mb-4">
                  На вопрос - отвечаем
                </h3>
                <p className="text-[var(--text-primary)] opacity-80">
                  Лектор обязан развернуто ответить в течение 24 часов на любой вопрос, заданный учеником в чате группы и касающийся обучения.
                </p>
              </div>
            </div>

            <div className="col-span-1">
              <div className="bg-white rounded-[25px] p-8 h-full">
                <h3 className="text-[var(--text-primary)] text-2xl font-semibold mb-4">
                  Помогаем. Всегда.
                </h3>
                <p className="text-[var(--text-primary)] opacity-80">
                  Если ученик просит лектора помочь с установкой ПО, которое требуется в рамках обучения, лектор обязан ему помочь (не во время real-time воркшопа).
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <div className="bg-[#285EA4] bg-opacity-50 backdrop-blur-sm rounded-[32px] px-6 py-3">
              <p className="text-sm text-white text-center">
                *актуально для тарифов &ldquo;С обратной связью&rdquo; и &ldquo;Премиум&rdquo;
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
      </div>
    </section>
  );
};

export default Rules;
