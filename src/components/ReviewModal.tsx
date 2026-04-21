import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, User, Phone, MessageSquare, Send } from 'lucide-react';
import IMask from 'imask';

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReviewModal({ isOpen, onClose }: ReviewModalProps) {
  const [formData, setFormData] = useState({ name: '', phone: '', review: '' });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const phoneInputRef = useRef<HTMLInputElement>(null);
  const maskRef = useRef<any>(null);

  useEffect(() => {
    if (phoneInputRef.current) {
      maskRef.current = IMask(phoneInputRef.current, {
        mask: '+{7} (000) 000-00-00',
        lazy: false,
      });
      maskRef.current.on('accept', () => {
        setFormData(prev => ({ ...prev, phone: maskRef.current?.value || '' }));
      });
    }
    return () => { maskRef.current?.destroy(); };
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/send.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          review: formData.review,
          subject: '⭐ Отзыв клиента',
        }),
      });
      const data = await res.json();
      if (data.ok) {
        setSent(true);
      } else {
        alert('Ошибка отправки. Попробуйте позже.');
      }
    } catch {
      alert('Ошибка отправки. Попробуйте позже.');
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setSent(false);
    setFormData({ name: '', phone: '', review: '' });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-brand-green-dark/60 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-white dark:bg-brand-deep-dark rounded-[40px] shadow-2xl overflow-hidden border border-white/20"
          >
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 dark:bg-white/10 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-white/20 transition-colors z-10"
            >
              <X size={20} />
            </button>

            <div className="p-8 sm:p-12">
              {sent ? (
                <div className="text-center py-8">
                  <div className="w-20 h-20 rounded-full bg-brand-green/10 flex items-center justify-center mx-auto mb-6">
                    <Send size={32} className="text-brand-green" />
                  </div>
                  <h2 className="text-3xl font-black text-brand-green-dark dark:text-white mb-3 tracking-tight">Спасибо за отзыв!</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-medium leading-relaxed mb-8">Ваш отзыв очень важен для нас.</p>
                  <button
                    onClick={handleClose}
                    className="bg-brand-green hover:bg-brand-green-dark text-white px-10 py-4 rounded-[24px] font-black transition-all active:scale-[0.98]"
                  >
                    Закрыть
                  </button>
                </div>
              ) : (
                <>
                  <div className="text-center mb-10">
                    <h2 className="text-3xl font-black text-brand-green-dark dark:text-white mb-3 tracking-tight">
                      Оставить отзыв
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium leading-relaxed">
                      Поделитесь своим опытом работы с нами
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="relative group">
                      <User className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-brand-green transition-colors" size={20} />
                      <input
                        required
                        type="text"
                        placeholder="Ваше имя"
                        className="w-full pl-14 pr-6 py-5 bg-gray-50 dark:bg-white/5 border-2 border-transparent focus:border-brand-green focus:bg-white dark:focus:bg-brand-deep-dark rounded-[24px] outline-none transition-all text-brand-green-dark dark:text-white font-bold"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div className="relative group">
                      <Phone className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-brand-green transition-colors" size={20} />
                      <input
                        required
                        type="tel"
                        ref={phoneInputRef}
                        className="w-full pl-14 pr-6 py-5 bg-gray-50 dark:bg-white/5 border-2 border-transparent focus:border-brand-green focus:bg-white dark:focus:bg-brand-deep-dark rounded-[24px] outline-none transition-all text-brand-green-dark dark:text-white font-bold"
                      />
                    </div>

                    <div className="relative group">
                      <MessageSquare className="absolute left-6 top-6 text-gray-400 group-focus-within:text-brand-green transition-colors" size={20} />
                      <textarea
                        required
                        placeholder="Ваш отзыв"
                        rows={4}
                        className="w-full pl-14 pr-6 py-5 bg-gray-50 dark:bg-white/5 border-2 border-transparent focus:border-brand-green focus:bg-white dark:focus:bg-brand-deep-dark rounded-[24px] outline-none transition-all text-brand-green-dark dark:text-white font-bold resize-none"
                        value={formData.review}
                        onChange={(e) => setFormData({ ...formData, review: e.target.value })}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-brand-green hover:bg-brand-green-dark disabled:opacity-60 text-white py-5 rounded-[24px] font-black text-lg shadow-xl shadow-brand-green/20 transition-all active:scale-[0.98] flex items-center justify-center gap-3 mt-4"
                    >
                      <Send size={20} />
                      {loading ? 'Отправка...' : 'Отправить отзыв'}
                    </button>
                  </form>

                  <p className="text-[10px] text-center text-gray-400 mt-8 leading-relaxed font-medium">
                    Нажимая на кнопку, вы даете согласие на обработку <br />
                    персональных данных и соглашаетесь с политикой конфиденциальности.
                  </p>
                </>
              )}
            </div>

            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-brand-gold/5 blur-[60px] rounded-full pointer-events-none" />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
