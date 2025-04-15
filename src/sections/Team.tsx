import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';

interface TeamMemberProps {
  name: string;
  surname: string;
  role: string;
  image: string;
  socialType: 'linkedin' | 'telegram';
  socialLink: string;
  badge?: string;
}

const teamMembers: TeamMemberProps[] = [
  {
    name: 'Арсен',
    surname: 'Курмашев',
    role: 'Старший и ведущий SA в T-bank, Tele2, Uzum, Сбер, Альфа-банк',
    image: '/assets/arsen.png',
    socialType: 'linkedin',
    socialLink: '#',
    badge: 'it.talker'
  },
  {
    name: 'Адиль',
    surname: 'Франк',
    role: 'Co-founder &CEO it.t.Academy',
    image: '/assets/adil.png',
    socialType: 'telegram',
    socialLink: '#',
    badge: 'CEO'
  },
  {
    name: 'Михаил',
    surname: 'Черкашин',
    role: 'Главный SA Ренессанс Кредит',
    image: '/assets/mikhail.png',
    socialType: 'linkedin',
    socialLink: '#'
  }
];

const SocialButton = ({ type, link }: { type: 'linkedin' | 'telegram', link: string }) => {
  return (
    <Link 
      href={link}
      className="inline-flex items-center justify-between gap-2 bg-[#3478F6] text-white pl-4 pr-2 py-2 rounded-[100px] hover:opacity-90 transition-opacity text-sm font-medium w-[124px]"
    >
      <span>{type === 'linkedin' ? 'LinkedIn' : 'Telegram'}</span>
      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.16675 7.00008H12.8334M12.8334 7.00008L7.00008 1.16675M12.8334 7.00008L7.00008 12.8334" 
            stroke="#3478F6" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"/>
        </svg>
      </div>
    </Link>
  );
};

const TeamMemberCard = ({ name, surname, role, image, socialType, socialLink, badge }: TeamMemberProps) => {
  return (
    <div className="bg-[#FAFAFA] rounded-[22px] p-6 min-h-[260px] h-full">
      <div className="flex flex-col md:flex-row gap-6 h-full">
        <div className="relative w-full md:w-[200px] h-[180px] md:h-[192px] bg-[#E9E9E9] rounded-[20px] overflow-hidden flex-shrink-0">
          <Image
            src={image}
            alt={`${name} ${surname}`}
            fill
            className="object-cover object-top mix-blend-multiply grayscale"
          />
          {badge && (
            <div className="absolute bottom-0 right-0 bg-[#D9D9D9] px-3 py-1 rounded-[10px]">
              <span className="text-[16px] md:text-[18px] font-semibold text-[#18529D]">
                {badge}
              </span>
            </div>
          )}
        </div>
        <div className="flex flex-col justify-between flex-grow py-1 w-full md:w-auto">
          <div className="space-y-2">
            <h3 className="text-[20px] md:text-[24px] font-medium leading-[129%] tracking-[-0.01em] text-black">
              {name} {surname}
            </h3>
            <p className="text-[13px] md:text-[14px] leading-[129%] tracking-[-0.01em] text-black opacity-60 whitespace-pre-line w-full">
              {role}
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <SocialButton type={socialType} link={socialLink} />
          </div>
        </div>
      </div>
    </div>
  );
};

const Team = () => {
  return (
    <section className="py-8 md:py-16 px-4 md:px-0">
      <div className="container mx-auto max-w-[1280px]">
        <AnimatedSection direction="up">
          <h2 className="text-[32px] md:text-[45px] font-semibold leading-[129%] tracking-[-0.01em] text-[#010024] mb-8 md:mb-12">
            Команда it.t Academy
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} {...member} />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Team;