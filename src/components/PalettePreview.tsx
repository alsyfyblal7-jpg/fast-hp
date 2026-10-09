import React, { useState } from 'react';
import { Eye, Sparkles, Sun, Moon, Flame, PaintRoller, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { COLOR_PALETTE } from '../data';
import { ColorSwatch } from '../types';

type LightingMode = 'daylight' | 'warm' | 'led';
type FinishMode = 'matt' | 'silk' | 'pearl';

export const PalettePreview: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<ColorSwatch>(COLOR_PALETTE[2]); // Greige default
  const [lighting, setLighting] = useState<LightingMode>('warm');
  const [finish, setFinish] = useState<FinishMode>('silk');
  const [rollerAnimationKey, setRollerAnimationKey] = useState<number>(0);

  const handleSelectColor = (swatch: ColorSwatch) => {
    setSelectedColor(swatch);
    setRollerAnimationKey((prev) => prev + 1);
  };

  const getLightingFilter = () => {
    switch (lighting) {
      case 'daylight':
        return 'brightness(1.08) contrast(1.02)';
      case 'warm':
        return 'sepia(0.15) brightness(1.02) contrast(1.05)';
      case 'led':
        return 'brightness(0.88) contrast(1.15) saturate(1.2)';
    }
  };

  const getFinishTextureStyle = () => {
    switch (finish) {
      case 'matt':
        return 'opacity-90';
      case 'silk':
        return 'backdrop-blur-xs shadow-inner';
      case 'pearl':
        return 'bg-gradient-to-tr from-white/10 via-transparent to-white/20';
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16" data-purpose="palette-preview" id="palette">
      <div className="bg-[#1A1A1A] rounded-3xl lg:rounded-[3rem] p-6 sm:p-10 lg:p-12 text-white relative overflow-hidden shadow-2xl">
        
        {/* Animated glowing orbs */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#FF8A00] rounded-full blur-3xl pointer-events-none" 
        />
        <motion.div 
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-20 -left-20 w-96 h-96 bg-[#D8C29D] rounded-full blur-3xl pointer-events-none" 
        />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Right Column: Palette Details & Interactive Swatches (7 cols) */}
          <div className="lg:col-span-7">
            <div className="mb-6">
              <span className="text-xs font-bold text-[#FF8A00] bg-[#FF8A00]/20 px-3.5 py-1 rounded-full border border-[#FF8A00]/30 inline-flex items-center gap-1.5 mb-2">
                <PaintRoller className="w-3.5 h-3.5" />
                <span>استوديو تفاعلي: باليتة أوسكار 2025</span>
              </span>
              <h3 className="font-black text-2xl sm:text-3xl text-white">
                اختر لونك وشاهد انعكاس الإضاءة فوراً
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                انقر على أي درجة لاختبار مظهر الجدار وتأثير الإنارة وملمس دهانات أوسكار الفاخرة
              </p>
            </div>

            {/* 4 Interactive Color Swatches */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              {COLOR_PALETTE.map((swatch) => {
                const isSelected = selectedColor.id === swatch.id;
                return (
                  <motion.button
                    key={swatch.id}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.96 }}
                    type="button"
                    onClick={() => handleSelectColor(swatch)}
                    className={`bg-white/10 rounded-2xl p-3 text-center backdrop-blur-md border transition-all duration-200 cursor-pointer relative overflow-hidden ${
                      isSelected 
                        ? 'border-[#FF8A00] bg-white/25 ring-2 ring-[#FF8A00]/60 shadow-xl' 
                        : 'border-white/10 hover:bg-white/15'
                    }`}
                  >
                    {isSelected && (
                      <span className="absolute top-2 right-2 w-5 h-5 rounded-full bg-[#FF8A00] text-white flex items-center justify-center text-[10px] font-bold shadow-md z-10">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </span>
                    )}
                    <div 
                      className="w-full h-14 rounded-xl border border-white/40 shadow-inner mb-2 transition-transform"
                      style={{ backgroundColor: swatch.hex }}
                    />
                    <span className="text-xs sm:text-sm font-bold block text-slate-100">
                      {swatch.name}
                    </span>
                    <span className="text-[10px] text-slate-300 block font-mono">
                      {swatch.nameEn}
                    </span>
                    <span className="text-[9px] text-amber-300/90 block font-mono mt-0.5">
                      {swatch.hex}
                    </span>
                  </motion.button>
                );
              })}
            </div>

            {/* Interactive Finish & Texture Selector */}
            <div className="mb-6 p-3.5 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-xs">
              <div className="text-xs font-bold text-slate-200 mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#FF8A00]" />
                <span>اختر نوع اللمعة (دهانات أوسكار الأصلية):</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'matt', label: 'مطفي مخملي', sub: 'بدون انعكاس' },
                  { id: 'silk', label: 'حريري ناعم', sub: 'ربع لمعة فندقية' },
                  { id: 'pearl', label: 'ديكوري لؤلؤي', sub: 'بريق جذاب' },
                ].map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setFinish(f.id as FinishMode)}
                    className={`py-2 px-2.5 rounded-xl text-center text-xs font-semibold transition cursor-pointer border ${
                      finish === f.id
                        ? 'bg-[#FF8A00] text-white border-[#FF8A00] shadow-md'
                        : 'bg-white/10 text-slate-300 border-white/10 hover:bg-white/15'
                    }`}
                  >
                    <div>{f.label}</div>
                    <div className="text-[9px] opacity-80">{f.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Selected Color Advice Box */}
            <div className="p-4 sm:p-5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/15 text-xs sm:text-sm">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span 
                    className="w-4 h-4 rounded-full border border-white inline-block shadow-xs"
                    style={{ backgroundColor: selectedColor.hex }}
                  />
                  <span className="font-bold text-amber-300 text-sm sm:text-base">
                    {selectedColor.name} ({selectedColor.nameEn})
                  </span>
                </div>
                <span className="text-[11px] font-mono text-slate-300 bg-white/10 px-2 py-0.5 rounded">
                  كود الدهان: {selectedColor.hex}
                </span>
              </div>

              <p className="text-slate-200 leading-relaxed text-xs sm:text-sm mb-3">
                {selectedColor.description}
              </p>

              <div className="text-xs text-amber-200 font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#FF8A00] shrink-0" />
                <span>أفضل الأماكن للتطبيق: {selectedColor.recommendedFor}</span>
              </div>
            </div>
          </div>

          {/* Left Column: Interactive 3D Room Visualizer (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900/70 rounded-3xl p-5 border border-white/15 backdrop-blur-md shadow-2xl">
              
              {/* Controls bar */}
              <div className="flex items-center justify-between mb-3 text-xs">
                <span className="font-bold text-slate-200 flex items-center gap-1.5">
                  <Eye className="w-4 h-4 text-[#FF8A00]" />
                  <span>محاكاة الجدار في الغرفة</span>
                </span>
                
                {/* 3-way Lighting Toggle */}
                <div className="flex items-center gap-1 bg-white/10 p-1 rounded-xl">
                  <button
                    onClick={() => setLighting('daylight')}
                    className={`px-2 py-1 rounded-lg text-[10px] font-medium flex items-center gap-1 transition cursor-pointer ${
                      lighting === 'daylight' ? 'bg-amber-400 text-slate-950 font-bold' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    <Sun className="w-3 h-3" />
                    <span>نهاري</span>
                  </button>
                  <button
                    onClick={() => setLighting('warm')}
                    className={`px-2 py-1 rounded-lg text-[10px] font-medium flex items-center gap-1 transition cursor-pointer ${
                      lighting === 'warm' ? 'bg-[#FF8A00] text-white font-bold' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    <Flame className="w-3 h-3" />
                    <span>دافئ 3000K</span>
                  </button>
                  <button
                    onClick={() => setLighting('led')}
                    className={`px-2 py-1 rounded-lg text-[10px] font-medium flex items-center gap-1 transition cursor-pointer ${
                      lighting === 'led' ? 'bg-[#1A1A1A] text-white font-bold' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    <Moon className="w-3 h-3" />
                    <span>ليد مخفي</span>
                  </button>
                </div>
              </div>

              {/* 3D-styled Visual Room Preview Container with Roller Swipe */}
              <div 
                className="h-72 sm:h-80 rounded-2xl relative overflow-hidden border border-white/20 flex flex-col justify-between p-4 shadow-2xl transition-all duration-500"
                style={{ 
                  backgroundColor: selectedColor.hex,
                  filter: getLightingFilter()
                }}
              >
                {/* Animated Roller Swipe effect when color changes */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={rollerAnimationKey}
                    initial={{ x: '-100%', opacity: 0.9 }}
                    animate={{ x: '100%', opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.65, ease: 'easeInOut' }}
                    className="absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none z-30"
                  />
                </AnimatePresence>

                {/* Simulated ambient lighting effect */}
                <div className={`absolute inset-0 pointer-events-none transition-opacity duration-700 ${
                  lighting === 'warm' 
                    ? 'bg-gradient-to-b from-amber-400/25 via-transparent to-black/50' 
                    : lighting === 'led'
                    ? 'bg-gradient-to-b from-sky-400/25 via-transparent to-black/70'
                    : 'bg-gradient-to-tr from-white/35 via-transparent to-black/20'
                }`} />

                {/* Ceiling warm/LED light bar with dynamic glow */}
                <div className="relative z-10 w-full flex justify-center">
                  <motion.div 
                    animate={{
                      boxShadow: lighting === 'warm' 
                        ? '0 0 25px rgba(245, 158, 11, 0.8)' 
                        : lighting === 'led' 
                        ? '0 0 25px rgba(56, 189, 248, 0.9)'
                        : '0 0 15px rgba(255, 255, 255, 0.8)'
                    }}
                    className={`h-1.5 w-3/4 rounded-full blur-xs transition-colors duration-500 ${
                      lighting === 'warm' ? 'bg-amber-300' : lighting === 'led' ? 'bg-sky-300' : 'bg-white'
                    }`} 
                  />
                </div>

                {/* Simulated Interior Modern Wall Art with WPC Slat */}
                <div className="relative z-10 flex items-center justify-between px-4">
                  {/* Modern Canvas Artwork */}
                  <div className="w-24 h-32 rounded-xl border-2 border-white/50 bg-black/20 backdrop-blur-xs flex flex-col items-center justify-center text-[10px] text-white/80 shadow-xl p-2 text-center">
                    <span className="font-bold text-amber-300 text-xs">HB FAST</span>
                    <span className="text-[9px] text-slate-200 mt-1">تشطيب فندقي عصري</span>
                  </div>

                  {/* Simulated WPC Fluted Slat Accent Panel on the side */}
                  <div className="flex gap-1 h-36 opacity-85">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="w-2 h-full bg-[#8B5A2B] rounded-sm shadow-md border-r border-[#5c3a1b]" />
                    ))}
                  </div>
                </div>

                {/* Floor and Baseboard indicator */}
                <div className="relative z-10 bg-slate-950/85 backdrop-blur-md -mx-4 -mb-4 p-3 border-t border-white/20 flex items-center justify-between text-xs text-white">
                  <div>
                    <div className="font-bold text-xs flex items-center gap-1.5">
                      <span>{selectedColor.name}</span>
                      <span className="text-[10px] text-amber-300 font-normal">
                        ({finish === 'matt' ? 'مطفي مخملي' : finish === 'silk' ? 'حريري ناعم' : 'لؤلؤي ديكوري'})
                      </span>
                    </div>
                    <div className="text-[10px] text-slate-300">مطلي بخامات أوسكار الفاخرة ناعم</div>
                  </div>
                  <div className="text-[10px] text-amber-300 font-mono">
                    {selectedColor.hex}
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
