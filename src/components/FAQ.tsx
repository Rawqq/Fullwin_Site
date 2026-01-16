import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useLanguage } from '@/contexts/LanguageContext';

const FAQ = () => {
  const { t } = useLanguage();

  const faqItems = [
    {
      question: t('faq.q1'),
      answer: t('faq.a1'),
    },
    {
      question: t('faq.q2'),
      answer: t('faq.a2'),
    },
    {
      question: t('faq.q3'),
      answer: t('faq.a3'),
    },
    {
      question: t('faq.q4'),
      answer: t('faq.a4'),
    },
    {
      question: t('faq.q5'),
      answer: t('faq.a5'),
    },
    {
      question: t('faq.q6'),
      answer: t('faq.a6'),
    },
  ];

  return (
    <section id="faq" className="section-padding relative">
      {/* Background orb */}
      <div className="orb orb-secondary right-1/4 top-1/2 h-64 w-64 -translate-y-1/2" />

      <div className="container relative z-10 mx-auto">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl lg:text-4xl">
            {t('faq.title')}
          </h2>
          <p className="mx-auto max-w-2xl text-foreground-secondary">
            {t('faq.subtitle')}
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-panel-strong overflow-hidden border-0 px-6"
              >
                <AccordionTrigger className="py-5 text-left font-semibold text-white hover:no-underline [&[data-state=open]>svg]:rotate-180">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-foreground-secondary">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
