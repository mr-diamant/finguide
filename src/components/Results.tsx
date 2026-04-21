import { motion } from 'motion/react';
import { useCardReveal } from '../hooks/useCardReveal';
import { useLang } from '../context/LanguageContext';

const caseImgs = [
  'https://finguide.kz/images/snizili.webp',
  'https://finguide.kz/images/buhgalter.webp',
  'https://finguide.kz/images/startup.webp',
];

function ResultCard({ c, i }: { c: { title: string; desc: string; img: string }; i: number }) {
  const ref = useCardReveal(i * 70);
  return (
    <div
      ref={ref}
      className="bg-white p-8 md:p-10 rounded-[40px] border border-brand-green/20 hover:border-brand-gold/50 transition-colors group flex flex-col items-center text-center shadow-sm"
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
    </div>
  );
}

export default function Results() {
  const { t } = useLang();
  const r = t.results;

  const cases = r.items.map((item, i) => ({ ...item, img: caseImgs[i] }));

  return (
    <section id="results" className="py-24 px-6 bg-white dark:bg-brand-deep-dark relative overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gold mb-4"
          >
            {r.label}
          </motion.h2>
          <motion.div
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black tracking-tight text-brand-green-dark dark:text-white"
          >
            {r.title1} <span className="accent-gradient italic text-brand-gold">{r.titleAccent}</span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((c, i) => (
            <ResultCard key={i} c={c} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
