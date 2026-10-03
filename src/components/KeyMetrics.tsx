import React from 'react';
import { Check, Clock, Smile, Shield } from 'lucide-react';

export const KeyMetrics: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 lg:-mt-14 relative z-20" data-purpose="key-metrics">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        
        {/* Metric 1 */}
        <div className="bg-white p-5 lg:p-6 rounded-2xl sm:rounded-3xl shadow-card border border-slate-100 flex items-center gap-4 hover:-translate-y-1 transition duration-200">
          <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-blue-50 text-[#0052B4] flex items-center justify-center shrink-0">
            <Check className="w-6 h-6 stroke-[2.5]" />
          </div>
          <div>
            <div className="text-2xl lg:text-3xl font-black text-[#003682] tabular-nums">+1500</div>
            <div className="text-xs sm:text-sm text-slate-500 font-semibold mt-0.5">مشروع منجز بالمملكة</div>
          </div>
        </div>

        {/* Metric 2 */}
        <div className="bg-white p-5 lg:p-6 rounded-2xl sm:rounded-3xl shadow-card border border-slate-100 flex items-center gap-4 hover:-translate-y-1 transition duration-200">
          <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-amber-50 text-[#FF8A00] flex items-center justify-center shrink-0">
            <Clock className="w-6 h-6 stroke-[2.5]" />
          </div>
          <div>
            <div className="text-2xl lg:text-3xl font-black text-[#003682] tabular-nums">+10</div>
            <div className="text-xs sm:text-sm text-slate-500 font-semibold mt-0.5">سنوات خبرة واحتراف</div>
          </div>
        </div>

        {/* Metric 3 */}
        <div className="bg-white p-5 lg:p-6 rounded-2xl sm:rounded-3xl shadow-card border border-slate-100 flex items-center gap-4 hover:-translate-y-1 transition duration-200">
          <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <Smile className="w-6 h-6 stroke-[2.5]" />
          </div>
          <div>
            <div className="text-2xl lg:text-3xl font-black text-[#003682] tabular-nums">99%</div>
            <div className="text-xs sm:text-sm text-slate-500 font-semibold mt-0.5">نسبة رضا العملاء</div>
          </div>
        </div>

        {/* Metric 4 */}
        <div className="bg-white p-5 lg:p-6 rounded-2xl sm:rounded-3xl shadow-card border border-slate-100 flex items-center gap-4 hover:-translate-y-1 transition duration-200">
          <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-orange-50 text-[#FF8A00] flex items-center justify-center shrink-0">
            <Shield className="w-6 h-6 stroke-[2.5]" />
          </div>
          <div>
            <div className="text-2xl lg:text-3xl font-black text-[#003682] tabular-nums">100%</div>
            <div className="text-xs sm:text-sm text-slate-500 font-semibold mt-0.5">خامات معتمدة وضمان</div>
          </div>
        </div>

      </div>
    </section>
  );
};
