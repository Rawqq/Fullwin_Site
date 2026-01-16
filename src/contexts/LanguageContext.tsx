import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'ru' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  ru: {
    // Navbar
    'nav.games': 'Игры',
    'nav.features': 'Возможности',
    'nav.jackpot': 'Джекпот',
    'nav.roadmap': 'Roadmap',
    'nav.faq': 'FAQ',
    'nav.openFullwin': 'Открыть Fullwin',

    // Hero
    'hero.title': 'Fullwin — игровая платформа с мини-играми внутри',
    'hero.telegram': 'Telegram',
    'hero.description': 'Играй в популярные мини-игры, выигрывай подарки (Gifts) и призы, выполняй задания, собирай билеты и участвуй в еженедельном джекпоте — всё в одном Telegram mini-app.',
    'hero.games': '5 мини-игр в одном месте',
    'hero.gifts': 'Gifts и призы в инвентаре',
    'hero.tickets': 'Билеты за TON и задания',
    'hero.openFullwin': 'Открыть Fullwin',
    'hero.howItWorks': 'Как это работает',

    // Games
    'games.title': 'Игры',
    'games.subtitle': '5 уникальных мини-игр с разными механиками',
    'games.minegift': 'Флагманский режим с подарками и прогрессом.',
    'games.giftmines': 'Риск и награда в минном формате.',
    'games.plinko': 'Классическая механика с быстрым результатом.',
    'games.wheel': 'Колесо удачи с призами.',
    'games.lootbox': 'Открывай коробки с Gifts и призами.',

    // Features
    'features.title': 'Возможности платформы',
    'features.subtitle': 'Всё, что нужно для комфортной игры — в одном месте',
    'features.gifts.title': 'Gifts и призы',
    'features.gifts.desc': 'Выигрывай подарки (Gifts) и призы — всё сохраняется в твоём инвентаре.',
    'features.inventory.title': 'Инвентарь',
    'features.inventory.desc': 'Храни и просматривай выигрыши и историю в одном месте.',
    'features.balances.title': 'Разделённые балансы',
    'features.balances.desc': 'Баланс внутри приложения разделён и отображается прозрачно.',
    'features.tasks.title': 'Задания',
    'features.tasks.desc': 'Выполняй задания и получай дополнительные награды.',
    'features.jackpot.title': 'Еженедельный джекпот',
    'features.jackpot.desc': 'За каждый поставленный TON получай билеты и участвуй в еженедельном розыгрыше.',
    'features.community.title': 'Комьюнити',
    'features.community.desc': 'Ивенты, розыгрыши и обновления — будь в теме.',

    // How It Works
    'how.title': 'Как это работает',
    'how.subtitle': 'Начни играть за 4 простых шага',
    'how.step1': 'Открой Fullwin в Telegram',
    'how.step2': 'Пополнить баланс',
    'how.step3': 'Выбери игру и играй',
    'how.step4': 'Забирай Gifts и призы в инвентарь + получай билеты',

    // Weekly Jackpot
    'jackpot.title': 'Еженедельный',
    'jackpot.jackpot': 'Jackpot',
    'jackpot.feature1': 'За каждый поставленный TON ты получаешь билеты.',
    'jackpot.feature2': 'Чем больше билетов — тем выше шанс на победу.',
    'jackpot.feature3': 'Раз в неделю проходит розыгрыш.',
    'jackpot.feature4': 'Билеты также можно получать за выполнение заданий.',
    'jackpot.participate': 'Участвовать',

    // Balances & Inventory
    'balances.sectionTitle': 'Посмотри на приложение',
    'balances.sectionDesc': 'Изучи интерфейс и возможности Fullwin перед тем, как начать играть.',
    'balances.title': 'Балансы внутри приложения',
    'balances.desc': 'Баланс разделён и отображается прозрачно. Удобно контролировать средства и историю операций.',
    'balances.available': 'Доступный баланс',
    'inventory.title': 'Инвентарь Gifts и призов',
    'inventory.desc': 'Все выигрыши сохраняются в инвентаре. История и статусы всегда под рукой.',
    'inventory.prizes': 'Твои призы',
    'inventory.collect': 'Собирай и просматривай',

    // Roadmap
    'roadmap.title': 'Roadmap',
    'roadmap.subtitle': 'Что ждёт платформу в будущем',
    'roadmap.item1': 'Улучшение игровых механик',
    'roadmap.item2': 'Добавление новых игр',
    'roadmap.item3': 'Депозит и вывод подарков (Gifts)',
    'roadmap.item4': 'Задания',
    'roadmap.item5': 'Лиги',
    'roadmap.item6': 'Достижения',
    'roadmap.item7': 'И многое другое',

    // FAQ
    'faq.title': 'FAQ',
    'faq.subtitle': 'Ответы на частые вопросы',
    'faq.q1': 'Что такое Fullwin?',
    'faq.a1': 'Игровая платформа с мини-играми внутри Telegram.',
    'faq.q2': 'Нужно ли что-то устанавливать?',
    'faq.a2': 'Нет, всё работает прямо в Telegram.',
    'faq.q3': 'Что я выигрываю?',
    'faq.a3': 'Подарки (Gifts) и призы, которые сохраняются в инвентаре.',
    'faq.q4': 'Как работает джекпот?',
    'faq.a4': 'За каждый поставленный TON начисляются билеты. Раз в неделю — розыгрыш. Больше билетов — выше шанс. Билеты также можно получать за задания.',
    'faq.q5': 'Сколько игр доступно?',
    'faq.a5': '5: MineGift, Gift Mines, Plinko, Wheel of Fortune, Lootbox.',
    'faq.q6': 'Куда обращаться, если проблема?',
    'faq.a6': 'В Support: @fullwin_support_bot',

    // Footer
    'footer.support': 'Support',
    'footer.faq': 'FAQ',
    'footer.terms': 'Terms of Use',
    'footer.privacy': 'Privacy Policy',
    'footer.copyright': 'Все права защищены.',
  },
  en: {
    // Navbar
    'nav.games': 'Games',
    'nav.features': 'Features',
    'nav.jackpot': 'Jackpot',
    'nav.roadmap': 'Roadmap',
    'nav.faq': 'FAQ',
    'nav.openFullwin': 'Open Fullwin',

    // Hero
    'hero.title': 'Fullwin — gaming platform with mini-games inside',
    'hero.telegram': 'Telegram',
    'hero.description': 'Play popular mini-games, win Gifts and prizes, complete tasks, collect tickets and participate in the weekly jackpot — all in one Telegram mini-app.',
    'hero.games': '5 mini-games in one place',
    'hero.gifts': 'Gifts and prizes in inventory',
    'hero.tickets': 'Tickets for TON and tasks',
    'hero.openFullwin': 'Open Fullwin',
    'hero.howItWorks': 'How it works',

    // Games
    'games.title': 'Games',
    'games.subtitle': '5 unique mini-games with different mechanics',
    'games.minegift': 'Flagship mode with gifts and progression.',
    'games.giftmines': 'Risk and reward in mine format.',
    'games.plinko': 'Classic mechanic with quick results.',
    'games.wheel': 'Wheel of fortune with prizes.',
    'games.lootbox': 'Open boxes with Gifts and prizes.',

    // Features
    'features.title': 'Platform Features',
    'features.subtitle': 'Everything you need for comfortable play — in one place',
    'features.gifts.title': 'Gifts and Prizes',
    'features.gifts.desc': 'Win Gifts and prizes — everything is saved in your inventory.',
    'features.inventory.title': 'Inventory',
    'features.inventory.desc': 'Store and view winnings and history in one place.',
    'features.balances.title': 'Separated Balances',
    'features.balances.desc': 'Balance within the app is separated and displayed transparently.',
    'features.tasks.title': 'Tasks',
    'features.tasks.desc': 'Complete tasks and receive additional rewards.',
    'features.jackpot.title': 'Weekly Jackpot',
    'features.jackpot.desc': 'For every TON bet, receive tickets and participate in the weekly draw.',
    'features.community.title': 'Community',
    'features.community.desc': 'Events, giveaways and updates — stay in the loop.',

    // How It Works
    'how.title': 'How It Works',
    'how.subtitle': 'Start playing in 4 simple steps',
    'how.step1': 'Open Fullwin in Telegram',
    'how.step2': 'Top up your balance',
    'how.step3': 'Choose a game and play',
    'how.step4': 'Collect Gifts and prizes in inventory + get tickets',

    // Weekly Jackpot
    'jackpot.title': 'Weekly',
    'jackpot.jackpot': 'Jackpot',
    'jackpot.feature1': 'For every TON you bet, you receive tickets.',
    'jackpot.feature2': 'More tickets — higher chance of winning.',
    'jackpot.feature3': 'Draw happens once a week.',
    'jackpot.feature4': 'Tickets can also be earned by completing tasks.',
    'jackpot.participate': 'Participate',

    // Balances & Inventory
    'balances.sectionTitle': 'Take a look at the app',
    'balances.sectionDesc': 'Explore the interface and features of Fullwin before you start playing.',
    'balances.title': 'Balances in the App',
    'balances.desc': 'Balance is separated and displayed transparently. Easy to control funds and transaction history.',
    'balances.available': 'Available balance',
    'inventory.title': 'Gifts and Prizes Inventory',
    'inventory.desc': 'All winnings are saved in inventory. History and statuses are always at hand.',
    'inventory.prizes': 'Your prizes',
    'inventory.collect': 'Collect and view',

    // Roadmap
    'roadmap.title': 'Roadmap',
    'roadmap.subtitle': 'What awaits the platform in the future',
    'roadmap.item1': 'Improving game mechanics',
    'roadmap.item2': 'Adding new games',
    'roadmap.item3': 'Gift deposit and withdrawal',
    'roadmap.item4': 'Tasks',
    'roadmap.item5': 'Leagues',
    'roadmap.item6': 'Achievements',
    'roadmap.item7': 'And much more',

    // FAQ
    'faq.title': 'FAQ',
    'faq.subtitle': 'Answers to frequently asked questions',
    'faq.q1': 'What is Fullwin?',
    'faq.a1': 'A gaming platform with mini-games inside Telegram.',
    'faq.q2': 'Do I need to install anything?',
    'faq.a2': 'No, everything works directly in Telegram.',
    'faq.q3': 'What do I win?',
    'faq.a3': 'Gifts and prizes that are saved in your inventory.',
    'faq.q4': 'How does the jackpot work?',
    'faq.a4': 'For every TON bet, tickets are earned. Once a week — a draw. More tickets — higher chance. Tickets can also be earned through tasks.',
    'faq.q5': 'How many games are available?',
    'faq.a5': '5: MineGift, Gift Mines, Plinko, Wheel of Fortune, Lootbox.',
    'faq.q6': 'Where to contact if there is a problem?',
    'faq.a6': 'Support: @fullwin_support_bot',

    // Footer
    'footer.support': 'Support',
    'footer.faq': 'FAQ',
    'footer.terms': 'Terms of Use',
    'footer.privacy': 'Privacy Policy',
    'footer.copyright': 'All rights reserved.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('ru');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['ru']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
