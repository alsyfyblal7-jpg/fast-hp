import React from 'react';

export const ProcessSteps: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20" data-purpose="process-steps">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs font-bold text-[#0052B4] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
          آلية العمل السلسة
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#003682] mt-3">
          4 خطوات سهلة لتجديد منزلك
        </h2>
        <p className="text-sm sm:text-base text-slate-500 mt-2">
          عملية مريحة وواضحة من أول اتصال أو استفسار حتى تسليم المفتاح مع شهادة الضمان
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        
        {/* Step 1 */}
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-card relative overflow-hidden hover:border-blue-200 transition-all duration-200 hover:-translate-y-1">
          <span className="absolute top-4 left-4 text-3xl font-black text-[#0052B4]/10 select-none font-mono">01</span>
          <div className="w-10 h-10 rounded-2xl bg-[#0052B4] text-white text-sm font-black flex items-center justify-center mb-4 shadow-xs">
            1
          </div>
          <h3 className="text-base font-bold text-slate-900 mb-2">طلب المعاينة</h3>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            تواصل معنا عبر واتساب أو الهاتف أو النموذج المباشر، وسيرد عليك مهندس التشطيبات خلال دقائق لتحديد موعد يناسبك.
          </p>
        </div>

        {/* Step 2 */}
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-card relative overflow-hidden hover:border-blue-200 transition-all duration-200 hover:-translate-y-1">
          <span className="absolute top-4 left-4 text-3xl font-black text-[#0052B4]/10 select-none font-mono">02</span>
          <div className="w-10 h-10 rounded-2xl bg-[#0052B4] text-white text-sm font-black flex items-center justify-center mb-4 shadow-xs">
            2
          </div>
          <h3 className="text-base font-bold text-slate-900 mb-2">المعاينة الفنية المجانية</h3>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            زيارة مجانية للموقع لرفع المقاسات وفحص حالة الجدران والرطوبة بدقة متناهية، وتقديم عرض سعر تفصيلي بدون أي التزام.
          </p>
        </div>

        {/* Step 3 */}
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-card relative overflow-hidden hover:border-amber-200 transition-all duration-200 hover:-translate-y-1">
          <span className="absolute top-4 left-4 text-3xl font-black text-[#FF8A00]/15 select-none font-mono">03</span>
          <div className="w-10 h-10 rounded-2xl bg-[#FF8A00] text-white text-sm font-black flex items-center justify-center mb-4 shadow-xs">
            3
          </div>
          <h3 className="text-base font-bold text-slate-900 mb-2">اختيار الألوان والكتالوجات</h3>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            مساعدتك في تنسيق درجات الألوان الحديثة (أوف وايت، جريج، بديل الرخام) ورؤية عينات واقعية على جدرانك قبل بدء الدهان.
          </p>
        </div>

        {/* Step 4 */}
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-card relative overflow-hidden hover:border-amber-200 transition-all duration-200 hover:-translate-y-1">
          <span className="absolute top-4 left-4 text-3xl font-black text-[#FF8A00]/15 select-none font-mono">04</span>
          <div className="w-10 h-10 rounded-2xl bg-[#FF8A00] text-white text-sm font-black flex items-center justify-center mb-4 shadow-xs">
            4
          </div>
          <h3 className="text-base font-bold text-slate-900 mb-2">التنفيذ والتسليم بالضمان</h3>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            تنفيذ احترافي فائق السرعة مع تغليف الأثاث، وتسليم نظيف تماماً في الموعد المحدد مع تسليمك شهادة الضمان المعتمد 5 سنوات.
          </p>
        </div>

      </div>
    </section>
  );
};
