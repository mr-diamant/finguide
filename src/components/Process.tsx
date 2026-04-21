import { motion } from 'motion/react';
import { useCardReveal } from '../hooks/useCardReveal';
import { useLang } from '../context/LanguageContext';

const stepImgs = [
  'https://finguide.kz/images/1.webp',
  'https://finguide.kz/images/2.webp',
  'https://finguide.kz/images/3.webp',
  'https://finguide.kz/images/4.webp',
];

function ProcessStep({ step, i }: { step: { title: string; desc: string; img: string }; i: number }) {
  const ref = useCardReveal(i * 70);
  return (
    <div
      ref={ref}
      className="relative flex flex-col items-center text-center p-8 rounded-[32px] bg-white border border-brand-green/5 shadow-sm hover:shadow-xl hover:border-brand-gold/20 transition-shadow duration-300 group"
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
    </div>
  );
}

export default function Process() {
  const { t } = useLang();
  const p = t.process;

  const steps = p.steps.map((s, i) => ({ ...s, img: stepImgs[i] }));

  return (
    <section id="process" className="py-24 px-6 md:px-10 relative overflow-hidden bg-white dark:bg-brand-deep-dark transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.h2
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.4 }}
            className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gold mb-6"
          >
            {p.label}
          </motion.h2>
          <div className="text-4xl md:text-5xl font-black tracking-tight text-brand-green-dark dark:text-white">
            {p.title1} <span className="accent-gradient italic">{p.titleAccent}</span>
          </div>
          <p className="mt-6 text-gray-500 dark:text-gray-400 font-medium opacity-60">{p.subtitle}</p>
        </div>

        <div className="relative">
          <div className="absolute top-16 left-0 w-full h-px bg-brand-green/10 dark:bg-white/5 -z-10 hidden lg:block" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <ProcessStep key={i} step={step} i={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
