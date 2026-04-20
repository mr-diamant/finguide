import { motion } from 'motion/react';
import { Brain, Users, GraduationCap, CheckCircle2 } from 'lucide-react';
import { useModal } from '../context/ModalContext';

const targetAudience = [
  "Корпоративные команды и отделы",
  "Предпринимательские клубы и бизнес-сообщества",
  "Тренинги и конференции по финансам",
  "Учебные заведения (колледжи, университеты)"
];

export default function Game() {
  const { openModal } = useModal();

  return (
    <section id="game" className="py-24 px-6 relative overflow-hidden bg-white dark:bg-brand-deep-dark transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="glass p-6 md:p-20 rounded-[40px] relative overflow-hidden flex flex-col items-center border-brand-green/10 dark:border-white/5 dark:bg-brand-green-dark/20 shadow-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 dark:bg-brand-gold/10 blur-[120px] rounded-full -mr-48 -mt-48" />
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.15 }}
            className="text-center max-w-4xl relative z-10"
          >
            <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-gold mb-6">Трансформационная игра</div>

            <h2 className="text-4xl md:text-5xl font-black mb-10 tracking-tight text-brand-green-dark dark:text-white leading-tight">
              Авторская игра <br />
              <span className="accent-gradient italic text-brand-gold">Финансовая свобода</span>
            </h2>

            <div className="w-full md:w-[480px] md:h-[480px] flex items-center justify-center mb-10 mx-auto">
              <img
                src="https://finguide.kz/images/game.webp"
                alt="Game Icon"
                className="w-full h-auto object-contain mix-blend-multiply rounded-[24px] dark:p-4"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <p className="text-lg text-gray-500 dark:text-gray-400 mb-12 leading-relaxed font-medium">
              Уникальный инструмент для групповой и корпоративной работы. Игра меняет отношение к деньгам через живое взаимодействие, а не лекцию.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left mb-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                className="glass p-8 rounded-[32px] border-brand-green/5 dark:border-white/5 bg-white/50 dark:bg-white/5"
              >
                <h3 className="text-brand-gold font-bold uppercase tracking-widest text-xs mb-6 flex items-center gap-3">
                  <Users size={16} /> Для кого
                </h3>
                <ul className="space-y-4">
                  {targetAudience.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-brand-green-dark/80 dark:text-white/70 font-bold text-sm">
                      <div className="mt-1 w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true, amount: 0.2 }}
                className="glass p-8 rounded-[32px] border-brand-green/5 dark:border-white/5 bg-white/50 dark:bg-white/5"
              >
                <h3 className="text-brand-gold font-bold uppercase tracking-widest text-xs mb-6 flex items-center gap-3">
                  <Brain size={16} /> Что вы получите
                </h3>
                <p className="text-brand-green-dark dark:text-white font-bold text-sm leading-relaxed mb-6">
                  Новое мышление о деньгах, конкретные инструменты личного бюджета, понимание как деньги работают в бизнесе.
                </p>
                <div className="flex items-center gap-2 text-brand-green dark:text-brand-gold text-[10px] font-black uppercase tracking-widest bg-brand-green/5 dark:bg-white/5 px-4 py-2 rounded-full w-fit">
                  <CheckCircle2 size={12} /> Результат за 1 вечер
                </div>
              </motion.div>
            </div>

            <button 
              onClick={() => openModal('Трансформационная игра', 'Проведите уникальное мероприятие для вашей команды. Оставьте заявку, и мы обсудим детали проведения.')}
              className="bg-brand-green hover:bg-brand-green-dark text-white px-12 py-6 rounded-2xl font-bold transition-all shadow-2xl shadow-brand-green/20 active:scale-95 text-lg"
            >
              Записаться на игру
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
