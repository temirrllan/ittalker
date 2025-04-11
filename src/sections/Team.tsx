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
      className="inline-flex items-center gap-2 bg-[#3478F6] text-white px-4 py-2 rounded-[100px] hover:opacity-90 transition-opacity text-[0.9375rem] font-semibold"
    >
      {type === 'linkedin' ? 'LinkedIn' : 'telegram'}
      <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
      </svg>
    </Link>
  );
};

const TeamMemberCard = ({ name, surname, role, image, socialType, socialLink, badge }: TeamMemberProps) => {
  return (
    <div className="relative w-full max-w-[30rem] mx-auto">
      <div className="bg-[#FAFAFA] rounded-[1.375rem] p-10 min-h-[18.75rem] relative">
        <div className="flex">
          <div className="relative w-[40rem] h-[13.75rem] bg-[#C8C8C8] rounded-[1.25rem] overflow-hidden">
            <Image
              src={image}
              alt={`${name} ${surname}`}
              fill
              className="object-cover mix-blend-multiply"
            />
            {badge && (
              <div className="absolute bottom-0 right-0 bg-[#D9D9D9] px-4 py-1.5 rounded-l-[0.625rem] rounded-br-[1.25rem]">
                <span className="text-[1.375rem] font-semibold text-[#18529D]">
                  {badge}
                </span>
              </div>
            )}
          </div>
          <div className="ml-6 flex flex-col">
            <h3 className="text-[1.5625rem] font-medium leading-[129%] tracking-[-0.01em] text-black mb-3">
              {name}<br/>{surname}
            </h3>
            <p className="text-[0.9375rem] leading-[129%] tracking-[-0.01em] text-black opacity-60 mb-8">
              {role}
            </p>
            <div className="mt-auto">
              <SocialButton type={socialType} link={socialLink} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Team = () => {
  return (
    <section className="py-16 px-4 md:px-0">
      <div className="container mx-auto">
        <AnimatedSection direction="up">
          <h2 className="text-[2.78rem] font-semibold leading-[129%] tracking-[-0.01em] text-[#010024] mb-12">
            Команда it.t Academy
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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