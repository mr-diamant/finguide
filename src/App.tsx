import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Services from './components/Services';
import Expert from './components/Expert';
import Process from './components/Process';
import Results from './components/Results';
import Game from './components/Game';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import ContactModal from './components/ContactModal';
import LegalModal from './components/LegalModal';
import { ModalProvider, useModal } from './context/ModalContext';
import { motion, useScroll, useSpring } from 'motion/react';
import { Sun, Moon } from 'lucide-react';
import WhatsAppButton from './components/WhatsAppButton';
import { useState, useEffect } from 'react';

function AppContent() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const { isOpen, content, closeModal } = useModal();

  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      return saved ? saved === 'dark' : true;
    }
    return false;
  });

  const [legalModal, setLegalModal] = useState<'privacy' | 'offer' | null>(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className="font-sans antialiased text-brand-green-dark selection:bg-brand-gold/30 relative">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-gold z-100 origin-left shadow-[0_0_15px_rgba(201,168,76,0.5)]"
        style={{ scaleX }}
      />

      <Navbar />

      <main>
        <Hero />
        <Problem />

        <Services />

        {/* Quote Section (Our Mission) - Moved here after Strategy Block inside Services */}
        <section className="py-24 bg-white dark:bg-brand-deep-dark transition-colors duration-500">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-brand-gold text-sm font-bold uppercase tracking-widest mb-6">Наша миссия</div>
              <blockquote className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-brand-green-dark dark:text-white">
                «Помочь каждому клиенту обрести <span className="accent-gradient italic">финансовую уверенность</span> — через знания, поддержку и практические инструменты.»
              </blockquote>
            </motion.div>
          </div>
        </section>

        <Expert />

        {/* Strategy Quote Section - Moved here before Process (How we work) */}
        <section className="py-24 bg-off-white dark:bg-linear-to-b dark:from-brand-deep-dark dark:to-brand-green-dark transition-colors duration-500">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-brand-gold text-sm font-bold uppercase tracking-widest mb-6">Наша стратегия</div>
              <blockquote className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-brand-green-dark dark:text-white">
                «Мы не останавливаемся на полпути. Пока у клиента есть задача — <span className="accent-gradient italic">мы рядом</span>. До результата, до уверенности, до финансовой свободы.»
              </blockquote>
            </motion.div>
          </div>
        </section>

        <Process />
        <Results />

        <Game />

        <FAQ />
        <Testimonials />

        <Contact />
      </main>

      <footer className="py-12 px-10 border-t border-brand-green/10 dark:border-white/5 bg-white dark:bg-brand-deep-dark transition-colors duration-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-brand-green-dark/40 dark:text-white/40 text-[10px] font-bold uppercase tracking-widest">
          <div className="flex items-center gap-4">
            <img
              src="https://finguide.kz/page/brandbook/menu_logo.png"
              alt="FinGuide Logo"
              className="h-8 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
              referrerPolicy="no-referrer"
            />
            <span>FinGuide Expert &copy; 2026. Актобе · Казахстан</span>
          </div>
          <div className="flex items-center gap-10">
            <a href="#services" className="hover:text-brand-gold transition-colors">Услуги</a>
            <button
              onClick={() => setLegalModal('privacy')}
              className="hover:text-brand-gold transition-colors cursor-pointer uppercase tracking-widest font-bold text-[10px]"
            >
              Политика
            </button>
            <button
              onClick={() => setLegalModal('offer')}
              className="hover:text-brand-gold transition-colors cursor-pointer uppercase tracking-widest font-bold text-[10px]"
            >
              Оферта
            </button>

            {/* iPhone style Theme Toggle */}
            <div className="flex items-center gap-3 ml-4 py-1 px-1.5 bg-brand-green/5 dark:bg-white/5 rounded-full border border-brand-green/10 dark:border-white/10">
              <Sun size={12} className={darkMode ? "text-gray-400" : "text-brand-gold"} />
              <button
                className="relative w-10 h-5 bg-brand-green/20 dark:bg-white/10 rounded-full transition-colors duration-300 focus:outline-none"
                onClick={toggleTheme}
              >
                <div className={`absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow-sm transform transition-transform duration-300 ${darkMode ? 'translate-x-5' : 'translate-x-0'}`} />
              </button>
              <Moon size={12} className={darkMode ? "text-white" : "text-brand-green-dark opacity-40"} />
            </div>
          </div>
        </div>
      </footer>

      {/* Global Contact Modal */}
      <ContactModal
        isOpen={isOpen}
        onClose={closeModal}
        title={content.title}
        description={content.description}
      />

      {/* Legal Modals */}
      <LegalModal type={legalModal} onClose={() => setLegalModal(null)} />

      {/* WhatsApp Float Button */}
      <WhatsAppButton />
    </div>
  );
}

export default function App() {
  return (
    <ModalProvider>
      <AppContent />
    </ModalProvider>
  );
}
