import React, { useState } from 'react';
import { Sparkles, Palette, CheckCircle2, ArrowLeft, RefreshCw, Home, Sun, Lamp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface QuizResult {
  title: string;
  subtitle: string;
  primaryColor: { name: string; hex: string; desc: string };
  accentColor: { name: string; hex: string };
  trimMaterial: string;
  recommendation: string;
}

interface ColorMoodQuizProps {
  onApplyRecommendation: (summary: string) => void;
}

export const ColorMoodQuiz: React.FC<ColorMoodQuizProps> = ({ onApplyRecommendation }) => {
  const [step, setStep] = useState<number>(1);
  const [answers, setAnswers] = useState({
    style: '',
    room: '',
    lighting: '',
  });

  const styles = [
    { id: 'modern', title: 'مودرن معاصر', desc: 'ألوان حيادية هادئة وإضاءات ليد مخفية', icon: '✨' },
    { id: 'warm', title: 'دافئ وطبيعي', desc: 'درجات البيج والأخشاب لإحساس عائلي', icon: '🌿' },
    { id: 'luxury', title: 'فندقي فاخر', desc: 'بديل رخام وعروق ذهبية وتعتيق راقي', icon: '👑' },
    { id: 'minimal', title: 'مينيملست هادئ', desc: 'بساطة فائقة، أوف وايت ومساحات واسعة', icon: '🕊️' },
  ];

  const rooms = [
    { id: 'majlis', title: 'مجلس أو صالة رئيسية', desc: 'مكان استقبال الضيوف والتجمعات' },
    { id: 'bedroom', title: 'غرفة نوم ماستر', desc: 'أجواء استرخاء ونوم عميق مريح' },
    { id: 'villa', title: 'فيلا كاملة أو شقة سكنية', desc: 'تنسيق متكامل لكافة المساحات' },
    { id: 'office', title: 'مكتب أو ممر استقبال', desc: 'طابع عملي وأنيق ومحفز' },
  ];

  const lightings = [
    { id: 'warm_light', title: 'إنارة صفراء دافئة (3000K)', desc: 'أجواء مسائية مريحة وشاعرية' },
    { id: 'daylight', title: 'إضاءة طبيعية وافرة وشبابيك كبيرة', desc: 'دخول شمس الرياض وانعكاسات ساطعة' },
    { id: 'white_light', title: 'إضاءة بيضاء نهارية (4500K)', desc: 'وضوح عالي للمساحات وتفاصيل الأثاث' },
  ];

  const getResult = (): QuizResult => {
    if (answers.style === 'luxury') {
      return {
        title: 'باليتة الفخامة الملكية (دهانات أوسكار فندقي)',
        subtitle: 'تناغم استثنائي بين درجات الجريج المخملي وتكسيات الرخام اللامع',
        primaryColor: { name: 'جريج أوسكار مودرن', hex: '#D6CFC7', desc: 'يمنح الصالات والمجالس عمقاً فندقياً راقياً' },
        accentColor: { name: 'بديل رخام عروق ذهبية', hex: '#F0EAE1' },
        trimMaterial: 'شرائح خشب WPC وبديل رخام أبيض',
        recommendation: 'ننصح بتطبيق دهان أوسكار ربع لمعة قابل للغسيل مع إنارة مخفية 3000K وبروفايل ليد خلف بديل الرخام.',
      };
    }
    if (answers.style === 'warm') {
      return {
        title: 'باليتة الدفء الطبيعي (أوسكار كوزي)',
        subtitle: 'درجات ترابية تعزز راحة البال والاسترخاء في المنزل',
        primaryColor: { name: 'بيج كلاسيك ناعم', hex: '#EDE6DD', desc: 'يعكس الإضاءة بنعومة فائقة ويوسع المساحات' },
        accentColor: { name: 'أوف وايت مهدئ', hex: '#FAF9F6' },
        trimMaterial: 'بديل خشب جوزي طبيعي',
        recommendation: 'مثالي مع الأثاث المودرن والأقمشة الكتانية، بدون أي روائح نفاذة بفضل دهانات أوسكار الصديقة للبيئة.',
      };
    }
    return {
      title: 'باليتة المودرن النقي (أوسكار سوبر وايت)',
      subtitle: 'أناقة عصرية تعطي إيحاءً بمضاعفة مساحة الغرفة ونقاء بصري',
      primaryColor: { name: 'أوف وايت دافئ', hex: '#F7F5F0', desc: 'الدرجة الأكثر طلباً لفلل وشقق الرياض 2025' },
      accentColor: { name: 'رمادي حجري هادئ', hex: '#E2DFDA' },
      trimMaterial: 'بانوهات فوم ناعمة أو ستيل فضي',
      recommendation: 'سحب معجون ألماني ناعم وطبقتين من أوسكار مطفي مطور مقاوم للأوساخ والبقع مع ضمان 5 سنوات.',
    };
  };

  const handleSelect = (key: 'style' | 'room' | 'lighting', value: string) => {
    setAnswers(prev => ({ ...prev, [key]: value }));
    setStep(prev => prev + 1);
  };

  const handleReset = () => {
    setStep(1);
    setAnswers({ style: '', room: '', lighting: '' });
  };

  const result = getResult();

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16" data-purpose="color-mood-quiz">
      <div className="bg-white rounded-3xl lg:rounded-[2.5rem] p-6 sm:p-10 shadow-card border border-[#E8DCCB] relative overflow-hidden">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-8">
          <span className="text-xs font-bold text-[#FF8A00] bg-orange-50 px-3.5 py-1 rounded-full border border-orange-100 inline-flex items-center gap-1.5 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#FF8A00]" />
            <span>مستشار الألوان التفاعلي الذكي</span>
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1A1A2E]">
            اكتشف الباليتة المثالية لمنزلك في 3 خطوات
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            أجب عن 3 أسئلة سريعة لنحدد لك أنسب درجات دهانات أوسكار وتنسيقات الديكور لذوقك
          </p>
        </div>

        {/* Progress Dots */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {[1, 2, 3, 4].map((s) => (
            <div
              key={s}
              className={`h-2 rounded-full transition-all duration-300 ${
                step === s
                  ? 'w-8 bg-[#1A1A1A]'
                  : step > s
                  ? 'w-2 bg-emerald-500'
                  : 'w-2 bg-slate-200'
              }`}
            />
          ))}
        </div>

        {/* Step 1: Style */}
        {step === 1 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-4"
          >
            <h4 className="text-sm sm:text-base font-bold text-slate-800 text-center mb-4">
              الخطوة 1: ما هو الطابع الديكوري الأقرب إلى ذوقك؟
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {styles.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleSelect('style', item.id)}
                  className="p-4 rounded-2xl border border-slate-200 hover:border-[#1A1A1A] hover:bg-[#F7F3EE] text-right transition-all group flex items-start gap-3 cursor-pointer shadow-xs"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <div className="font-bold text-slate-900 group-hover:text-[#1A1A1A] text-sm">
                      {item.title}
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">{item.desc}</div>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Step 2: Room */}
        {step === 2 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-4"
          >
            <h4 className="text-sm sm:text-base font-bold text-slate-800 text-center mb-4">
              الخطوة 2: ما هي المساحة أو الغرفة التي ترغب بتشطيبها؟
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {rooms.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleSelect('room', item.id)}
                  className="p-4 rounded-2xl border border-slate-200 hover:border-[#1A1A1A] hover:bg-[#F7F3EE] text-right transition-all group cursor-pointer shadow-xs"
                >
                  <div className="font-bold text-slate-900 group-hover:text-[#1A1A1A] text-sm">
                    {item.title}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">{item.desc}</div>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Step 3: Lighting */}
        {step === 3 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-4"
          >
            <h4 className="text-sm sm:text-base font-bold text-slate-800 text-center mb-4">
              الخطوة 3: ما نوع الإضاءة السائد في المكان؟
            </h4>
            <div className="grid grid-cols-1 gap-3">
              {lightings.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleSelect('lighting', item.id)}
                  className="p-4 rounded-2xl border border-slate-200 hover:border-[#FF8A00] hover:bg-orange-50/40 text-right transition-all group cursor-pointer shadow-xs flex items-center justify-between"
                >
                  <div>
                    <div className="font-bold text-slate-900 group-hover:text-[#FF8A00] text-sm">
                      {item.title}
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">{item.desc}</div>
                  </div>
                  <ArrowLeft className="w-4 h-4 text-slate-400 group-hover:text-[#FF8A00] rtl:rotate-0" />
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Step 4: Result Revealed! */}
        {step === 4 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-[#F7F3EE] to-orange-50/50 p-6 rounded-3xl border border-[#E8DCCB] text-right">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-[#FF8A00] bg-white px-3 py-1 rounded-full shadow-xs">
                  النتيجة المقترحة خصيصاً لذوقك
                </span>
                <button
                  onClick={handleReset}
                  className="text-xs text-slate-500 hover:text-slate-800 flex items-center gap-1 cursor-pointer"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>إعادة الاختبار</span>
                </button>
              </div>

              <h4 className="text-xl sm:text-2xl font-black text-[#1A1A2E] mb-1">
                {result.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                {result.subtitle}
              </p>

              {/* Color chips */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-3">
                  <span 
                    className="w-10 h-10 rounded-xl border border-slate-200 shadow-inner shrink-0" 
                    style={{ backgroundColor: result.primaryColor.hex }}
                  />
                  <div>
                    <span className="text-[10px] text-slate-400 block font-semibold">اللون الأساسي</span>
                    <span className="text-xs font-bold text-slate-800">{result.primaryColor.name}</span>
                  </div>
                </div>

                <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-3">
                  <span 
                    className="w-10 h-10 rounded-xl border border-slate-200 shadow-inner shrink-0" 
                    style={{ backgroundColor: result.accentColor.hex }}
                  />
                  <div>
                    <span className="text-[10px] text-slate-400 block font-semibold">اللون الثانوي</span>
                    <span className="text-xs font-bold text-slate-800">{result.accentColor.name}</span>
                  </div>
                </div>

                <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center text-sm font-bold shrink-0">
                    🪵
                  </span>
                  <div>
                    <span className="text-[10px] text-slate-400 block font-semibold">تطعيم الديكور</span>
                    <span className="text-xs font-bold text-slate-800 line-clamp-1">{result.trimMaterial}</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 p-4 rounded-2xl border border-[#E8DCCB] text-xs sm:text-sm text-slate-700 leading-relaxed mb-6">
                💡 <span className="font-bold">نصيحة المهندس:</span> {result.recommendation}
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    const text = `نتيجة مستشار الألوان: ${result.title} (${result.primaryColor.name} + ${result.trimMaterial})`;
                    onApplyRecommendation(text);
                  }}
                  className="flex-1 py-3.5 px-6 rounded-2xl bg-[#FF8A00] hover:bg-[#E57900] text-white font-extrabold text-sm shadow-md transition active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>احصل على عرض سعر لدهان منزلك بهذا التنسيق</span>
                  <ArrowLeft className="w-4 h-4 rtl:rotate-0" />
                </button>
              </div>
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
};
