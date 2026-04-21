import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLang } from '../context/LanguageContext';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { t } = useLang();
  const f = t.faq;

  return (
    <section id="faq" className="py-24 px-6 md:px-10 relative overflow-hidden bg-white dark:bg-brand-deep-dark transition-colors duration-500">
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
          <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-gold mb-4 opacity-50">{f.label}</h2>
          <div className="text-4xl md:text-5xl font-black tracking-tight text-brand-green-dark dark:text-white text-center">
            {f.title1} <span className="accent-gradient italic">{f.titleAccent}</span>
          </div>
        </div>

        <div className="space-y-6 text-brand-green-dark dark:text-white">
          {f.items.map((faq, i) => (
            <div key={i} className="glass rounded-[32px] overflow-hidden border border-brand-green/5 dark:border-white/5 transition-all duration-300 hover:bg-white/90 dark:hover:bg-zinc-900/50">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 md:p-8 text-left transition-colors group"
              >
                <span className="text-lg font-bold pr-8 transition-colors group-hover:text-brand-green dark:group-hover:text-brand-gold">{faq.q}</span>
                <div className="w-10 h-10 rounded-2xl bg-brand-gold flex items-center justify-center shrink-0 shadow-sm">
                  <ChevronDown
                    size={20}
                    className={`text-brand-green-dark transition-transform duration-300 ${openIndex === i ? 'rotate-180' : 'rotate-0'}`}
                  />
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                  >
                    <div className="p-5 pt-0 md:p-8 md:pt-0 opacity-80 leading-relaxed text-sm text-gray-600 dark:text-gray-400 font-medium">
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
