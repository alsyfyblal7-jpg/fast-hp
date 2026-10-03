import React from 'react';
import { Star, CheckCircle } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export const Reviews: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20" data-purpose="testimonials" id="reviews">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs font-bold text-[#0052B4] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
          تجارب العملاء
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#003682] mt-3">
          ثقة متبادلة وتقييمات نفخر بها
        </h2>
        <p className="text-sm sm:text-base text-slate-500 mt-2">
          آراء حقيقية لعملاء وثقوا في سرعة وجودة إتش بي فاست لتشطيب وتجديد منازلهم
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((t) => (
          <div 
            key={t.id}
            className="bg-white rounded-3xl p-6 sm:p-8 shadow-card border border-slate-100 relative hover:border-blue-200 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-bold text-slate-900 text-base">{t.name}</h4>
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                  </div>
                  <span className="text-xs text-slate-500">{t.city} • {t.role}</span>
                </div>
                
                <div className="flex items-center gap-0.5 text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic bg-slate-50/80 p-4 rounded-2xl border border-slate-100 mb-4">
                "{t.comment}"
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 text-xs text-[#0052B4] font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF8A00]" />
              <span>المشروع: {t.projectType}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
