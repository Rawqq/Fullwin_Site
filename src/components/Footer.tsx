import { Rocket } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  const footerLinks = [
    { label: t('footer.support'), href: 'https://t.me/fullwin_support_bot' },
    { label: t('footer.faq'), href: '#faq' },
    { label: t('footer.terms'), href: 'https://project-fullwin-frontend.vercel.app/terms' },
    { label: t('footer.privacy'), href: 'https://project-fullwin-frontend.vercel.app/privacy' },
  ];

  return (
    <footer className="relative border-t border-white/5 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
              <Rocket className="h-4 w-4 text-white" />
            </div>
            <span className="text-lg font-bold text-white">Fullwin</span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {footerLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-sm text-foreground-secondary transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center">
          <p className="text-sm text-foreground-secondary">
            © {new Date().getFullYear()} Fullwin. {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
