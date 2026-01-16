import { useLanguage } from '@/contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 rounded-xl bg-white/5 p-1">
      <button
        onClick={() => setLanguage('en')}
        className={`rounded-lg px-2 py-1 text-xs font-medium transition-all ${
          language === 'en'
            ? 'bg-primary text-white'
            : 'text-foreground-secondary hover:text-white'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('ru')}
        className={`rounded-lg px-2 py-1 text-xs font-medium transition-all ${
          language === 'ru'
            ? 'bg-primary text-white'
            : 'text-foreground-secondary hover:text-white'
        }`}
      >
        RU
      </button>
    </div>
  );
};

export default LanguageSwitcher;
