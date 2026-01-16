import { MessageCircle, Wallet, Gamepad2, Gift } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const colorClasses = {
  primary: 'bg-primary/20 text-primary',
  secondary: 'bg-secondary/20 text-secondary',
  accent: 'bg-accent/20 text-accent',
};

const HowItWorks = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: MessageCircle,
      step: '01',
      title: t('how.step1'),
      color: 'primary',
    },
    {
      icon: Wallet,
      step: '02',
      title: t('how.step2'),
      color: 'primary',
    },
    {
      icon: Gamepad2,
      step: '03',
      title: t('how.step3'),
      color: 'secondary',
    },
    {
      icon: Gift,
      step: '04',
      title: t('how.step4'),
      color: 'accent',
    },
  ];

  return (
    <section id="how" className="section-padding relative">
      <div className="container relative z-10 mx-auto">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl lg:text-4xl">
            {t('how.title')}
          </h2>
          <p className="mx-auto max-w-2xl text-foreground-secondary">
            {t('how.subtitle')}
          </p>
        </div>

        <div className="relative">
          {/* Connection line - desktop */}
          <div className="absolute left-0 right-0 top-16 hidden h-0.5 bg-gradient-to-r from-primary via-secondary to-accent opacity-30 md:block" />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connection line - mobile */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-20 h-full w-0.5 bg-gradient-to-b from-white/20 to-transparent md:hidden" />
                )}

                <div className="glass-panel-strong card-hover p-6 text-center">
                  {/* Step number */}
                  <div className="mb-4 flex justify-center">
                    <div className={`relative flex h-16 w-16 items-center justify-center rounded-full ${colorClasses[step.color as keyof typeof colorClasses]}`}>
                      <step.icon className="h-7 w-7" />
                      <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-background text-xs font-bold text-white">
                        {step.step}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white md:text-lg">{step.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
