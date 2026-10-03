import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PHONE_NUMBER, WHATSAPP_NUMBER, TIKTOK_URL } from '../data';

export const FloatingActionWidget: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 350);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div 
      className="fixed left-3 sm:left-5 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-3"
      data-purpose="side-floating-buttons"
    >
      {/* 1. WhatsApp Button (Green) */}
      <motion.a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('السلام عليكم إتش بي فاست، أرغب في استشارة ومعاينة مجانية لدهانات وتشطيبات منزلي بالرياض')}`}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.95 }}
        className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl hover:shadow-2xl transition-all cursor-pointer relative group"
        title="تواصل واتساب مباشر"
        aria-label="تواصل واتساب"
      >
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-35 animate-ping pointer-events-none" />
        <MessageCircle className="w-6 h-6 fill-current relative z-10" />
      </motion.a>

      {/* 2. Direct Phone Call Button (Gold) */}
      <motion.a
        href={`tel:${PHONE_NUMBER}`}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.95 }}
        className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-gradient-to-tr from-[#A67C00] via-[#C9A227] to-[#E8D48B] text-white flex items-center justify-center shadow-xl hover:shadow-2xl transition-all cursor-pointer"
        title="اتصال هاتفي مباشر: 0508029328"
        aria-label="اتصال هاتفي مباشر"
      >
        <Phone className="w-5 h-5 fill-current" />
      </motion.a>

      {/* 3. TikTok Button (Black with official icon) */}
      <motion.a
        href={TIKTOK_URL}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.95 }}
        className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-black text-white flex items-center justify-center shadow-xl hover:shadow-2xl transition-all cursor-pointer border border-white/20 group"
        title="تابعنا على تيك توك: @oscar_paints05"
        aria-label="حساب تيك توك"
      >
        <svg className="w-6 h-6 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49 6.27 6.27 0 0 0 1.96-4.49V8.89a8.28 8.28 0 0 0 5.21 1.83V7.27a4.84 4.84 0 0 1-1.4-.58z"/>
        </svg>
      </motion.a>

      {/* 4. Back to top button (Conditional upon scrolling) */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-white text-slate-700 hover:text-[#C9A227] border border-slate-200 shadow-lg flex items-center justify-center transition-all cursor-pointer group mt-1"
            title="العودة للأعلى"
            aria-label="العودة للأعلى"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};
