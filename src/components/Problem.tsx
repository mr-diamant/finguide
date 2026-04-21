import { motion } from 'motion/react';
import { useCardReveal } from '../hooks/useCardReveal';
import { useLang } from '../context/LanguageContext';

const imgs = [
  'https://finguide.kz/images/chaos.webp',
  'https://finguide.kz/images/shtraf.webp',
  'https://finguide.kz/images/finance.webp',
  'https://finguide.kz/images/potolok.webp',
];

function ProblemCard({ title, desc, img, i }: { title: string; desc: string; img: string; i: number }) {
  const ref = useCardReveal(i * 70);
  return (
    <div
      ref={ref}
      className="bg-white p-8 md:p-12 rounded-[40px] border border-brand-green/5 flex flex-col justify-between relative overflow-hidden group min-h-[400px] md:min-h-[360px] cursor-default shadow-sm"
    >
      <div className="relative z-10 max-w-[65%]">
        <h3 className="text-2xl md:text-3xl font-black mb-4 text-brand-green-dark leading-tight">{title}</h3>
        <p className="opacity-60 text-gray-600 font-medium leading-relaxed mb-8">{desc}</p>
      </div>
      <div className="absolute -right-4 -bottom-4 w-3/4 h-3/4 md:w-2/3 md:h-2/3 flex items-end justify-end pointer-events-none">
        <motion.img
          src={img}
          alt={title}
          className="w-full h-full object-contain object-right-bottom transition-transform duration-700 group-hover:scale-110 group-hover:-translate-y-4 mix-blend-multiply"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-gold/5 rounded-full blur-[80px] group-hover:bg-brand-gold/10 transition-all" />
    </div>
  );
}

export default function Problem() {
  const { t } = useLang();
  const p = t.problem;

  return (
    <section id="problem" className="py-24 px-6 relative overflow-hidden bg-white dark:bg-brand-deep-dark transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gold mb-4"
          >
            {p.label}
          </motion.h2>
          <motion.div
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black tracking-tight text-brand-green-dark dark:text-white"
          >
            {p.title1} <br />
            {p.title2} <span className="accent-gradient italic">{p.titleAccent}</span> {p.title3}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {p.items.map((item, i) => (
            <ProblemCard key={i} title={item.title} desc={item.desc} img={imgs[i]} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
