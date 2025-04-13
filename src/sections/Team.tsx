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
    role: 'Старший и\nведущий SA в T-\nbank, Tele2, Uzum,\nСбер, Альфа-банк',
    image: '/assets/arsen.png',
    socialType: 'linkedin',
    socialLink: '#',
    badge: 'it.talker'
  },
  {
    name: 'Адиль',
    surname: 'Франк',
    role: 'Co-founder\n&CEO\nit.t.Academy',
    image: '/assets/adil.png',
    socialType: 'telegram',
    socialLink: '#',
    badge: 'CEO'
  },
  {
    name: 'Михаил',
    surname: 'Черкашин',
    role: 'Главный SA\nРенессанс\nКредит',
    image: '/assets/mikhail.png',
    socialType: 'linkedin',
    socialLink: '#'
  }
];

const SocialButton = ({ type, link }: { type: 'linkedin' | 'telegram', link: string }) => {
  return (
    <Link 
      href={link}
      className="inline-flex items-center gap-2 bg-[#3478F6] text-white pl-4 py-2 rounded-[100px] hover:opacity-90 transition-opacity text-sm font-medium w-28"
    >
      {type === 'linkedin' ? 'LinkedIn' : 'Telegram'}
      <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
      </svg>
    </Link>
  );
};

const TeamMemberCard = ({ name, surname, role, image, socialType, socialLink, badge }: TeamMemberProps) => {
  return (
    <div className="bg-[#FAFAFA] rounded-[22px] p-4 md:p-6 min-h-[280px] md:h-[324px]">
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 h-full">
        <div className="relative w-full md:w-[180px] h-[200px] md:h-[180px] bg-[#E9E9E9] rounded-[20px] overflow-hidden flex-shrink-0">
          <Image
            src={image}
            alt={`${name} ${surname}`}
            fill
            className="object-cover mix-blend-multiply grayscale"
          />
          {badge && (
            <div className="absolute bottom-0 right-0 bg-[#D9D9D9] px-3 py-1 rounded-tl-[10px] rounded-br-[20px]">
              <span className="text-[16px] md:text-[22px] font-semibold text-[#18529D]">
                {badge}
              </span>
            </div>
          )}
        </div>
        <div className="flex flex-col justify-between flex-grow py-1 w-full md:w-auto">
          <div className="space-y-2 md:space-y-3">
            <h3 className="text-[20px] md:text-[25px] font-medium leading-[129%] tracking-[-0.01em] text-black">
              {name}<br/>{surname}
            </h3>
            <p className="text-[13px] md:text-[15px] leading-[129%] tracking-[-0.01em] text-black opacity-60 whitespace-pre-line w-full">
              {role}
            </p>
          </div>
          <div className="mt-3 md:mt-0">
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