import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import ReviewModal from './ReviewModal';
import { useLang } from '../context/LanguageContext';

const testimonialContents = [
  {
    content: "Мой стаж в предпринимательской деятельности — 16 лет... Айнур Сериковна не просто разложила по полкам различия между режимами налогообложения для логиста, но и чётко показала, как легально минимизировать налоговую базу без риска доначислений. Главные плюсы в её работе: оперативность, конкретика и полное погружение в учётный процесс — никакой «воды», только суть.",
    img: "https://finguide.kz/images/feed1.webp"
  },
  {
    content: "Работаю с Айнурой больше 4 лет. Айнур — бухгалтер очень грамотный, ответственный. Отлично знает Налоговый Кодекс. Все мои отчёты составляет без ошибок и сдаёт вовремя. Благодаря ей после сдачи годового отчёта я получила благодарность от НК.",
    img: "https://finguide.kz/images/feed2.webp"
  },
  {
    content: "Я тебе много раз говорила про твои качества как человека — в тебе прежде всего человечность. Как профессионал ты состоялась ещё больше, имея ответственность. Когда я обращаюсь к тебе, даже если ты в данный момент не имеешь ответа — ты обязательно вернёшься с ответом. Я счастливый клиент, Айнур.",
    img: "https://finguide.kz/images/feed3.webp"
  },
  {
    content: "Работать с Айнур очень комфортно. Как специалист знает и выполняет свою работу чётко и вовремя. Может объяснить на простом языке сложные вопросы по финансам и налогам. Быстро решает вопросы по налогам.",
    img: "https://finguide.kz/images/feed4.webp"
  },
  {
    content: "Столько установок оказывается ещё осталось... Благодарю тебя за сегодняшнюю сессию. Буду выполнять домашнее задание. Сразу скажу — появляется сопротивление. Но я уже знаю, что смогу сделать так, чтобы денег было много.",
    img: "https://finguide.kz/images/feed5.webp"
  },
];

function TestimonialCard({ content, img, name, role, i }: { content: string; img: string; name: string; role: string; i: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let visible = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          visible = true;
          setTimeout(() => {
            el.classList.add('revealed');
          }, i * 70);
        } else {
          visible = false;
          el.classList.remove('revealed');
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);

    requestAnimationFrame(() => {
      if (!visible) {
        el.classList.add('card-reveal');
      }
    });

    return () => observer.disconnect();
  }, [i]);

  return (
    <div
      ref={ref}
      className="bg-white p-8 md:p-10 rounded-[40px] border border-brand-green/5 relative group shadow-sm hover:shadow-xl flex flex-col h-full"
    >
      <div className="absolute top-8 right-8 opacity-10 group-hover:opacity-20 transition-opacity">
        <Quote size={40} className="text-brand-green" />
      </div>

      <div className="flex gap-1 mb-6 text-brand-gold">
        {[...Array(5)].map((_, j) => (
          <Star key={j} size={14} fill="currentColor" />
        ))}
      </div>

      <div className="text-gray-600 font-medium leading-relaxed mb-10 flex-1 relative z-10 italic">
        «{content}»
      </div>

      <div className="flex items-center gap-5 pt-6 border-t border-brand-green/5">
        <div className="w-20 h-20 rounded-full bg-gray-100 overflow-hidden ring-2 ring-brand-green/5 transition-transform duration-500 group-hover:scale-105 shrink-0 shadow-md">
          <img
            src={img}
            alt={name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div>
          <div className="font-bold text-brand-green-dark text-lg leading-tight">{name}</div>
          <div className="text-[10px] font-bold uppercase tracking-widest text-brand-gold mt-1">{role}</div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [reviewOpen, setReviewOpen] = useState(false);
  const { t } = useLang();
  const tm = t.testimonials;

  return (
    <section id="testimonials" className="py-32 px-6 relative overflow-hidden bg-white dark:bg-brand-deep-dark transition-colors duration-500">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-gold/5 dark:bg-brand-gold/10 rounded-full blur-[140px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 text-brand-green-dark dark:text-white">
          <motion.h2
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-gold mb-4"
          >
            {tm.label}
          </motion.h2>
          <motion.div
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black tracking-tight"
          >
            {tm.title1} <span className="accent-gradient italic">{tm.titleAccent}</span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialContents.map((item, i) => (
            <TestimonialCard
              key={i}
              content={item.content}
              img={item.img}
              name={tm.authors[i].name}
              role={tm.authors[i].role}
              i={i}
            />
          ))}
        </div>

        <motion.div
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mt-14"
        >
          <button
            onClick={() => setReviewOpen(true)}
            className="bg-brand-green hover:bg-brand-green-dark text-white px-12 py-5 rounded-2xl font-bold transition-all shadow-xl shadow-brand-green/20 active:scale-95 text-lg"
          >
            {tm.leaveReview}
          </button>
        </motion.div>
      </div>

      <ReviewModal isOpen={reviewOpen} onClose={() => setReviewOpen(false)} />
    </section>
  );
}
