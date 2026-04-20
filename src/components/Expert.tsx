import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function Expert() {
  const stats = [
    { label: 'лет в профессии', value: '20+' },
    { label: 'международных сертификата', value: '4' },
    { label: 'направления экспертизы', value: '3' },
  ];

  const certs = [
    'CAP - Certified Accounting Practitioner', 
    'CIPA - Certified International Professional Accountant', 
    'ICU - Профессиональный коуч, Международная ассоциация', 
    'ПБ - Сертификат Профессионального Бухгалтера'
  ];

  return (
    <section id="expert" className="py-32 px-10 relative overflow-hidden bg-white dark:bg-brand-deep-dark transition-colors duration-500">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-10 bg-brand-gold/10 rounded-full blur-[100px] -z-10" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[40px] glass border-brand-green/10 dark:border-white/5 shadow-2xl">
            <img 
              src="https://finguide.kz/page/brandbook/ainur.jpg" 
              alt="Айнур Рысмаганбетова" 
              className="w-full h-full object-cover transition-opacity dark:opacity-80"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-10 -right-8 glass p-8 rounded-[32px] shadow-2xl hidden md:block border-brand-gold/30 dark:border-brand-gold/20">
            <h4 className="text-xl font-bold leading-none text-brand-green-dark dark:text-white">Айнур Рысмаганбетова</h4>
            <p className="text-[10px] font-bold text-brand-gold uppercase tracking-[0.2em] mt-3">Профессиональный бухгалтер</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-gold mb-6">Об эксперте</div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight text-brand-green-dark dark:text-white leading-tight">
            Айнур Рысмаганбетова
          </h2>
          <div className="text-brand-gold font-bold text-sm uppercase tracking-widest mb-8">
            Профессиональный бухгалтер · Финансовый коуч · Налоговый эксперт
          </div>
          <p className="text-lg opacity-80 mb-10 leading-relaxed text-gray-500 dark:text-gray-400 font-medium text-justify">
            Более 20 лет практики в бухгалтерском учёте, налогообложении и финансовом консалтинге. Работаю с предпринимателями и частными лицами - от разовых консультаций до долгосрочного сопровождения. Моя цель - не просто дать ответ, а научить клиента понимать свои финансы.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
            {stats.map((stat, i) => (
              <div key={i} className="glass p-8 rounded-[32px] text-center flex flex-col items-center group border-brand-green/5 dark:border-white/5">
                <div className="text-3xl font-black accent-gradient leading-none mb-2">{stat.value}</div>
                <div className="text-[10px] font-bold uppercase tracking-widest opacity-40 leading-tight text-gray-500 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] opacity-40 mb-6 text-brand-green-dark dark:text-white">Сертификаты и регалии</h3>
            {certs.map((cert) => (
              <div key={cert} className="flex items-center gap-5 group">
                <div className="w-8 h-8 rounded-xl bg-brand-green/10 dark:bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-brand-gold/20 transition-all border border-brand-green/5 dark:border-white/10">
                  <CheckCircle2 size={16} className="text-brand-green dark:text-brand-gold" />
                </div>
                <span className="text-sm font-bold opacity-70 group-hover:opacity-100 transition-opacity text-brand-green-dark/80 dark:text-white/80">{cert}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
