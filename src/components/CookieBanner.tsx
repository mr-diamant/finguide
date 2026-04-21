import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const COOKIE_KEY = 'cookie_consent';
const COOKIE_DAYS = 30;

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_KEY);
    if (stored) {
      const { ts } = JSON.parse(stored);
      const expired = Date.now() - ts > COOKIE_DAYS * 24 * 60 * 60 * 1000;
      if (!expired) return;
    }
    setVisible(true);
  }, []);

  const save = (accepted: boolean) => {
    localStorage.setItem(COOKIE_KEY, JSON.stringify({ accepted, ts: Date.now() }));
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-sm z-50"
        >
          <div className="bg-white dark:bg-brand-green-dark border border-brand-green/10 dark:border-white/10 rounded-2xl shadow-xl px-5 py-4 flex flex-col gap-3">
            <p className="text-[11px] text-brand-green-dark/70 dark:text-white/60 leading-relaxed font-medium">
              Мы используем файлы cookie для улучшения работы сайта и анализа трафика. Продолжая использование сайта, вы соглашаетесь с нашей{' '}
              <a href="#" className="text-brand-gold underline">политикой конфиденциальности</a>.
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => save(true)}
                className="flex-1 bg-brand-green hover:bg-brand-green-dark text-white text-[11px] font-bold uppercase tracking-widest py-2 rounded-xl transition-all active:scale-95"
              >
                Принять
              </button>
              <button
                onClick={() => save(false)}
                className="flex-1 bg-brand-green/5 dark:bg-white/5 hover:bg-brand-green/10 text-brand-green-dark dark:text-white/70 text-[11px] font-bold uppercase tracking-widest py-2 rounded-xl border border-brand-green/10 dark:border-white/10 transition-all active:scale-95"
              >
                Отказаться
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
