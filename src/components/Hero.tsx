import React from 'react';
import { Zap, ShieldCheck, Clock, CheckCircle2, ArrowLeft, Award, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { ASSETS } from '../data';

interface HeroProps {
  onOpenConsultation: () => void;
  onOpenEstimator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation, onOpenEstimator }) => {
  return (
    <section 
      className="relative bg-gradient-to-b from-[#003682] via-[#0052B4] to-[#00479E] text-white pt-10 pb-20 lg:pt-16 lg:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden rounded-b-[2.5rem] lg:rounded-b-[4rem] shadow-xl" 
      data-purpose="hero-section"
    >
      {/* Dynamic Animated Ambient Glow Elements */}
      <motion.div 
        animate={{ scale: [1, 1.25, 1], x: [0, 20, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-24 -left-24 w-96 h-96 bg-[#FF8A00]/25 rounded-full blur-3xl pointer-events-none" 
      />
      <motion.div 
        animate={{ scale: [1.2, 1, 1.2], x: [0, -30, 0], y: [0, 30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/3 -right-24 w-[30rem] h-[30rem] bg-sky-400/20 rounded-full blur-3xl pointer-events-none" 
      />
      <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-blue-300/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Right Column: Hero Pitch & CTAs (7 cols on lg) */}
          <div className="lg:col-span-7 text-right">
            {/* Fast Track Badge */}
            <motion.div 
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold text-amber-300 mb-6 shadow-xs"
            >
              <Zap className="w-4 h-4 text-[#FF8A00] animate-bounce" />
              <span>سرعة التنفيذ ودقة الإنجاز الفائقة (FAST)</span>
            </motion.div>

            {/* Main Headline with staggered word emphasis */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black leading-[1.2] tracking-tight text-white mb-5 text-balance"
            >
              إتقان في الدهانات..
              <span className="block mt-2 text-[#FF8A00]">وإبداع في الديكورات العصرية</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-200 text-base sm:text-lg leading-relaxed max-w-2xl mb-8 font-normal"
            >
              حوّل منزلك أو مشروعك إلى تحفة فنية بأيدي حرفيين مهرة، وخامات أوسكار الأصلية التي تضمن الجمال والمتانة بأعلى سرعة وأفضل سعر في الرياض والمملكة.
            </motion.p>

            {/* Trust Badges */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 mb-8 text-xs sm:text-sm text-white/95"
            >
              <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-xs border border-white/15 px-3 py-1.5 rounded-xl hover:bg-white/15 transition cursor-default">
                <ShieldCheck className="w-4 h-4 text-[#FF8A00]" />
                <span>ضمان رسمي 5 سنوات</span>
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-xs border border-white/15 px-3 py-1.5 rounded-xl hover:bg-white/15 transition cursor-default">
                <Clock className="w-4 h-4 text-[#FF8A00]" />
                <span>التزام صارم بالمواعيد</span>
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-xs border border-white/15 px-3 py-1.5 rounded-xl hover:bg-white/15 transition cursor-default">
                <CheckCircle2 className="w-4 h-4 text-[#FF8A00]" />
                <span>معاينة وتصميم 3D مجاناً 100%</span>
              </span>
            </motion.div>

            {/* Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center max-w-lg mb-6"
            >
              <a 
                href="#consultation-form"
                onClick={(e) => {
                  e.preventDefault();
                  onOpenConsultation();
                }}
                className="py-4 px-8 rounded-2xl bg-[#FF8A00] hover:bg-[#E57900] text-white font-black text-sm tracking-wide shadow-glow-orange active:scale-98 transition flex items-center justify-center gap-2 cursor-pointer text-center group"
              >
                <span>احصل على عرض سعر لدهان منزلك</span>
                <ArrowLeft className="w-4 h-4 rtl:rotate-0 group-hover:-translate-x-1 transition-transform" />
              </a>

              <a 
                href="#portfolio"
                className="py-4 px-6 rounded-2xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm border border-white/20 active:scale-98 transition flex items-center justify-center text-center hover:border-white/40"
              >
                <span>تصفح أحدث أعمالنا</span>
              </a>
            </motion.div>

            {/* Instant Estimator Shortcut Link */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-2 text-xs sm:text-sm text-blue-100"
            >
              <Sparkles className="w-4 h-4 text-amber-300 shrink-0 animate-spin" style={{ animationDuration: '6s' }} />
              <span>هل ترغب في تسعيرة سريعة؟</span>
              <button
                onClick={onOpenEstimator}
                className="font-bold text-amber-300 hover:text-white underline underline-offset-4 transition cursor-pointer"
              >
                احصل على عرض سعر لدهان منزلك الآن ←
              </button>
            </motion.div>
          </div>

          {/* Left Column: Visual Showcase with Motion Hover & Floating Badges (5 cols on lg) */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Outer decorative ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#FF8A00] to-blue-400 rounded-3xl opacity-35 blur-xl animate-pulse" />
              
              {/* Main Visual Image Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-slate-900 aspect-4/3 sm:aspect-16/10 lg:aspect-4/3 group">
                <img 
                  src={ASSETS.project1} 
                  alt="تشطيبات فاخرة مودرن إتش بي فاست"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-black/20 pointer-events-none" />

                {/* Floating pill: Project Location */}
                <div className="absolute top-4 right-4 bg-[#00255A]/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-xl border border-white/20 shadow-md">
                  مشروع فيلا مودرن • الرياض
                </div>

                {/* Floating pill: Guarantee */}
                <div className="absolute top-4 left-4 bg-emerald-600 text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-md flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" />
                  <span>تم التسليم بالضمان</span>
                </div>

                {/* Bottom Card Info Overlay */}
                <div className="absolute bottom-4 inset-x-4 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-right">
                  <div className="text-xs font-bold text-amber-300 mb-1">
                    دهانات أوسكار الأصلية + بديل رخام وإنارة ليد
                  </div>
                  <div className="text-[11px] text-slate-200 line-clamp-2">
                    تنفيذ عالي الدقة مع حماية متكاملة للأثاث وتسليم نظيف بالكامل في 4 أيام عمل فقط.
                  </div>
                </div>
              </div>

              {/* Floating Stat Chip with Gentle Motion Float */}
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="hidden sm:flex absolute -bottom-5 -left-5 bg-white text-slate-800 p-3.5 rounded-2xl shadow-float border border-slate-100 items-center gap-3 z-20"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#FF8A00] flex items-center justify-center font-bold">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-semibold">سرعة إنجاز قياسية</div>
                  <div className="text-sm font-black text-[#003682]">تسليم الشقق في 48 ساعة</div>
                </div>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
