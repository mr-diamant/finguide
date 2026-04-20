import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/src/lib/utils';
import { useModal } from '../context/ModalContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { openModal } = useModal();

  const handleConsultationClick = () => {
    openModal('Консультация', 'Оставьте заявку, и мы свяжемся с вами в ближайшее время');
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const desktopLinks = [
    { name: 'Услуги', href: '#services' },
    { name: 'Об эксперте', href: '#expert' },
    { name: 'Результаты', href: '#results' },
    { name: 'Игра', href: '#game' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Контакты', href: '#contact' },
  ];

  const mobileLinks = [
    { name: 'Услуги', href: '#services' },
    { name: 'Об эксперте', href: '#expert' },
    { name: 'Как работаем', href: '#process' },
    { name: 'Результаты', href: '#results' },
    { name: 'Игра', href: '#game' },
    { name: 'Частые вопросы', href: '#faq' },
    { name: 'Отзывы', href: '#testimonials' },
    { name: 'Контакты', href: '#contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        isScrolled ? 'nav-glass py-3 h-20 flex items-center shadow-sm' : 'bg-transparent h-24 flex items-center'
      )}
    >
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img
            src="https://finguide.kz/page/brandbook/menu_logo.png"
            alt="FinGuide Logo"
            className="h-10 md:h-12 w-auto object-contain transition-all duration-500"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex gap-8 text-[11px] font-bold uppercase tracking-widest text-brand-green-dark/60 dark:text-white/40">
            {desktopLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="hover:text-brand-green-dark dark:hover:text-white hover:opacity-100 transition-all relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gold transition-all group-hover:w-full" />
              </motion.a>
            ))}
          </div>
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={handleConsultationClick}
            className="bg-brand-green hover:bg-brand-green-dark text-white text-[11px] font-bold uppercase tracking-widest px-8 py-3 rounded-xl shadow-lg shadow-brand-green/10 transition-all active:scale-95"
          >
            Консультация
          </motion.button>
        </div>

        {/* Mobile Burger */}
        <button className="md:hidden text-brand-green-dark dark:text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-4 right-4 mt-4 p-8 flex flex-col gap-5 md:hidden rounded-[32px] max-h-[80vh] overflow-y-auto bg-white dark:bg-brand-deep-dark border border-brand-green/10 dark:border-white/10 shadow-2xl"
          >
            {mobileLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-bold text-brand-green-dark dark:text-white border-b border-brand-green/5 dark:border-white/5 pb-3 hover:text-brand-gold transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={handleConsultationClick}
              className="bg-brand-green text-white w-full py-4 rounded-xl font-bold transition-all active:scale-95 mt-2"
            >
              Записаться
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
