import Image from 'next/image';

const SocialLinks = () => {
  return (
    <div className='fixed bottom-8 right-8 z-50 flex gap-x-2 bg-[#6989BE] opacity-90 rounded-xl p-2 shadow-lg hover:opacity-100 transition-opacity'>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <Image 
          src="/assets/colorful/insta.svg" 
          alt="Instagram" 
          width={40}
          height={40}
          className="cursor-pointer hover:opacity-80 transition-opacity"
        />
      </a>
      <a href="https://t.me" target="_blank" rel="noopener noreferrer">
        <Image 
          src="/assets/colorful/tg.svg" 
          alt="Telegram" 
          width={40}
          height={40}
          className="cursor-pointer hover:opacity-80 transition-opacity"
        />
      </a>
    </div>
  );
};

export default SocialLinks;