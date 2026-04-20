import { motion } from 'motion/react';
import { AlertCircle, ShieldAlert, BookOpen, TrendingUp } from 'lucide-react';

const problems = [
  {
    title: "Хаос в учёте",
    desc: "Деньги приходят и уходят, но непонятно куда. Нет чёткой картины финансов бизнеса - только ощущение что «что-то идёт не так».",
    img: "https://finguide.kz/images/chaos.webp"
  },
  {
    title: "Страх налогов и проверок",
    desc: "Налоговое законодательство меняется, штрафы растут. Страшно сделать ошибку и получить неприятности от налоговой.",
    img: "https://finguide.kz/images/shtraf.webp"
  },
  {
    title: "Нет финансовой грамотности",
    desc: "Открыл бизнес, но не знаю как правильно вести ИП, платить налоги, считать прибыль.",
    img: "https://finguide.kz/images/finance.webp"
  },
  {
    title: "Потолок в карьере бухгалтера",
    desc: "Работаешь в профессии, но хочется большего: стать экспертом, повысить ценность, зарабатывать больше. Непонятно куда двигаться.",
    img: "https://finguide.kz/images/potolok.webp"
  }
];

export default function Problem() {
  return (
    <section id="problem" className="py-24 px-6 relative overflow-hidden bg-white dark:bg-brand-deep-dark transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gold mb-4"
          >
            Узнаёте себя?
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black tracking-tight text-brand-green-dark dark:text-white"
          >
            Многие предприниматели и специалисты <br /> 
            сталкиваются с <span className="accent-gradient italic">одними и теми же</span> проблемами
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 md:p-12 rounded-[40px] border border-brand-green/5 flex flex-col justify-between relative overflow-hidden group min-h-[360px] cursor-default shadow-sm"
            >
              {/* Content Side */}
              <div className="relative z-10 max-w-[65%]">
                <h3 className="text-2xl md:text-3xl font-black mb-4 text-brand-green-dark leading-tight">
                  {p.title}
                </h3>
                <p className="opacity-60 text-gray-600 font-medium leading-relaxed mb-8">
                  {p.desc}
                </p>
              </div>

              {/* Live Icon Side */}
              <div className="absolute -right-4 -bottom-4 w-1/2 h-1/2 md:w-2/3 md:h-2/3 flex items-end justify-end pointer-events-none">
                <motion.img 
                  src={p.img} 
                  alt={p.title}
                  className="w-full h-full object-contain object-right-bottom transition-transform duration-700 group-hover:scale-110 group-hover:-translate-y-4 mix-blend-multiply"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Decorative Glow */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-gold/5 rounded-full blur-[80px] group-hover:bg-brand-gold/10 transition-all" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
