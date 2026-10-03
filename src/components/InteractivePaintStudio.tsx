import React, { useState, useRef, useEffect, useCallback } from 'react';
import { PaintRoller, Sparkles, RotateCcw, Check, ArrowLeft, Volume2, VolumeX, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { COLOR_PALETTE } from '../data';

interface InteractivePaintStudioProps {
  onSelectColorForBooking?: (colorName: string) => void;
}

export const InteractivePaintStudio: React.FC<InteractivePaintStudioProps> = ({
  onSelectColorForBooking,
}) => {
  const [activeColor, setActiveColor] = useState(COLOR_PALETTE[0]); // Warm Off-White
  const [brushSize, setBrushSize] = useState<number>(45);
  const [paintedPercentage, setPaintedPercentage] = useState<number>(0);
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Initialize canvas
  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Base wall texture (subtle light gray with wall baseboard)
    canvas.width = canvas.parentElement?.clientWidth || 700;
    canvas.height = 360;

    // Draw base wall
    ctx.fillStyle = '#E8ECEF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Subtle wall texture dots
    ctx.fillStyle = '#DFE3E6';
    for (let i = 0; i < canvas.width; i += 20) {
      for (let j = 0; j < canvas.height; j += 20) {
        if ((i + j) % 40 === 0) {
          ctx.fillRect(i, j, 2, 2);
        }
      }
    }

    setPaintedPercentage(0);
  }, []);

  useEffect(() => {
    initCanvas();
    const handleResize = () => initCanvas();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [initCanvas]);

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.fillStyle = activeColor.hex;
    ctx.strokeStyle = activeColor.hex;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    // Roller brush effect (creates textured stroke like a real paint roller)
    ctx.beginPath();
    ctx.arc(x, y, brushSize / 2, 0, Math.PI * 2);
    ctx.fill();

    // Roller texture streaks
    ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.fillRect(x - brushSize / 3, y - brushSize / 4, brushSize / 1.5, brushSize / 2);

    // Increment painted estimate smoothly
    setPaintedPercentage((prev) => Math.min(prev + 1, 100));
  };

  const handleClear = () => {
    initCanvas();
  };

  const handleFillAll = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.fillStyle = activeColor.hex;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    setPaintedPercentage(100);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24" data-purpose="interactive-paint-studio" id="interactive-studio">
      <div className="bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#1a1a2e] rounded-3xl lg:rounded-[3rem] p-6 sm:p-10 lg:p-12 text-white shadow-2xl relative overflow-hidden border border-[#C9A227]/30">
        
        {/* Animated Background Ambience */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-32 -right-32 w-80 h-80 bg-[#C9A227]/20 rounded-full blur-3xl pointer-events-none"
        />

        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C9A227]/20 text-[#E8D48B] text-xs sm:text-sm font-bold border border-[#C9A227]/40 mb-3"
          >
            <PaintRoller className="w-4 h-4 text-[#C9A227] animate-bounce" />
            <span>تجربة حية تفاعلية: استوديو دهان الجدار</span>
          </motion.div>
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            جرّب ادهن الجدار بنفسك بدهانات أوسكار والجزيرة!
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-2">
            اختر لونك المفضل، واسحب رول الدهان بيدك أو بالماوس لتجربة تغطية الجدران وإحساس الألوان الفندقية بالرياض
          </p>
        </div>

        {/* Paint Studio Controls Bar */}
        <div className="relative z-10 bg-white/10 backdrop-blur-md rounded-2xl p-4 mb-6 border border-white/15 flex flex-wrap items-center justify-between gap-4">
          
          {/* Swatches Selector */}
          <div className="flex items-center gap-2.5 overflow-x-auto pb-1 sm:pb-0">
            <span className="text-xs font-bold text-slate-300 whitespace-nowrap hidden sm:inline">اختر اللون:</span>
            {COLOR_PALETTE.map((swatch) => (
              <button
                key={swatch.id}
                onClick={() => setActiveColor(swatch)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border transition-all cursor-pointer text-xs font-bold ${
                  activeColor.id === swatch.id
                    ? 'border-[#FF8A00] bg-white/20 text-white ring-2 ring-[#FF8A00]/50 shadow-md scale-105'
                    : 'border-white/10 text-slate-300 hover:bg-white/10'
                }`}
              >
                <span 
                  className="w-4 h-4 rounded-full border border-white/60 shadow-inner" 
                  style={{ backgroundColor: swatch.hex }}
                />
                <span>{swatch.name}</span>
              </button>
            ))}
          </div>

          {/* Roller Controls & Clear */}
          <div className="flex items-center gap-2">
            {/* Roller Size Toggle */}
            <div className="hidden sm:flex items-center gap-1.5 bg-black/30 px-3 py-1.5 rounded-xl text-xs">
              <span className="text-slate-400">حجم الرول:</span>
              <button 
                onClick={() => setBrushSize(30)}
                className={`px-2 py-0.5 rounded text-[10px] font-bold ${brushSize === 30 ? 'bg-[#FF8A00] text-white' : 'text-slate-300 hover:text-white'}`}
              >
                رفيع
              </button>
              <button 
                onClick={() => setBrushSize(50)}
                className={`px-2 py-0.5 rounded text-[10px] font-bold ${brushSize === 50 ? 'bg-[#FF8A00] text-white' : 'text-slate-300 hover:text-white'}`}
              >
                عريض
              </button>
            </div>

            {/* Quick Fill Button */}
            <button
              onClick={handleFillAll}
              className="px-3 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-sm transition active:scale-95 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>دهان كامل الجدار</span>
            </button>

            {/* Reset / Erase */}
            <button
              onClick={handleClear}
              className="p-2 bg-white/10 hover:bg-white/20 text-slate-200 rounded-xl text-xs font-bold transition active:scale-95 cursor-pointer"
              title="إعادة ضبط الجدار"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* The Interactive Canvas Wall */}
        <div 
          ref={containerRef}
          className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-700 bg-slate-800 touch-none select-none cursor-crosshair group"
        >
          {/* Top simulated LED Cove Lighting */}
          <div className="absolute top-0 inset-x-0 h-4 bg-gradient-to-b from-amber-300/40 via-transparent to-transparent pointer-events-none z-20" />
          
          <canvas
            ref={canvasRef}
            onMouseDown={() => setIsDrawing(true)}
            onMouseUp={() => setIsDrawing(false)}
            onMouseLeave={() => setIsDrawing(false)}
            onMouseMove={draw}
            onTouchStart={() => setIsDrawing(true)}
            onTouchEnd={() => setIsDrawing(false)}
            onTouchMove={draw}
            className="w-full h-80 sm:h-96 block"
          />

          {/* Interactive Hint Overlay (fades out as you paint) */}
          {paintedPercentage === 0 && (
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none bg-black/25 backdrop-blur-[1px] transition-opacity duration-300">
              <motion.div 
                animate={{ y: [0, -8, 0], scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-16 h-16 rounded-2xl bg-[#FF8A00] text-white flex items-center justify-center shadow-2xl mb-3"
              >
                <PaintRoller className="w-8 h-8" />
              </motion.div>
              <span className="text-sm sm:text-base font-black text-white bg-slate-900/80 px-4 py-2 rounded-xl border border-white/20 shadow-lg">
                اضغط واسحب الفأرة أو إصبعك لطلاء الجدار الآن 🎨
              </span>
            </div>
          )}

          {/* Bottom Bar: Live Paint Meter & Order This Color */}
          <div className="absolute bottom-3 inset-x-3 sm:inset-x-4 bg-slate-950/85 backdrop-blur-md p-3 rounded-2xl border border-white/20 flex flex-wrap items-center justify-between gap-3 text-xs z-20">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="text-slate-400">اللون المختار:</span>
                <span className="font-bold text-amber-300">{activeColor.name}</span>
                <span className="text-[10px] text-slate-400 font-mono">({activeColor.hex})</span>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 text-slate-300">
                <span>نسبة التغطية:</span>
                <span className="font-bold text-emerald-400 tabular-nums">{paintedPercentage}%</span>
              </div>
            </div>

            <a
              href="#consultation-form"
              onClick={() => onSelectColorForBooking && onSelectColorForBooking(activeColor.name)}
              className="py-2 px-4 rounded-xl bg-[#FF8A00] hover:bg-[#E57900] text-white font-bold text-xs flex items-center gap-1.5 shadow-sm transition active:scale-95"
            >
              <span>طلب دهان هذا اللون لمنزلي</span>
              <ArrowLeft className="w-3.5 h-3.5 rtl:rotate-0" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
