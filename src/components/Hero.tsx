import React from 'react';
import { Phone, MessageCircle, ArrowLeft, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { ASSETS, BRAND_NAME, BRAND_SHORT, PHONE_NUMBER, WHATSAPP_NUMBER } from '../data';

interface HeroProps {
  onOpenConsultation: () => void;
  onOpenEstimator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation, onOpenEstimator }) => {
  return (
    <section className="relative w-full h-[85vh] min-h-[580px] max-h-[820px] flex items-center justify-center text-center overflow-hidden">
      
      {/* 
        The Stunning Decor Room Background (Crisp, Clear, Bright & Fully Visible)
        Exactly as in the user's screenshot
      */}
      <img 
        src={ASSETS.heroBg} 
        alt="مقاول دهانات وديكورات الرياض - إتش بي فاست"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        fetchPriority="high"
      />

      {/* Subtle gentle vignette just for high text contrast without darkening the room */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-black/35 pointer-events-none" />

      {/* Content overlay matching the exact typography and layout in the screenshot */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center justify-center">
        
        {/* Main H1 Title in the exact warm gold color from the screenshot */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#C9A227] tracking-tight leading-[1.2] mb-4 text-balance drop-shadow-[0_2px_10px_rgba(0,0,0,0.65)]"
          style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.6)' }}
        >
          مقاول دهانات وديكورات الرياض
        </motion.h1>

        {/* Subtitle in crisp white with subtle shadow matching the screenshot */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-base sm:text-xl md:text-2xl text-white font-semibold max-w-2xl mx-auto leading-relaxed mb-8 drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)]"
          style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}
        >
          نحول منزلك إلى تحفة معمارية بأساليب عصرية وجودة استثنائية
        </motion.p>

        {/* The 2 Iconic Action Buttons matching the screenshot exactly */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4"
        >
          {/* WhatsApp Button (Gold filled pill with white WhatsApp icon) */}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('السلام عليكم إتش بي فاست، أرغب في استشارة ومعاينة مجانية لدهانات وتشطيبات منزلي بالرياض')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 sm:py-3.5 px-6 sm:px-8 rounded-full bg-[#C9A227] hover:bg-[#A67C00] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl transition-all duration-200 active:scale-95 cursor-pointer border border-[#E8D48B]/40"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>تواصل واتساب</span>
          </a>

          {/* Direct Phone Call Button (White pill with gold icon and text) */}
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="py-3 sm:py-3.5 px-6 sm:px-8 rounded-full bg-white hover:bg-slate-50 text-[#A67C00] font-black text-sm sm:text-base flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl transition-all duration-200 active:scale-95 cursor-pointer border border-slate-200/80"
          >
            <Phone className="w-4 h-4 fill-current text-[#C9A227]" />
            <span>اتصال مباشر</span>
          </a>
        </motion.div>

        {/* Small badge linking to quotation form */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6"
        >
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-1.5 text-xs text-white/95 hover:text-[#E8D48B] bg-black/40 hover:bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 transition cursor-pointer shadow-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C9A227]" />
            <span>احصل على عرض سعر ومعاينة مجانية لدهان منزلك ←</span>
          </button>
        </motion.div>

      </div>
    </section>
  );
};
