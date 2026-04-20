import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useModal } from '../context/ModalContext';

const services = [
  {
    title: 'Налоговый консалтинг',
    desc: 'Аудит налоговой нагрузки, оптимизация, сопровождение при проверках. Работаем с ИП, ТОО, самозанятыми в Казахстане.',
    img: 'https://finguide.kz/images/consulting.webp',
  },
  {
    title: 'Финансовый коучинг',
    desc: 'Индивидуальная работа с предпринимателем: бюджет, денежный поток, точка безубыточности, финансовые цели.',
    img: 'https://finguide.kz/images/coaching.webp',
  },
  {
    title: 'Обучение и повышение квалификации бухгалтеров',
    desc: 'Курсы, наставничество и разборы для бухгалтеров, которые хотят вырасти до уровня эксперта и финансового советника.',
    img: 'https://finguide.kz/images/education.webp',
  },
];

export default function Services() {
  const { openModal } = useModal();

  return (
    <section id="services" className="py-24 px-6 relative overflow-hidden bg-white dark:bg-brand-deep-dark transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black tracking-tight mb-6 text-brand-green-dark dark:text-white"
          >
            FinGuide Expert Ваш <br /> <span className="accent-gradient italic">финансовый навигатор</span>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="opacity-50 max-w-2xl mx-auto text-gray-500 dark:text-gray-400 font-medium"
          >
            Не просто консультация - сопровождение до результата. <br /> Работаем с каждым клиентом индивидуально, пока задача не решена.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative h-[280px] rounded-[40px] overflow-hidden shadow-2xl transition-all duration-500 cursor-pointer"
              onClick={() => openModal(s.title, s.desc)}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={s.img} 
                  alt={s.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-green-dark/30 group-hover:bg-brand-green-dark/40 transition-colors" />
              </div>

              {/* Glass Overlay Box - styled as standard, no distinct hover state for background/shadow */}
              <div className="absolute bottom-5 left-5 right-5 bg-white p-5 rounded-[32px] flex items-center justify-between gap-4 border border-white/40 shadow-2xl transition-all duration-500">
                <div className="flex-1">
                  <h3 className="text-base font-black text-brand-green-dark mb-0.5 leading-tight">{s.title}</h3>
                  <p className="text-[11px] text-brand-green-dark/80 line-clamp-2 leading-relaxed font-bold">
                    {s.desc}
                  </p>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-brand-gold flex items-center justify-center shrink-0 shadow-lg shadow-brand-gold/20 transition-all group-hover:scale-110">
                  <ArrowRight size={20} className="text-brand-green-dark" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-20 p-px glass rounded-[40px] border-brand-green/10 dark:border-white/5 shadow-2xl/10"
        >
          <div className="rounded-[40px] px-12 py-16 bg-white dark:bg-brand-green-dark flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left relative overflow-hidden group transition-colors duration-500">
            <div className="relative z-10">
              <div className="text-3xl font-black mb-3 tracking-tight text-brand-green-dark dark:text-white">Нужна индивидуальная стратегия?</div>
              <p className="opacity-50 text-gray-500 dark:text-gray-400 font-medium">Запишитесь на бесплатную вводную встречу на 15 минут.</p>
            </div>
            <button 
              onClick={() => openModal('Индивидуальная стратегия', 'Запишитесь на бесплатную вводную встречу на 15 минут, и мы разберем вашу ситуацию.')}
              className="bg-brand-green hover:bg-brand-green-dark text-white px-12 py-5 rounded-2xl font-bold transition-all shadow-xl shadow-brand-green/20 dark:shadow-brand-green/5 whitespace-nowrap relative z-10 active:scale-95"
            >
              Оставить заявку
            </button>
            <div className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-brand-gold/10 dark:bg-brand-gold/5 blur-[100px] rounded-full group-hover:bg-brand-gold/20 transition-all" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
