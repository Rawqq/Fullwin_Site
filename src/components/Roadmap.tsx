import { Gamepad2, PlusCircle, ArrowUpDown, ClipboardCheck, Trophy, Award, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Roadmap = () => {
  const { t } = useLanguage();

  const roadmapItems = [
    { icon: Gamepad2, text: t('roadmap.item1') },
    { icon: PlusCircle, text: t('roadmap.item2') },
    { icon: ArrowUpDown, text: t('roadmap.item3') },
    { icon: ClipboardCheck, text: t('roadmap.item4') },
    { icon: Trophy, text: t('roadmap.item5') },
    { icon: Award, text: t('roadmap.item6') },
    { icon: Sparkles, text: t('roadmap.item7') },
  ];

  return (
    <section id="roadmap" className="section-padding relative">
      {/* Background orb */}
      <div className="orb orb-primary left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2" />

      <div className="container relative z-10 mx-auto">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl lg:text-4xl">
            {t('roadmap.title')}
          </h2>
          <p className="mx-auto max-w-2xl text-foreground-secondary">
            {t('roadmap.subtitle')}
          </p>
        </div>

        <div className="mx-auto max-w-2xl">
          <div className="glass-panel-strong p-6 md:p-8">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute bottom-0 left-5 top-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent opacity-50" />

              <div className="space-y-6">
                {roadmapItems.map((item, index) => (
                  <div key={index} className="relative flex items-center gap-4">
                    {/* Icon */}
                    <div className="relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white/5">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>

                    {/* Text */}
                    <span className="font-medium text-white">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
