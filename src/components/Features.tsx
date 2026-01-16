import { Gift, Archive, Wallet, ClipboardCheck, Ticket, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const iconColors = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  accent: 'text-accent',
};

const glowColors = {
  primary: 'group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]',
  secondary: 'group-hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]',
  accent: 'group-hover:shadow-[0_0_30px_rgba(245,158,11,0.3)]',
};

const Features = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Gift,
      title: t('features.gifts.title'),
      description: t('features.gifts.desc'),
      color: 'secondary',
    },
    {
      icon: Archive,
      title: t('features.inventory.title'),
      description: t('features.inventory.desc'),
      color: 'primary',
    },
    {
      icon: Wallet,
      title: t('features.balances.title'),
      description: t('features.balances.desc'),
      color: 'primary',
    },
    {
      icon: ClipboardCheck,
      title: t('features.tasks.title'),
      description: t('features.tasks.desc'),
      color: 'accent',
    },
    {
      icon: Ticket,
      title: t('features.jackpot.title'),
      description: t('features.jackpot.desc'),
      color: 'accent',
    },
    {
      icon: Users,
      title: t('features.community.title'),
      description: t('features.community.desc'),
      color: 'secondary',
    },
  ];

  return (
    <section id="features" className="section-padding relative">
      {/* Background orb */}
      <div className="orb orb-primary left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2" />

      <div className="container relative z-10 mx-auto">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl lg:text-4xl">
            {t('features.title')}
          </h2>
          <p className="mx-auto max-w-2xl text-foreground-secondary">
            {t('features.subtitle')}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`glass-panel-strong group card-hover p-6 transition-all duration-300 md:p-8 ${glowColors[feature.color as keyof typeof glowColors]}`}
            >
              <div className={`mb-4 inline-flex rounded-2xl bg-white/5 p-3 ${iconColors[feature.color as keyof typeof iconColors]}`}>
                <feature.icon className="h-6 w-6 md:h-7 md:w-7" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-white">{feature.title}</h3>
              <p className="text-sm text-foreground-secondary md:text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
