import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';

const stats = [
  {
    title: "3 года",
    description: "занимает путь от старта в профессии*",
  },
  {
    title: "3000+",
    description: "открытых вакансий в ЕАЭС*",
  },
  {
    title: "70+",
    description: "Компаний - партнеров в Казахстане и РФ*",
  },
  {
    title: "3000$",
    description: "Средняя зарплата системного аналитика уровня Senior*",
  },
];

const levels = [
    { title: "Junior", desc: "Сразу после курса", price: "400 000 тг" },
    { title: "Middle", desc: "Через 1-3 года", price: "900 000 тг" },
    { title: "Senior", desc: "Через 3-5 лет", price: "1 500 000 тг" },
];

interface SystemsAnalystProps {
  openModal: () => void;
}

const SystemsAnalyst = ({ openModal }: SystemsAnalystProps) => {
  return (
    <section className="bg-white py-20 md:px-0 rounded-xl">
      <div className="container mx-auto">
      <AnimatedSection direction="up">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] md:gap-6 items-start">
            {/* Left Column */}
            <div className='h-full flex flex-col items-start justify-between'>
                <div>
                <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                О системном анализе
            </h2>
            <p className="text-md mb-4 font-medium">
                Системный аналитик <span className="text-[#0052BE]">не пишет код</span>, но зарабатывает <br />
                не меньше разработчика.
            </p>
            <p className="text-md mb-8 font-medium">
                Благодаря работе SA разработчики не будут зря тратить свое
                время, а компания сэкономит деньги: системный аналитик должен
                собрать и проанализировать требования бизнеса, а затем
                передать отделу разработки свои соображения в виде ТЗ.
            </p>
                </div>

            <Link 
                href="/about" 
                className="bg-[#006DFC] hover:bg-blue-600 text-lg text-white font-medium py-3 px-6 rounded-2xl inline-flex items-center transition-all mb-8 md:mb-0"
            >
                Программа курса
                <svg className="ml-2 w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
            </Link>
            </div>

            {/* Divider - Vertical on desktop, Horizontal on mobile */}
            <div className="md:hidden w-full h-px bg-[#B2D3FE] my-8"></div>
            <div className="hidden md:flex justify-center mx-12 py-10 self-stretch">
                <div className="w-px bg-[#B2D3FE]"></div>
            </div>

            {/* Right Column - Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10 px-10 md:px-0">
            {stats.map(({ title, description }, i) => (
                <div key={i} className="mb-8">
                <h3
                    className="text-4xl font-medium mb-2 text-transparent bg-clip-text"
                    style={{
                    backgroundImage: "linear-gradient(180deg, #9ABBE6 0%, #3075CE 100%)",
                    }}
                >
                    {title}
                </h3>
                <p className="font-medium text-sm">
                  {description.split('\n').map((line, idx) => (
                    <span key={idx}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
                </div>
            ))}
            <p className='font-medium text-sm text-[#0052BE] -mt-10 pb-9 md:pb-0 md:mt-0'>согласно данным hh.kz*</p>
            </div>
        </div>
        </AnimatedSection>
        
        {/* Salary Section */}
        <AnimatedSection direction="up" className="md:mt-24">
          <div className="bg-[#F8F8F8] p-8 md:p-12 rounded-3xl">
            <h2 className="text-2xl md:text-4xl font-medium mb-5 text-start">
              Средняя зарплата системного аналитика
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-10">
                {levels.map(({ title, desc, price }) => (
                    <div key={title} className="bg-white p-4 md:p-8 rounded-2xl shadow-sm gap-3 md:gap-6 border-[1px] border-[#E5E5E5] ">
                    <div>
                        <span className="bg-[#6F95D7] text-white px-4 py-1 rounded-full">{title}</span>
                    </div>
                    <p className="text-[#808080] mt-8 mb-6 text-left text-md md:text-xl">{desc}</p>
                    <h3 className="text-3xl md:text-5xl font-semibold text-left bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(180deg, #9ABBE6 0%, #3075CE 100%)' }}>
                        {price}
                    </h3>
                    </div>
                ))}
                </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default SystemsAnalyst;