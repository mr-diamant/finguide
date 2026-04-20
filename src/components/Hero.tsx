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

      {/* Background icon watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <img
          src="https://finguide.kz/icon.svg"
          alt=""
          className="w-[70vw] h-[70vw] max-w-[700px] max-h-[700px] object-contain opacity-[0.15] dark:opacity-[0.09]"
          style={{ filter: 'brightness(0) saturate(0) invert(30%) sepia(20%) saturate(500%) hue-rotate(100deg)' }}
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 w-full text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-brand-green/5 dark:bg-white/5 rounded-full mb-8 border border-brand-green/10 dark:border-white/10"
        >
          <img
            src="https://finguide.kz/icon.svg"
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
          className="text-5xl md:text-6xl font-black text-brand-green-dark dark:text-white leading-[1.05] tracking-tight mb-8"
        >
          Наведем <span className="accent-gradient">идеальный порядок</span><br />в финансах и налогах
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-white mb-12 max-w-2xl mx-auto leading-relaxed font-medium"
        >
          Оказываем помощь предпринимателям, бухгалтерам и стартаперам навести порядок в учёте, оптимизировать налоги и выстроить финансовую грамотность один раз и надолго.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-5 justify-center"
        >
          <div
            onClick={() => openModal('Консультация', 'Оставьте заявку, и мы свяжемся с вами в ближайшее время')}
            className="group cursor-pointer active:scale-95 transition-transform"
            style={{
              background: 'linear-gradient(135deg, #f5e08a 0%, #c9a84c 25%, #7a5c1e 50%, #c9a84c 75%, #f5e08a 100%)',
              borderRadius: '9999px',
              padding: '6px',
              boxShadow: '0 4px 24px rgba(201,168,76,0.35)',
            }}
          >
            <div
              style={{
                background: '#1e3d2c',
                borderRadius: '9999px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '18px 48px',
              }}
              className="text-white font-bold text-lg"
            >
              Записаться на консультацию
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
