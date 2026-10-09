import React from 'react';
import { Star, CheckCircle, Quote } from 'lucide-react';
import { motion } from 'motion/react';
import { TESTIMONIALS } from '../data';

export const Reviews: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20" data-purpose="testimonials" id="reviews">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-bold text-[#1A1A1A] bg-[#F7F3EE] px-3.5 py-1.5 rounded-full border border-[#E8DCCB]"
        >
          تجارب العملاء
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl font-extrabold text-[#1A1A2E] mt-3"
        >
          ثقة متبادلة وتقييمات نفخر بها
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-sm sm:text-base text-slate-500 mt-2"
        >
          آراء حقيقية لعملاء وثقوا في سرعة وجودة إتش بي فاست لتشطيب وتجديد منازلهم
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((t, idx) => (
          <motion.div 
            key={t.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: idx * 0.12 }}
            whileHover={{ y: -8, scale: 1.01 }}
            className="bg-white rounded-3xl p-6 sm:p-8 shadow-card border border-slate-100 relative hover:border-[#D8C29D] hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-default"
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

              <div className="relative">
                <Quote className="w-8 h-8 text-[#F5EFE7] absolute -top-3 -right-2 pointer-events-none" />
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic bg-slate-50/90 p-4 rounded-2xl border border-slate-100 mb-4 relative z-10">
                  "{t.comment}"
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 text-xs text-[#1A1A1A] font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF8A00]" />
              <span>المشروع: {t.projectType}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
