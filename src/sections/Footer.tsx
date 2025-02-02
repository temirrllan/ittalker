'use client';  // Add this since we're using client-side features

import AnimatedSection from '@/components/AnimatedSection';
import { motion } from 'framer-motion';

export default function Footer() {
  const menuLinks = [
    'Курсы',
    'О нас',
    'Преимущества',
    'Отзывы',
    'Контакты'
  ];

  return (
    <footer id="contacts" className="bg-[#0A1628] text-white py-8 md:py-12 lg:py-16 font-semibold">
      <div className="container">
        {/* Top Section */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12 mb-12">
          {/* Logo and Legal Links */}
          <AnimatedSection direction="left" className="space-y-4 w-full lg:w-auto">
            <img 
              src="/assets/header-logo.png" 
              alt="it.talker" 
              className="h-8"
            />
            <div className="space-y-2">
              <a href="https://docs.google.com/document/d/1SEiKgYCyK3F5l-6nFPTyilQtbWr74gsrPql9j5RV9-k/edit?usp=sharing" className="block text-base lg:text-lg opacity-80 hover:opacity-100">
                Политика конфиденциальности
              </a>
              <a href="#" className="block text-base lg:text-lg opacity-80 hover:opacity-100">
                Публичная оферта
              </a>
            </div>
          </AnimatedSection>

          {/* Menu */}
          <AnimatedSection direction="up" delay={0.2} className="w-full lg:w-auto mt-8 lg:mt-0">
            <h3 className="font-semibold mb-4 text-xl">Меню</h3>
            <ul className="space-y-3">
              {menuLinks.map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`} 
                    className="text-base lg:text-lg opacity-80 hover:opacity-100"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          {/* Contacts */}
          <AnimatedSection direction="right" delay={0.3} className="w-full lg:w-auto mt-8 lg:mt-0">
            <h3 className="font-semibold mb-4 text-xl">Контакты</h3>
            <div className="space-y-4">
              <div className="flex flex-col space-y-4">
                <a 
                  href="https://www.instagram.com/ittalker.academy?igsh=MTNrbGh0b3k5NTlmbg==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 flex items-center justify-center">
                    <img src="/assets/instagram.svg" alt="Instagram" className="w-8 h-8" />
                  </div>
                  <span className="text-base lg:text-lg opacity-80 hover:opacity-100">
                    it.talker.academy
                  </span>
                </a>

                <a 
                  href="https://wa.me/+77074045753" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 flex items-center justify-center">
                    <img src="/assets/whatsapp.svg" alt="WhatsApp" className="w-8 h-8" />
                  </div>
                  <span className="text-base lg:text-lg opacity-80 hover:opacity-100">
                    +7(707) 404 57 53
                  </span>
                </a>

                <a 
                  href="https://t.me/ittacademy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 flex items-center justify-center">
                    <img src="/assets/tg.png" alt="Telegram" className="w-10 h-10" />
                  </div>
                  <span className="text-base lg:text-lg opacity-80 hover:opacity-100">
                    it.talker.academy
                  </span>
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Bottom Section */}
        <AnimatedSection delay={0.4}>
          <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-8 lg:gap-0">
            <p className="text-sm opacity-60 text-center lg:text-left">
              2024 все права защищены
            </p>
            <div className="flex items-center gap-10 lg:gap-8">
              <p className="text-sm lg:text-md opacity-80">
                Разработано<br />студией
              </p>
              <motion.img 
                src="/assets/footer-icon.png" 
                alt="Dala Digital" 
                className="w-24 lg:w-28 h-12 lg:h-14"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  );
} 