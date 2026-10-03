import React from 'react';
import { Zap, ShieldCheck, Sparkles, FileText } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20" data-purpose="why-choose-us" id="why-us">
      <div className="bg-white rounded-3xl lg:rounded-[3rem] p-8 sm:p-12 shadow-card border border-slate-100">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#FF8A00] bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-100">
            لماذا تثق بنا؟
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#003682] mt-3">
            لماذا تختار إتش بي فاست (HB FAST)؟
          </h2>
          <p className="text-sm sm:text-base text-slate-500 mt-2">
            نجمع لك بين الجودة الهندسية العالية وسرعة الإنجاز وضمان راحة بالك التامة
          </p>
        </div>

        {/* 4 Feature Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Feature 1 */}
          <div className="p-6 rounded-2xl bg-orange-50/50 border border-orange-100/60 hover:border-orange-200 transition">
            <div className="w-12 h-12 rounded-xl bg-orange-100 text-[#FF8A00] flex items-center justify-center mb-4">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">سرعة قياسية في التنفيذ (FAST)</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              طواقم عمل متكاملة ومحترفة تنجز الشقق والفلل في وقت زمني قياسي (تسليم الشقق في 48 ساعة) مع الحفاظ التام على أعلى معايير الجودة.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-6 rounded-2xl bg-blue-50/50 border border-blue-100/60 hover:border-blue-200 transition">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#0052B4] flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">خامات أصلية 100% وصديقة للبيئة</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              نعتمد أفضل كبرى الشركات العالمية والمحلية (جوتن، الجزيرة) بدهانات مائية بدون روائح نفاذة، آمنة تماماً للأطفال والحوامل.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-6 rounded-2xl bg-emerald-50/50 border border-emerald-100/60 hover:border-emerald-200 transition">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">حماية الأثاث ونظافة تامة للموقع</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              تغليف كامل واحترافي للأثاث والأرضيات والمفاتيح الكهربائية بأغشية بلاستيكية، مع تنظيف شامل وتسليم المكان جاهزاً للسكن الفوري.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="p-6 rounded-2xl bg-purple-50/50 border border-purple-100/60 hover:border-purple-200 transition">
            <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-4">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">تسعير شفاف وعقد وضمان معتمد</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              مقايسة هندسية وتكلفة واضحة بدون أي بنود خفية، مع عقد رسمي وشهادة ضمان خطي تصل إلى 5 سنوات على جودة الدهان والتثبيت.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
