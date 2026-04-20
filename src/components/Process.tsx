import { motion } from 'motion/react';

const steps = [
  {
    img: 'https://finguide.kz/images/1.webp',
    title: 'Первичная консультация',
    desc: 'Разбираем вашу ситуацию, задачи и цели. Определяем формат и объём работы.' 
  },
  {
    img: 'https://finguide.kz/images/2.webp',
    title: 'Анализ и план', 
    desc: 'Изучаем текущее состояние финансов. Составляем конкретный план действий.' 
  },
  {
    img: 'https://finguide.kz/images/3.webp',
    title: 'Работа и сопровождение',
    desc: 'Реализуем план. Мы на связи - отвечаем на вопросы, корректируем курс согласно стратегии.',
  },
  {
    img: 'https://finguide.kz/images/4.webp',
    title: 'Результат',
    desc: 'Вы получаете не просто ответы — вы получаете систему, которая работает сама.' 
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 px-6 md:px-10 relative overflow-hidden bg-white dark:bg-brand-deep-dark transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gold mb-6"
          >
            Как мы работаем
          </motion.h2>
          <div className="text-4xl md:text-5xl font-black tracking-tight text-brand-green-dark dark:text-white">
            Как строится <span className="accent-gradient italic">работа</span>
          </div>
          <p className="mt-6 text-gray-500 dark:text-gray-400 font-medium opacity-60">Простой и понятный процесс - от первого контакта до результата.</p>
        </div>

        <div className="relative">
          {/* Connector Line - Hidden on smaller screens, adjusted for larger cards */}
          <div className="absolute top-16 left-0 w-full h-px bg-brand-green/10 dark:bg-white/5 -z-10 hidden lg:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                className="relative flex flex-col items-center text-center p-8 rounded-[32px] bg-white border border-brand-green/5 shadow-sm hover:shadow-xl hover:border-brand-gold/20 transition-all duration-500 group"
              >
                <div className="w-32 h-32 flex items-center justify-center mb-6 transition-all duration-500 group-hover:-translate-y-3 group-hover:scale-110">
                  <img 
                    src={step.img} 
                    alt={`Step ${i + 1}`} 
                    className="w-full h-full object-contain mix-blend-multiply"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4 leading-tight group-hover:text-brand-green transition-colors text-brand-green-dark">
                  {step.title}
                </h3>
                <p className="text-sm opacity-60 leading-relaxed max-w-xs text-gray-500 font-medium">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
