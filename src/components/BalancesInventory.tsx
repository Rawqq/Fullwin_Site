import { useLanguage } from '@/contexts/LanguageContext';
import appCases from '@/assets/app-cases.png';
import appGames from '@/assets/app-games.png';
import appJackpot from '@/assets/app-jackpot.png';
import appProfile from '@/assets/app-profile.png';
import appReferral from '@/assets/app-referral.png';

const BalancesInventory = () => {
  const { t } = useLanguage();

  const screenshots = [
    { src: appCases, alt: 'Cases' },
    { src: appGames, alt: 'Games' },
    { src: appJackpot, alt: 'Jackpot' },
    { src: appProfile, alt: 'Profile' },
    { src: appReferral, alt: 'Referral' },
  ];

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background orb */}
      <div className="orb orb-primary left-1/4 top-1/2 h-80 w-80 -translate-y-1/2" />

      <div className="container relative z-10 mx-auto">
        {/* Title */}
        <div className="mb-10 text-center">
          <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl lg:text-4xl">
            {t('balances.sectionTitle')}
          </h2>
          <p className="mx-auto max-w-2xl text-foreground-secondary">
            {t('balances.sectionDesc')}
          </p>
        </div>

        {/* Screenshots carousel/grid */}
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide md:justify-center md:overflow-visible">
          {screenshots.map((screenshot, index) => (
            <div
              key={index}
              className="glass-panel-strong card-hover flex-shrink-0 overflow-hidden rounded-3xl p-2"
            >
              <img
                src={screenshot.src}
                alt={screenshot.alt}
                className="h-[320px] w-auto rounded-2xl object-cover md:h-[400px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BalancesInventory;
