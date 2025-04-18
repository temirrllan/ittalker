'use client'
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface NavbarProps {
  bgColor?: string;
}

function Navbar({ bgColor }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const router = useRouter();

  const navLinks = [
    {
      id: 'about',
      name: 'Программа курса',
      type: 'page'
    },
    {
      id: 'reviews',
      name: 'Отзывы',
      type: 'page'
    },
    {
      id: 'faq',
      name: 'FAQ',
      type: 'hash'
    },
    {
      id: 'contacts',
      name: 'Контакты',
      type: 'hash'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, {
      rootMargin: '-50% 0px',
      threshold: 0
    });

    // Only observe hash navigation elements
    navLinks
      .filter(link => link.type === 'hash')
      .forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) observer.observe(element);
      });

    return () => observer.disconnect();
  }, [navLinks]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'auto';
  };

  const handleNavClick = (link: { id: string, type: string }) => {
    if (link.type === 'page') {
      router.push(`/${link.id}`);
    } else {
      const element = document.getElementById(link.id);
      if (element) {
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <nav className={`${bgColor || 'bg-[var(--bg-primary)]'}`}>
      <div className="container py-6">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between">
          <Link href='/'>
            <Image src="/assets/header-logo.png" alt="header-logo" width={226} height={56} />
            <div className="text-4xl text-[var(--text-secondary)] font-bold mt-2">Полный курс SA</div>
          </Link>

          <ul className="flex space-x-6 z-50">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a 
                  href={link.type === 'page' ? `/${link.id}` : `#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link);
                  }}
                  className={`text-[#07346F] hover:text-[var(--button-primary)] transition-colors font-semibold text-lg ${activeSection === link.id ? 'text-[var(--button-primary)]' : ''}`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-start justify-between relative">
          <Link href="/" className="space-y-4">
            <Image src="/assets/header-logo.png" alt="header-logo" width={226} height={56} />
            <div className="text-lg text-[var(--text-secondary)] font-extrabold">Полный курс SA</div>
          </Link>
          
          <button 
            onClick={toggleMenu}
            className="text-[var(--text-primary)] z-50"
          >
            {isMenuOpen ? (
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#18529D" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#18529D" strokeWidth="2">
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            )}
          </button>

          {/* Mobile Menu Overlay */}
          <div 
            className={`fixed inset-0 bg-white transition-transform duration-300 z-40
              ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
            `}
          >
            <div className="container pt-32">
              <ul className="space-y-8">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.type === 'page' ? `/${link.id}` : `#${link.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link);
                      }}
                      className={`text-2xl text-[#07346F] hover:text-[var(--button-primary)] transition-colors ${activeSection === link.id ? 'text-[var(--button-primary)]' : ''}`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
