import { useState } from 'react';
import { Menu, X, Instagram } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import logoImage from '@/assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { label: t('nav.games'), href: '#games' },
    { label: t('nav.features'), href: '#features' },
    { label: t('nav.jackpot'), href: '#jackpot' },
    { label: t('nav.roadmap'), href: '#roadmap' },
    { label: t('nav.faq'), href: '#faq' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 py-3">
        <div className="glass-panel-strong flex items-center justify-between px-4 py-3 md:px-6">
          {/* Logo and Language Switcher */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-2">
              <img src={logoImage} alt="Fullwin Logo" className="h-8 w-8 rounded-full" />
              <span className="text-lg font-bold text-white">Fullwin</span>
            </a>
            <LanguageSwitcher />
          </div>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground-secondary transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social Links & CTA Button */}
          <div className="hidden items-center gap-3 md:flex">
            {/* Social Links */}
            <div className="flex items-center gap-2">
              <a 
                href="https://x.com/fullwin_media" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-foreground-secondary transition-colors hover:bg-white/10 hover:text-white"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a 
                href="https://t.me/fullwin_media" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-foreground-secondary transition-colors hover:bg-white/10 hover:text-white"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/fullwin_media/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-foreground-secondary transition-colors hover:bg-white/10 hover:text-white"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
            
            <a href="https://t.me/fullwin_official_bot" target="_blank" rel="noopener noreferrer" className="glass-button text-sm">
              {t('nav.openFullwin')}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-xl p-2 text-white transition-colors hover:bg-white/10 md:hidden"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="glass-panel-strong mt-2 p-4 md:hidden">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-foreground-secondary transition-colors hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <a href="https://t.me/fullwin_official_bot" target="_blank" rel="noopener noreferrer" className="glass-button mt-2 text-center text-sm">
                {t('nav.openFullwin')}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
