import React from 'react';
import { Phone, MessageCircle, ArrowLeft, ShieldCheck, Clock, CheckCircle2, Sparkles, Award } from 'lucide-react';
import { motion } from 'motion/react';
import { ASSETS, BRAND_NAME, BRAND_SHORT, PHONE_NUMBER, WHATSAPP_NUMBER } from '../data';

interface HeroProps {
  onOpenConsultation: () => void;
  onOpenEstimator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation, onOpenEstimator }) => {
  return (
    <section className="relative min-h-[620px] lg:min-h-[700px] flex items-center justify-center text-white overflow-hidden bg-[#1a1a2e]">
      
      {/* Background Image from new design with dark luxury overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={ASSETS.heroBg} 
          alt={`${BRAND_NAME} - مقاول دهانات وديكورات الرياض`}
          className="w-full h-full object-cover object-center transform scale-105 animate-in fade-in duration-700"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e] via-[#1a1a2e]/85 to-[#16213e]/75" />
        <div className="absolute inset-0 bg-radial at-center from-transparent via-[#1a1a2e]/50 to-[#1a1a2e]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        
        {/* Brand Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C9A227]/20 border border-[#C9A227]/40 text-[#E8D48B] text-xs sm:text-sm font-bold mb-6 backdrop-blur-md shadow-lg"
        >
          <Sparkles className="w-4 h-4 text-[#C9A227]" />
          <span>{BRAND_NAME} ({BRAND_SHORT}) • الرياض</span>
        </motion.div>

        {/* Main H1 Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl font-black text-[#C9A227] tracking-tight leading-[1.25] mb-5 text-balance"
        >
          مقاول دهانات وديكورات الرياض
          <span className="block mt-2 text-2xl sm:text-4xl text-white font-black">
            إتش بي فاست <span className="text-[#FF8A00] font-mono tracking-normal">HB FAST</span>
          </span>
        </motion.h1>

        {/* Hero Desc */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-xl text-slate-200 font-medium max-w-3xl mx-auto leading-relaxed mb-8"
        >
          نحول منزلك إلى تحفة معمارية بأساليب عصرية وجودة استثنائية وسرعة إنجاز فائقة بضمان 5 سنوات
        </motion.p>

        {/* Guarantee and Feature Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-10 text-xs sm:text-sm text-slate-200"
        >
          <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-white/15 px-3.5 py-1.5 rounded-xl">
            <ShieldCheck className="w-4 h-4 text-[#C9A227]" />
            <span>ضمان رسمي معتمد 5 سنوات</span>
          </span>
          <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-white/15 px-3.5 py-1.5 rounded-xl">
            <Clock className="w-4 h-4 text-[#C9A227]" />
            <span>سرعة إنجاز قياسية (FAST)</span>
          </span>
          <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-white/15 px-3.5 py-1.5 rounded-xl">
            <CheckCircle2 className="w-4 h-4 text-[#C9A227]" />
            <span>خامات أوسكار والجزيرة الأصلية 100%</span>
          </span>
        </motion.div>

        {/* Hero Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto mb-8"
        >
          {/* WhatsApp Primary */}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('السلام عليكم إتش بي فاست، أرغب في استشارة ومعاينة مجانية لدهانات وتشطيبات منزلي بالرياض')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto py-4 px-8 rounded-2xl bg-gradient-to-r from-[#25D366] to-[#1ebe5b] hover:brightness-110 text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-xl transition active:scale-95 cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>تواصل واتساب</span>
          </a>

          {/* Direct Phone Call */}
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="w-full sm:w-auto py-4 px-8 rounded-2xl bg-[#C9A227] hover:bg-[#A67C00] text-[#1a1a2e] font-black text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-xl transition active:scale-95 cursor-pointer"
          >
            <Phone className="w-5 h-5 fill-current" />
            <span>اتصال مباشر: 0508029328</span>
          </a>

          {/* Quotation Offer */}
          <button
            onClick={onOpenConsultation}
            className="w-full sm:w-auto py-4 px-8 rounded-2xl bg-white/15 hover:bg-white/25 text-white font-bold text-sm sm:text-base border border-white/25 flex items-center justify-center gap-2 transition active:scale-95 cursor-pointer"
          >
            <span>احصل على عرض سعر لدهان منزلك</span>
            <ArrowLeft className="w-4 h-4 rtl:rotate-0" />
          </button>
        </motion.div>

        {/* Quick Estimator Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-300 bg-black/30 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10"
        >
          <Award className="w-4 h-4 text-[#C9A227]" />
          <span>هل ترغب في تحديد مواصفات شقتك؟</span>
          <button
            onClick={onOpenEstimator}
            className="font-bold text-[#E8D48B] hover:underline cursor-pointer"
          >
            طلب تسعيرة سريعة الآن ←
          </button>
        </motion.div>

      </div>
    </section>
  );
};
