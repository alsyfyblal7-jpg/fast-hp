import React, { useState } from 'react';
import { MessageCircle, Phone, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PHONE_NUMBER, WHATSAPP_NUMBER } from '../data';

export const FloatingActionWidget: React.FC = () => {
  const [isTooltipOpen, setIsTooltipOpen] = useState(true);

  return (
    <div className="fixed bottom-6 left-6 z-40 hidden sm:flex flex-col items-start gap-3 pointer-events-none">
      {/* Animated Greeting Bubble */}
      <AnimatePresence>
        {isTooltipOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="pointer-events-auto bg-white rounded-2xl p-3.5 shadow-xl border border-slate-100 max-w-xs text-right relative"
          >
            <button
              onClick={() => setIsTooltipOpen(false)}
              className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center text-xs shadow-xs cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold text-slate-800">مهندس المعاينة متاح الآن بالرياض</span>
            </div>
            <p className="text-[11px] text-slate-500 leading-relaxed mb-2.5">
              هل ترغب بمعرفة أحدث درجات دهانات أوسكار 2025 وتحديد موعد معاينة مجانية؟
            </p>
            <div className="flex items-center gap-2">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('السلام عليكم، أرغب في استشارة سريعة ومعاينة مجانية لدهانات منزلي')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-1.5 px-3 bg-[#25D366] hover:bg-[#20ba5a] text-white text-[11px] font-bold rounded-lg text-center shadow-xs transition"
              >
                تواصل واتساب
              </a>
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="py-1.5 px-3 bg-blue-50 hover:bg-blue-100 text-[#0052B4] text-[11px] font-bold rounded-lg text-center transition"
              >
                اتصال
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Pulse Floating WhatsApp Button */}
      <motion.a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('السلام عليكم، أرغب في استشارة سريعة ومعاينة مجانية لدهانات منزلي')}`}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="pointer-events-auto w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl relative group cursor-pointer"
      >
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none" />
        <MessageCircle className="w-7 h-7 fill-current relative z-10" />
      </motion.a>
    </div>
  );
};
