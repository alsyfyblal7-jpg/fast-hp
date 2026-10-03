import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, ArrowUp, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PHONE_NUMBER, WHATSAPP_NUMBER } from '../data';

export const FloatingActionWidget: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isTooltipOpen, setIsTooltipOpen] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 left-6 z-40 flex flex-col items-center gap-3">
      {/* Back to top button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="w-11 h-11 rounded-full bg-[#1a1a2e] text-[#C9A227] hover:bg-[#C9A227] hover:text-[#1a1a2e] border border-white/20 shadow-xl flex items-center justify-center transition-all cursor-pointer group"
            title="العودة للأعلى"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Direct Phone Call Button */}
      <a
        href={`tel:${PHONE_NUMBER}`}
        className="w-12 h-12 rounded-full bg-[#C9A227] text-[#1a1a2e] hover:bg-[#A67C00] shadow-xl flex items-center justify-center transition-transform hover:scale-110 active:scale-95 border-2 border-white/20"
        title="اتصال مباشر: 0508029328"
      >
        <Phone className="w-5 h-5 fill-current" />
      </a>

      {/* WhatsApp Floating Button with Notification Bubble */}
      <div className="relative">
        <AnimatePresence>
          {isTooltipOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute bottom-16 left-0 bg-[#1a1a2e] text-white p-3 rounded-2xl shadow-2xl border border-[#C9A227]/40 w-64 text-right"
            >
              <button
                onClick={() => setIsTooltipOpen(false)}
                className="absolute -top-1.5 -left-1.5 w-5 h-5 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center text-[10px]"
              >
                <X className="w-3 h-3" />
              </button>
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#E8D48B] mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>مهندس إتش بي فاست (HB FAST) متاح الآن</span>
              </div>
              <p className="text-[11px] text-slate-300 leading-snug">
                معاينة مجانية وعرض سعر فوري لكافة أحياء الرياض. تواصل معنا مباشرة!
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('السلام عليكم إتش بي فاست، أرغب في استشارة ومعاينة مجانية لدهانات وتشطيبات منزلي بالرياض')}`}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl relative group cursor-pointer"
          title="تواصل واتساب"
        >
          <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none" />
          <MessageCircle className="w-7 h-7 fill-current relative z-10" />
        </motion.a>
      </div>
    </div>
  );
};
