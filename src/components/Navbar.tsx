import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/src/lib/utils';
import { useModal } from '../context/ModalContext';
import { useLang } from '../context/LanguageContext';
import { LANGS } from '../i18n';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { openModal } = useModal();
  const { lang, setLang, t } = useLang();

  const handleConsultationClick = () => {
    openModal(t.hero.modalTitle, t.hero.modalDesc);
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
    { name: t.nav.services, href: '#services' },
    { name: t.nav.expert, href: '#expert' },
    { name: t.nav.results, href: '#results' },
    { name: t.nav.game, href: '#game' },
    { name: t.nav.faq, href: '#faq' },
    { name: t.nav.contact, href: '#contact' },
  ];

  const mobileLinks = [
    { name: t.nav.services, href: '#services' },
    { name: t.nav.expert, href: '#expert' },
    { name: t.nav.process, href: '#process' },
    { name: t.nav.results, href: '#results' },
    { name: t.nav.game, href: '#game' },
    { name: t.nav.faq, href: '#faq' },
    { name: t.nav.testimonials, href: '#testimonials' },
    { name: t.nav.contact, href: '#contact' },
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
                key={link.href}
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
            {t.nav.consultation}
          </motion.button>

          {/* Desktop lang switcher */}
          <div className="flex items-center gap-0.5 bg-brand-green/5 dark:bg-white/5 rounded-xl border border-brand-green/10 dark:border-white/10 p-1">
            {LANGS.map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={cn(
                  'text-[10px] font-black uppercase tracking-wider px-2.5 py-1.5 rounded-lg transition-all',
                  lang === l
                    ? 'bg-brand-gold text-brand-green-dark shadow-sm'
                    : 'text-brand-green-dark/50 dark:text-white/40 hover:text-brand-green-dark dark:hover:text-white'
                )}
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Burger + Lang */}
        <div className="md:hidden flex items-center gap-3">
          <div className="flex items-center gap-0.5 bg-brand-green/5 dark:bg-white/5 rounded-xl border border-brand-green/10 dark:border-white/10 p-1">
            {LANGS.map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={cn(
                  'text-[10px] font-black uppercase tracking-wider px-2 py-1 rounded-lg transition-all',
                  lang === l
                    ? 'bg-brand-gold text-brand-green-dark shadow-sm'
                    : 'text-brand-green-dark/50 dark:text-white/40'
                )}
              >
                {l}
              </button>
            ))}
          </div>
          <button className="text-brand-green-dark dark:text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 md:hidden z-[-1]"
            />
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-4 right-4 mt-4 p-8 flex flex-col gap-5 md:hidden rounded-[32px] max-h-[80vh] overflow-y-auto bg-white dark:bg-brand-deep-dark border border-brand-green/10 dark:border-white/10 shadow-2xl"
            >
              {mobileLinks.map((link) => (
                <a
                  key={link.href}
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
                {t.nav.register}
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
