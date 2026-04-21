import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { useLang } from '../context/LanguageContext';

export default function Expert() {
  const { t } = useLang();
  const e = t.expert;

  const Header = () => (
    <>
      <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-gold mb-6">{e.label}</div>
      <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight text-brand-green-dark dark:text-white leading-tight">
        {e.name}
      </h2>
      <div className="text-brand-gold font-bold text-sm uppercase tracking-widest mb-2">
        {e.role}
      </div>
    </>
  );

  return (
    <section id="expert" className="py-32 px-6 md:px-10 relative overflow-hidden bg-white dark:bg-brand-deep-dark transition-colors duration-500">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-start">

        {/* Mobile-only header — appears before photo on mobile */}
        <div className="lg:hidden order-1">
          <Header />
        </div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full lg:max-w-xs mx-auto lg:mx-0 order-2 lg:order-1"
        >
          <div className="absolute -inset-8 bg-brand-gold/10 rounded-full blur-[80px] -z-10" />
          <div className="relative aspect-[3/4] overflow-hidden rounded-[32px] glass border-brand-green/10 dark:border-white/5 shadow-xl">
            <img
              src="https://finguide.kz/page/brandbook/ainur.jpg"
              alt={e.name}
              className="w-full h-full object-cover transition-opacity dark:opacity-80"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-8 -right-6 glass p-5 rounded-[24px] shadow-xl hidden md:block border-brand-gold/30 dark:border-brand-gold/20">
            <h4 className="text-base font-bold leading-none text-brand-green-dark dark:text-white">{e.name}</h4>
            <p className="text-[9px] font-bold text-brand-gold uppercase tracking-[0.2em] mt-2">{e.cardLabel}</p>
          </div>
        </motion.div>

        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-3 lg:order-2"
        >
          {/* Desktop-only header inside right column */}
          <div className="hidden lg:block">
            <Header />
          </div>

          <p className="text-lg opacity-80 mb-10 leading-relaxed text-gray-500 dark:text-gray-400 font-medium text-justify">
            {e.bio}
          </p>

          <div className="space-y-6 mb-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] opacity-40 mb-6 text-brand-green-dark dark:text-white">{e.certsLabel}</h3>
            {e.certs.map((cert) => (
              <div key={cert} className="flex items-center gap-5 group">
                <div className="w-8 h-8 rounded-xl bg-brand-green/10 dark:bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-brand-gold/20 transition-all border border-brand-green/5 dark:border-white/10">
                  <CheckCircle2 size={16} className="text-brand-green dark:text-brand-gold" />
                </div>
                <span className="text-sm font-bold opacity-70 group-hover:opacity-100 transition-opacity text-brand-green-dark/80 dark:text-white/80">{cert}</span>
              </div>
            ))}
          </div>

          <a
            href="https://finguide.kz/images/sertificates.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-brand-gold hover:text-brand-gold-dark transition-colors mb-10 border border-brand-gold/30 rounded-xl px-5 py-2.5 hover:bg-brand-gold/5"
          >
            {e.certsLink}
          </a>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {e.stats.map((stat, i) => (
              <div key={i} className="glass p-8 rounded-[32px] text-center flex flex-col items-center group border-brand-green/5 dark:border-white/5">
                <div className="text-3xl font-black accent-gradient leading-none mb-2">{stat.value}</div>
                <div className="text-[10px] font-bold uppercase tracking-widest opacity-40 leading-tight text-gray-500 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
