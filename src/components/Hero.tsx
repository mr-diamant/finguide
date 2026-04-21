import { useModal } from '../context/ModalContext';
import { useLang } from '../context/LanguageContext';

export default function Hero() {
  const { openModal } = useModal();
  const { t } = useLang();

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
          className="w-[70vw] h-[70vw] max-w-[700px] max-h-[700px] object-contain opacity-20 dark:opacity-[0.12]"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 w-full text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-green/5 dark:bg-white/5 rounded-full mb-8 border border-brand-green/10 dark:border-white/10">
          <img
            src="https://finguide.kz/icon.svg"
            alt="Icon"
            className="w-4 h-4 object-contain animate-pulse"
            referrerPolicy="no-referrer"
          />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-green-dark/60 dark:text-white/40">
            {t.hero.badge}
          </span>
        </div>

        <h1 className="text-5xl md:text-6xl font-black text-brand-green-dark dark:text-white leading-[1.05] tracking-tight mb-8">
          {t.hero.title1} <span className="accent-gradient">{t.hero.titleAccent}</span>
          {t.hero.title2 && <><br />{t.hero.title2}</>}
        </h1>

        <p className="text-sm md:text-lg text-brand-green-dark dark:text-white mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
          {t.hero.subtitle}
        </p>

        <div className="flex flex-wrap gap-5 justify-center">
          <div
            onClick={() => openModal(t.hero.modalTitle, t.hero.modalDesc)}
            className="group cursor-pointer active:scale-95 transition-transform rounded-full p-1.5 bg-[linear-gradient(135deg,#f5e08a_0%,#c9a84c_25%,#7a5c1e_50%,#c9a84c_75%,#f5e08a_100%)] shadow-[0_4px_24px_rgba(201,168,76,0.35)]"
          >
            <div className="bg-[#1e3d2c] rounded-full flex items-center gap-3 py-[18px] px-8 md:px-12 text-white font-bold text-base md:text-lg whitespace-nowrap">
              {t.hero.cta}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
