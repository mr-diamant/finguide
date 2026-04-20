import { motion } from 'motion/react';
import { Target, TrendingUp, CheckCircle } from 'lucide-react';

const cases = [
  {
    title: "Снизили налоговую нагрузку на 30%",
    desc: "Предприниматель, ТОО, сфера торговли. После аудита нашли законные способы оптимизации налогов без рисков.",
    img: "https://finguide.kz/images/snizili.webp"
  },
  {
    title: "Бухгалтер вырос до финансового директора",
    desc: "После 3 месяцев наставничества специалист получил повышение и уверенно ведёт управленческий учёт.",
    img: "https://finguide.kz/images/buhgalter.webp"
  },
  {
    title: "Стартап прошёл первый год без штрафов",
    desc: "Помогли выстроить учёт с нуля: открытие ИП, режим налогообложения, кассовая дисциплина, отчётность.",
    img: "https://finguide.kz/images/startup.webp"
  }
];

export default function Results() {
  return (
    <section id="results" className="py-24 px-6 bg-white dark:bg-brand-deep-dark relative overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gold mb-4"
          >
            Что Вы получите
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black tracking-tight text-brand-green-dark dark:text-white"
          >
            Конкретные результаты, <span className="accent-gradient italic text-brand-gold">а не общие слова</span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 md:p-10 rounded-[40px] border border-brand-green/20 hover:border-brand-gold/50 transition-all group flex flex-col items-center text-center shadow-sm"
            >
              <div className="w-40 h-40 flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2">
                <img 
                  src={c.img} 
                  alt={c.title} 
                  className="w-full h-full object-contain mix-blend-multiply"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-2xl font-black mb-4 text-brand-green-dark leading-tight line-clamp-2">
                {c.title}
              </h3>
              <p className="opacity-60 text-gray-600 font-medium leading-relaxed">
                {c.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
