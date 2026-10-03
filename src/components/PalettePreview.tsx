import React, { useState } from 'react';
import { Eye, Sparkles, Sun, Moon } from 'lucide-react';
import { COLOR_PALETTE } from '../data';
import { ColorSwatch } from '../types';

export const PalettePreview: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<ColorSwatch>(COLOR_PALETTE[2]); // Greige default
  const [isNightMode, setIsNightMode] = useState<boolean>(false);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12" data-purpose="palette-preview" id="palette">
      <div className="bg-[#00255A] rounded-3xl lg:rounded-[3rem] p-6 sm:p-10 lg:p-12 text-white relative overflow-hidden shadow-2xl">
        
        {/* Decorative background accents */}
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#FF8A00]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Right Column: Palette Details & Swatches (7 cols) */}
          <div className="lg:col-span-7">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-xs font-bold text-[#FF8A00] bg-[#FF8A00]/20 px-3 py-1 rounded-full border border-[#FF8A00]/30 inline-block mb-2">
                  تريند الموسم في السعودية
                </span>
                <h3 className="font-black text-2xl sm:text-3xl text-white">
                  باليتة الألوان العصرية 2025
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  درجات منتقاة بعناية تمنح مساحتك اتساعاً مريحاً وفخامة فندقية راقية
                </p>
              </div>
            </div>

            {/* Color Swatches Grid (4 Swatches) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              {COLOR_PALETTE.map((swatch) => {
                const isSelected = selectedColor.id === swatch.id;
                return (
                  <button
                    key={swatch.id}
                    type="button"
                    onClick={() => setSelectedColor(swatch)}
                    className={`bg-white/10 rounded-2xl p-3 text-center backdrop-blur-md border transition-all duration-200 cursor-pointer ${
                      isSelected 
                        ? 'border-[#FF8A00] bg-white/25 scale-102 ring-2 ring-[#FF8A00]/50 shadow-lg' 
                        : 'border-white/10 hover:bg-white/15'
                    }`}
                  >
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
                    <span className="text-[9px] text-amber-300/80 block font-mono mt-0.5">
                      {swatch.hex}
                    </span>
                  </button>
                );
              })}
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

            <p className="text-xs text-slate-300 mt-4 leading-relaxed">
              * يساعدك مهندس الديكور لدينا أثناء المعاينة المجانية بالموقع على فحص انعكاس الإضاءة الطبيعية والصناعية لاختيار الدرجة المناسبة تماماً لغرفتك.
            </p>
          </div>

          {/* Left Column: Interactive Room Visualizer Simulator (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900/60 rounded-3xl p-5 border border-white/15 backdrop-blur-md">
              <div className="flex items-center justify-between mb-3 text-xs">
                <span className="font-bold text-slate-200 flex items-center gap-1.5">
                  <Eye className="w-4 h-4 text-[#FF8A00]" />
                  <span>محاكاة الجدار في الغرفة</span>
                </span>
                
                {/* Lighting Toggle */}
                <div className="flex items-center gap-1 bg-white/10 p-1 rounded-lg">
                  <button
                    onClick={() => setIsNightMode(false)}
                    className={`px-2 py-1 rounded text-[11px] font-medium flex items-center gap-1 transition ${
                      !isNightMode ? 'bg-amber-400 text-slate-950 font-bold' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    <Sun className="w-3 h-3" />
                    <span>نهاري</span>
                  </button>
                  <button
                    onClick={() => setIsNightMode(true)}
                    className={`px-2 py-1 rounded text-[11px] font-medium flex items-center gap-1 transition ${
                      isNightMode ? 'bg-[#0052B4] text-white font-bold' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    <Moon className="w-3 h-3" />
                    <span>إنارة LED</span>
                  </button>
                </div>
              </div>

              {/* 3D-styled Visual Room Preview Container */}
              <div 
                className="h-64 sm:h-72 rounded-2xl relative overflow-hidden border border-white/20 transition-colors duration-700 flex flex-col justify-between p-4 shadow-2xl"
                style={{ 
                  backgroundColor: selectedColor.hex,
                  filter: isNightMode ? 'brightness(0.9) contrast(1.1)' : 'brightness(1.05)'
                }}
              >
                {/* Simulated ambient lighting effect */}
                <div className={`absolute inset-0 pointer-events-none transition-opacity duration-700 ${
                  isNightMode 
                    ? 'bg-gradient-to-b from-amber-400/20 via-transparent to-black/60' 
                    : 'bg-gradient-to-tr from-white/30 via-transparent to-black/20'
                }`} />

                {/* Ceiling warm LED light bar */}
                <div className="relative z-10 w-full flex justify-center">
                  <div className={`h-1.5 w-3/4 rounded-full blur-xs transition-colors duration-500 ${
                    isNightMode ? 'bg-amber-300 shadow-[0_0_20px_#f59e0b]' : 'bg-white shadow-[0_0_15px_#ffffff]'
                  }`} />
                </div>

                {/* Simulated Interior Furniture & Wall Art silhouette */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-24 h-32 rounded-lg border-2 border-white/40 bg-black/10 backdrop-blur-xs flex items-center justify-center text-[10px] text-white/70 shadow-md">
                    لوحة ديكورية
                  </div>
                </div>

                {/* Floor and Baseboard indicator */}
                <div className="relative z-10 bg-slate-900/80 backdrop-blur-md -mx-4 -mb-4 p-3 border-t border-white/20 flex items-center justify-between text-xs text-white">
                  <div>
                    <div className="font-bold text-xs">{selectedColor.name}</div>
                    <div className="text-[10px] text-slate-300">مطلي بخامات جوتن فينوماستيك ناعم</div>
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
