import Card from '../components/Card';
import AnimatedSection from '@/components/AnimatedSection';


function AboutUs() {
  const advantages = [
    {
      title: 'Работа и стажировка',
      description: '5 лучших учеников с группы получат рекомендации в российские и казахстанские компании. Студентам помогаем со стажировкой'
    },
    {
      title: 'Лучшие преподаватели',
      description: 'Наши лекторы - старшие и ведущие системные аналитики из топовых финтех-компаний России'
    },
    {
      title: 'Уникальный формат обучения',
      description: 'В каждой группе всего 15 человек, поэтому каждый ученик получит индивидуальное внимание'
    },
    {
      title: 'Максимум практической пользы',
      description: 'Мы создали онлайн-магазин на своей базе данных. И вы будете практиковать SA прямо в ней!'
    }
  ];

  const stats = [
    {
      count: '70+',
      description: 'компаний-партнеров в РФ и Казахстане'
    },
    {
      count: '2000$',
      description: 'средняя зарплата системного аналитика'
    }
  ];

  return (
    <section id="about" className="section bg-white py-16">
      <div className="container">
        {/* Advantages Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {advantages.map((advantage, index) => (
            <AnimatedSection key={advantage.title} delay={index * 0.1}>
              <Card className="h-full">
                <h3 className="text-md break-words mb-4 text-black">{advantage.title}</h3>
                <p className="text-[#2D2F32]">{advantage.description}</p>
              </Card>
            </AnimatedSection>
          ))}
        </div>


        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <img 
              src="/assets/about.png" 
              alt="About us" 
              className="rounded-lg"
            />
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <h2 className="text-3xl md:text-4xl md:font-[550] mb-6">О нас</h2>
            <div className="space-y-4 mb-20">
              <p>
                it.t Academy выросла из обычного блога про айти: Арсен
                &quot;it talker&quot; просто рассказывал в инстаграме о своем пути в SA.
              </p>
              <p>
                За пять лет карьера развилась от SA middle в топовом
                финтехе РФ до позиций ведущего системного аналитика, и
                этот рост наблюдали подписчики Арсена. Так постепенно
                сформировалось сплоченное комьюнити SA.
              </p>
              <p>
                Цель нашей школы - давать ученикам наилучшее
                образование SA на рынке СНГ. Для этого мы организовали
                наиболее удобный и эффективный для вас учебный процесс
              </p>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <AnimatedSection key={stat.count} delay={0.3 + index * 0.1}>
                  <div>
                    <div className="bg-gradient-to-t from-[#3075CE] to-[#9ABBE6] bg-clip-text text-transparent text-3xl md:text-5xl mb-2">
                      {stat.count}
                    </div>
                    <p className="text-sm md:text-base">{stat.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;