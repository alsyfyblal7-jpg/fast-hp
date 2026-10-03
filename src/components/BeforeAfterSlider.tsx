import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, SlidersHorizontal, ArrowLeftRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { ASSETS } from '../data';

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.min(Math.max((x / rect.width) * 100, 5), 95);
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20" data-purpose="before-after-transformation">
      <div className="bg-white rounded-3xl lg:rounded-[3rem] p-6 sm:p-10 lg:p-12 shadow-card border border-slate-100">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-wider text-[#FF8A00] bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-100 inline-flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#FF8A00]" />
            <span>تجربة تفاعلية حصرية</span>
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-[#003682] mt-3"
          >
            شاهد الفرق بنفسك: قبل وبعد اللمسة الفنية
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-slate-500 mt-2"
          >
            اسحب المؤشر التفاعلي يميناً ويساراً لمقارنة حالة الجدران القديمة مع التشطيب الفندقي بدهانات أوسكار وبديل الخشب
          </motion.p>
        </div>

        {/* Interactive Comparison Container */}
        <div 
          ref={containerRef}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          className="relative h-80 sm:h-[420px] lg:h-[480px] rounded-3xl overflow-hidden select-none cursor-ew-resize border-2 border-slate-200 shadow-2xl group"
        >
          {/* After Image (Background: Full width) */}
          <div className="absolute inset-0 w-full h-full">
            <img 
              src={ASSETS.projNarjis} 
              alt="بعد التشطيب بدهانات أوسكار"
              className="w-full h-full object-cover pointer-events-none"
            />
            {/* After Tag */}
            <div className="absolute top-4 left-4 bg-emerald-600/90 backdrop-blur-md text-white text-xs sm:text-sm font-bold px-3.5 py-1.5 rounded-xl shadow-lg flex items-center gap-1.5 pointer-events-none">
              <CheckCircle2 className="w-4 h-4" />
              <span>بعد: تسليم فندقي بدهانات أوسكار</span>
            </div>
          </div>

          {/* Before Image (Clipped with width percentage) */}
          <div 
            className="absolute inset-y-0 right-0 overflow-hidden pointer-events-none"
            style={{ width: `${100 - sliderPosition}%` }}
          >
            <div 
              className="absolute inset-y-0 right-0 h-full"
              style={{ width: containerRef.current ? containerRef.current.clientWidth : '100%' }}
            >
              <img 
                src={ASSETS.projMalqa} 
                alt="قبل التشطيب"
                className="w-full h-full object-cover filter grayscale contrast-125 brightness-75"
              />
              {/* Simulated rustic texture overlay to dramatize the contrast */}
              <div className="absolute inset-0 bg-stone-900/30 mix-blend-multiply" />
            </div>

            {/* Before Tag */}
            <div className="absolute top-4 right-4 bg-slate-900/90 backdrop-blur-md text-white text-xs sm:text-sm font-bold px-3.5 py-1.5 rounded-xl shadow-lg border border-white/20">
              قبل: بهتان وتشطيب تقليدي قديم
            </div>
          </div>

          {/* Draggable Vertical Divider Handle */}
          <div 
            className="absolute inset-y-0 w-1 bg-white shadow-[0_0_15px_rgba(0,0,0,0.5)] z-20 pointer-events-none flex items-center justify-center"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#FF8A00] text-white flex items-center justify-center shadow-xl border-3 border-white transition-transform group-hover:scale-110 active:scale-95">
              <ArrowLeftRight className="w-5 h-5 text-white" />
            </div>
          </div>

          {/* Quick Helper Floating hint */}
          <div className="absolute bottom-4 inset-x-0 flex justify-center pointer-events-none">
            <span className="bg-black/60 backdrop-blur-md text-white/90 text-xs px-4 py-1.5 rounded-full border border-white/20 flex items-center gap-1.5 shadow-md">
              <SlidersHorizontal className="w-3.5 h-3.5 text-amber-300" />
              <span>اسحب المؤشر لمشاهدة الفرق المذهل</span>
            </span>
          </div>
        </div>

        {/* Feature Highlights beneath the slider */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 pt-6 border-t border-slate-100 text-xs sm:text-sm text-slate-600 text-center">
          <div className="flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FF8A00]" />
            <span>معالجة التشققات والشروخ بالمعجون الألماني المطاطي</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0052B4]" />
            <span>دهانات أوسكار أصلية 100% قابلة للغسيل ومقاومة للبقع</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>تسليم نظيف تماماً مع تغليف الأثاث وضمان 5 سنوات</span>
          </div>
        </div>

      </div>
    </section>
  );
};
