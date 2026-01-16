import { Sparkles, Gift, Scale } from 'lucide-react';
import HeroVisual from './HeroVisual';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden pb-0 pt-24 md:pt-32">
      {/* Background orbs */}
      <div className="orb orb-primary -left-32 top-1/4 h-96 w-96" />
      <div className="orb orb-secondary -right-32 top-1/3 h-80 w-80" />
      <div className="orb orb-primary bottom-1/4 left-1/4 h-64 w-64" />

      {/* Stars overlay */}
      <div className="stars absolute inset-0" />

      {/* Bottom gradient fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col-reverse items-center gap-12 lg:flex-row lg:gap-8">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="mb-6 text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl">
              {t('hero.title')}{' '}
              <span className="text-gradient-primary">{t('hero.telegram')}</span>
            </h1>

            <p className="mb-8 text-lg text-foreground-secondary md:text-xl">
              {t('hero.description')}
            </p>

            {/* Bullet points */}
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <div className="glass-panel-strong flex items-center gap-3 px-4 py-3">
                <Sparkles className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-white">
                  {t('hero.games')}
                </span>
              </div>

              <div className="glass-panel-strong flex items-center gap-3 px-4 py-3">
                <Gift className="h-5 w-5 text-secondary" />
                <span className="text-sm font-medium text-white">
                  {t('hero.gifts')}
                </span>
              </div>

              {/* ✅ НОВЫЙ ПУНКТ */}
              <div className="glass-panel-strong flex items-center gap-3 px-4 py-3">
                <Scale className="h-5 w-5 text-white" />
                <span className="text-sm font-medium text-white">
                  {t('hero.fairness')}
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="https://t.me/fullwin_official_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-button shimmer px-8 py-4 text-base"
              >
                {t('hero.openFullwin')}
              </a>
              <a
                href="#how"
                className="glass-button-secondary px-8 py-4 text-base"
              >
                {t('hero.howItWorks')}
              </a>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="flex-1">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
