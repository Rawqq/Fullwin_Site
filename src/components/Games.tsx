import { Sparkles, Bomb, CircleDot, Box, Gift } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Games = () => {
  const { t } = useLanguage();

  const games = [
    {
      icon: Gift,
      name: 'MineGift',
      description: t('games.minegift'),
      gradient: 'from-violet-500 to-purple-600',
      glow: 'hover:shadow-[0_0_40px_rgba(139,92,246,0.4)]',
    },
    {
      icon: Bomb,
      name: 'Gift Mines',
      description: t('games.giftmines'),
      gradient: 'from-rose-500 to-pink-600',
      glow: 'hover:shadow-[0_0_40px_rgba(244,63,94,0.4)]',
    },
    {
      icon: CircleDot,
      name: 'Plinko',
      description: t('games.plinko'),
      gradient: 'from-blue-500 to-cyan-500',
      glow: 'hover:shadow-[0_0_40px_rgba(59,130,246,0.4)]',
    },
    {
      icon: Sparkles,
      name: 'Wheel of Fortune',
      description: t('games.wheel'),
      gradient: 'from-amber-500 to-orange-500',
      glow: 'hover:shadow-[0_0_40px_rgba(245,158,11,0.4)]',
    },
    {
      icon: Box,
      name: 'Lootbox',
      description: t('games.lootbox'),
      gradient: 'from-emerald-500 to-teal-500',
      glow: 'hover:shadow-[0_0_40px_rgba(16,185,129,0.4)]',
    },
  ];

  return (
    <section id="games" className="section-padding relative overflow-hidden">
      {/* Background orbs */}
      <div className="orb orb-secondary -right-32 top-1/4 h-80 w-80" />
      <div className="orb orb-primary -left-32 bottom-1/4 h-64 w-64" />

      <div className="container relative z-10 mx-auto">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl lg:text-4xl">
            {t('games.title')}
          </h2>
          <p className="mx-auto max-w-2xl text-foreground-secondary">
            {t('games.subtitle')}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-5">
          {games.map((game, index) => (
            <div
              key={index}
              className={`glass-panel-strong group relative overflow-hidden p-6 transition-all duration-300 card-hover ${game.glow}`}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${game.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-10`} />
              
              <div className="relative z-10">
                <div className={`mb-4 inline-flex rounded-2xl bg-gradient-to-br ${game.gradient} p-3`}>
                  <game.icon className="h-7 w-7 text-white md:h-8 md:w-8" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-white">{game.name}</h3>
                <p className="text-sm text-foreground-secondary">{game.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Games;
