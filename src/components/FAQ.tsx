import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: "Работаете ли вы удалённо?",
    a: "Да, большинство задач решаются онлайн - через WhatsApp, Telegram или Zoom. Работаю со всем Казахстаном."
  },
  {
    q: "Вы работаете только с бизнесом?",
    a: "Нет, работаю также с физическими лицами: личный бюджет, накопления, финансовое планирование."
  },
  {
    q: "В каких программах ведётся учёт?",
    a: "Учёт ведётся в лицензионных программных продуктах 1С с обязательным еженедельным резервным копированием информационных баз предпринимателей."
  },
  {
    q: "Сообщат ли о недостающей документации в учёте?",
    a: "Да. Мы осуществляем мониторинг недостающей документации, после чего в обязательном порядке направляем информацию с перечнем недостающих документов в табличной форме."
  },
  {
    q: "Как часто происходит мониторинг налоговых уведомлений?",
    a: "Мы ежедневно производим мониторинг Кабинета Налогоплательщика и своевременно отвечаем на все налоговые уведомления путём создания пояснения или направления официального письма в Налоговое Управление."
  },
  {
    q: "Что, если бухгалтер допустил серьёзную ошибку?",
    a: "По договору, если мы допустили ошибку — мы за это платим. В случае, если ошибку допустил штатный бухгалтер, его намного сложнее привлечь к ответственности — юридически такой штраф всё равно будет числиться на вас."
  },
  {
    q: "Как хранятся документы?",
    a: "Документация хранится в специально отведённом архиве и предварительно сортируется по папкам-регистраторам. Благодаря этому мы можем быстро найти нужный документ и предоставить его по первому требованию."
  },
  {
    q: "С какой периодичностью происходит сверка с контрагентами?",
    a: "Сверка происходит ежеквартально во время проверки учёта руководителями отделов, чтобы у предпринимателя всегда были объективные данные по остаткам дебиторской и кредиторской задолженностей."
  },
  {
    q: "Как происходит отправка возвратных документов контрагентам?",
    a: "Наш офис-менеджер самостоятельно произведёт почтовую рассылку всех возвратных документов. Вам останется только возместить почтовые услуги."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 px-10 relative overflow-hidden bg-white dark:bg-brand-deep-dark transition-colors duration-500">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="w-40 h-40 flex items-center justify-center mx-auto mb-6 transform hover:scale-110 transition-transform duration-500">
            <img 
              src="https://finguide.kz/images/faq.webp" 
              alt="FAQ Icon" 
              className="w-full h-full object-contain mix-blend-multiply dark:mix-blend-normal dark:p-2"
              referrerPolicy="no-referrer"
            />
          </div>
          <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-gold mb-4 opacity-50">FAQ</h2>
          <div className="text-4xl md:text-5xl font-black tracking-tight text-brand-green-dark dark:text-white text-center">Частые <span className="accent-gradient italic">вопросы</span></div>
        </div>

        <div className="space-y-6 text-brand-green-dark dark:text-white">
          {faqs.map((faq, i) => (
            <div key={i} className="glass rounded-[32px] overflow-hidden border border-brand-green/5 dark:border-white/5 transition-all duration-300 hover:bg-white/90 dark:hover:bg-zinc-900/50">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-8 text-left transition-colors group"
              >
                <span className="text-lg font-bold pr-8 transition-colors group-hover:text-brand-green dark:group-hover:text-brand-gold">{faq.q}</span>
                <div className="w-10 h-10 rounded-2xl bg-brand-green/5 dark:bg-white/5 flex items-center justify-center shrink-0 border border-brand-green/10 dark:border-white/10">
                  {openIndex === i ? <Minus size={20} className="text-brand-green dark:text-brand-gold" /> : <Plus size={20} className="text-brand-green dark:text-brand-gold" />}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                  >
                    <div className="p-8 pt-0 opacity-80 leading-relaxed text-sm text-gray-600 dark:text-gray-400 font-medium">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
