import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, TrendingUp, HelpCircle } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { useModal } from '../context/ModalContext';

export default function Hero() {
  const { openModal } = useModal();

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-off-white dark:bg-linear-to-br dark:from-brand-deep-dark dark:via-brand-green-dark dark:to-brand-green transition-colors duration-500">
      {/* Mesh Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-green/5 dark:bg-brand-green/20 rounded-full blur-[120px] -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-gold/5 dark:bg-brand-gold/15 rounded-full blur-[100px] -ml-64 -mb-64" />

      <div className="max-w-4xl mx-auto px-6 w-full text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-brand-green/5 dark:bg-white/5 rounded-full mb-8 border border-brand-green/10 dark:border-white/10"
        >
          <img 
            src="https://finguide.kz/page/brandbook/icon.png" 
            alt="Icon" 
            className="w-4 h-4 object-contain animate-pulse" 
            referrerPolicy="no-referrer"
          />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-green-dark/60 dark:text-white/40">
            Финансовый эксперт · Актобе · Казахстан
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-8xl font-black text-brand-green-dark dark:text-white leading-[1.05] tracking-tight mb-8"
        >
          Наведем идеальный порядок в финансах и налогах
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed font-medium"
        >
          Оказываем помощь предпринимателям, бухгалтерам и стартаперам навести порядок в учёте, оптимизировать налоги и выстроить финансовую грамотность один раз и надолго.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-5 justify-center"
        >
          <button 
            onClick={() => openModal('Консультация', 'Оставьте заявку, и мы свяжемся с вами в ближайшее время')}
            className="bg-brand-green hover:bg-brand-green-dark text-white px-12 py-6 rounded-2xl font-bold transition-all shadow-xl shadow-brand-green/20 flex items-center gap-3 group active:scale-95 text-lg"
          >
            Записаться на консультацию
            <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
