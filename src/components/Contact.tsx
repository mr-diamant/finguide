import { motion } from 'motion/react';
import { Phone, Mail, Instagram, Send, MapPin } from 'lucide-react';
import { useModal } from '../context/ModalContext';
import { useLang } from '../context/LanguageContext';

export default function Contact() {
  const { openModal } = useModal();
  const { t } = useLang();
  const c = t.contact;

  const contactItems = [
    { icon: Phone, label: c.phoneLabel, val: '+7 (771) 225-1020', link: 'https://wa.me/77712251020' },
    { icon: Send, label: 'Telegram', val: '@Rys_ainur', link: 'https://t.me/Rys_ainur' },
    { icon: Instagram, label: 'Instagram', val: '@ainur_rys', link: 'https://instagram.com/ainur_rys' },
    { icon: MapPin, label: c.locationLabel, val: c.locationVal, link: '#' },
  ];

  return (
    <section id="contact" className="py-32 px-6 md:px-10 relative overflow-hidden bg-brand-green-dark dark:bg-brand-deep-dark text-white transition-colors duration-500">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 dark:bg-brand-gold/10 rounded-full blur-[120px] -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-green-light/10 rounded-full blur-[100px] -ml-64 -mb-64" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-gold mb-4"
          >
            {c.label}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black mb-6 leading-tight tracking-tight"
          >
            {c.title1} <span className="accent-gradient italic">{c.titleAccent}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg opacity-80 max-w-2xl mx-auto leading-relaxed font-medium"
          >
            {c.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-10">
            {contactItems.map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                target="_blank"
                className="flex items-center gap-8 group cursor-pointer"
                whileHover={{ x: 10 }}
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand-gold transition-all shadow-xl dark:bg-brand-green-dark/50">
                  <item.icon size={24} className="text-brand-gold group-hover:text-brand-green-dark transition-colors" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40 mb-2">{item.label}</div>
                  <div className="text-xl font-bold opacity-100 group-hover:text-brand-gold transition-colors">{item.val}</div>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center lg:justify-end"
          >
            <div className="glass-dark p-8 md:p-12 rounded-[48px] border border-white/10 shadow-2xl relative w-full max-w-md text-center">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 blur-[80px] rounded-full" />
              <h3 className="text-3xl font-black mb-6 tracking-tight">{c.cardTitle}</h3>
              <p className="opacity-60 mb-10 text-sm leading-relaxed">{c.cardDesc}</p>
              <button
                onClick={() => openModal(c.cardTitle, c.cardDesc)}
                className="w-full bg-brand-gold text-brand-green-dark py-6 rounded-2xl font-black text-lg transition-all shadow-xl shadow-brand-gold/10 active:scale-[0.98] hover:bg-brand-gold-light"
              >
                {c.cardBtn}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
