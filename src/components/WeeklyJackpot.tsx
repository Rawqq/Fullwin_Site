import { Ticket, Trophy, Calendar, ClipboardCheck } from 'lucide-react';
import diamondImage from '@/assets/diamond.png';
import { useLanguage } from '@/contexts/LanguageContext';

const WeeklyJackpot = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Ticket,
      text: t('jackpot.feature1'),
    },
    {
      icon: Trophy,
      text: t('jackpot.feature2'),
    },
    {
      icon: Calendar,
      text: t('jackpot.feature3'),
    },
    {
      icon: ClipboardCheck,
      text: t('jackpot.feature4'),
    },
  ];

  return (
    <section id="jackpot" className="section-padding relative overflow-hidden">
      {/* Background effects */}
      <div className="orb absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 bg-gradient-radial from-amber-500/20 to-transparent" />
      <div className="orb absolute -right-32 top-1/3 h-80 w-80 bg-gradient-radial from-amber-400/15 to-transparent" />

      <div className="container relative z-10 mx-auto">
        <div className="glass-panel-strong shimmer overflow-hidden p-8 md:p-12">
          {/* Inner glow */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-amber-600/5" />

          <div className="relative z-10 flex flex-col items-center gap-8 lg:flex-row lg:gap-12">
            {/* Left - Visual */}
            <div className="flex flex-1 justify-center">
              <div className="relative">
                {/* Main diamond image */}
                <div className="float">
                  <img 
                    src={diamondImage} 
                    alt="Jackpot Diamond" 
                    className="h-80 w-80 object-contain md:h-[400px] md:w-[400px]"
                  />
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="flex-1 text-center lg:text-left">
              <h2 className="mb-6 text-2xl font-bold text-white md:text-3xl lg:text-4xl">
                {t('jackpot.title')}{' '}
                <span className="text-gradient-accent">{t('jackpot.jackpot')}</span>
              </h2>

              <div className="mb-8 space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-accent/20">
                      <feature.icon className="h-5 w-5 text-accent" />
                    </div>
                    <p className="text-foreground-secondary pt-2">{feature.text}</p>
                  </div>
                ))}
              </div>

              <a href="https://t.me/fullwin_official_bot" target="_blank" rel="noopener noreferrer" className="glass-button shimmer inline-block bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-4 text-base">
                {t('jackpot.participate')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeeklyJackpot;
