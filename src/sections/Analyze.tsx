import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';

const SystemsAnalyst = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-0 rounded-xl">
      <div className="container mx-auto">
        <AnimatedSection direction="up">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Column - Text Information */}
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                О системном анализе
              </h2>
              <p className="text-lg mb-4">
                Системный аналитик <span className="text-blue-600">не пишет код</span>, но зарабатывает
                не меньше разработчика.
              </p>
              <p className="text-lg mb-8">
                Благодаря работе SA разработчики не будут зря тратить свое
                время, а компания сэкономит деньги: системный аналитик должен
                собрать и проанализировать требования бизнеса, а затем
                передать отделу разработки свои соображения в виде ТЗ.
              </p>
              
              <Link 
                href="/program" 
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-full inline-flex items-center transition-all"
              >
                Программа курса
                <svg className="ml-2 w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
            
            {/* Right Column - Stats */}
            <div className="grid grid-cols-2 gap-8">
              <div className="mb-8">
                <h3 className="text-4xl font-bold text-blue-400 mb-2">3 года</h3>
                <p className="text-gray-700">
                  занимает путь от старта в профессии до middle+ согласно исследованиям CV от hh.kz
                </p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-4xl font-bold text-blue-400 mb-2">3000+</h3>
                <p className="text-gray-700">
                  открытых вакансий в ЕАЭС согласно данным hh.kz
                </p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-4xl font-bold text-blue-400 mb-2">70+</h3>
                <p className="text-gray-700">
                  Компаний - партнеров в Казахстане и РФ
                </p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-4xl font-bold text-blue-400 mb-2">3000$</h3>
                <p className="text-gray-700">
                  Средняя зарплата системного аналитика уровня Senior согласно исследованиям CV от hh.kz
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
        
        {/* Salary Section */}
        <AnimatedSection direction="up" className="mt-24">
          <div className="bg-gray-50 p-12 rounded-3xl">
            <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">
              Средняя зарплата системного аналитика
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Junior Level */}
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <div className="flex justify-center mb-4">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full">Junior</span>
                </div>
                <p className="text-gray-600 mb-4 text-center">Сразу после курса</p>
                <h3 className="text-4xl text-blue-400 font-bold text-center">400 000 тг</h3>
              </div>
              
              {/* Middle Level */}
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <div className="flex justify-center mb-4">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full">Middle</span>
                </div>
                <p className="text-gray-600 mb-4 text-center">Через 1-3 года</p>
                <h3 className="text-4xl text-blue-400 font-bold text-center">900 000 тг</h3>
              </div>
              
              {/* Senior Level */}
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <div className="flex justify-center mb-4">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full">Senior</span>
                </div>
                <p className="text-gray-600 mb-4 text-center">Через 3-5 лет</p>
                <h3 className="text-4xl text-blue-400 font-bold text-center">1 500 000 тг</h3>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default SystemsAnalyst;