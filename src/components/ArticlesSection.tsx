import React from 'react';
import { BookOpen, ArrowLeft, Clock, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { ARTICLES } from '../data';

export const ArticlesSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-20 bg-[#fdfbf7] border-b border-slate-200" id="articles" data-purpose="articles-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#A67C00] bg-[#C9A227]/15 px-4 py-1.5 rounded-full border border-[#C9A227]/30 inline-flex items-center gap-1.5 mb-3">
            <BookOpen className="w-3.5 h-3.5 text-[#C9A227]" />
            <span>نصائح واستشارات معمارية</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1a1a2e] mb-3">
            معلومات تهمك عن الديكور والتشطيب
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            إرشادات هندسية وتجارب عملية تساعدك على اختيار أنسب المواد لبيتك في مناخ الرياض
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ARTICLES.map((article, idx) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold text-[#A67C00] bg-[#C9A227]/15 px-3 py-1 rounded-full">
                    {article.tag}
                  </span>
                  <span className="text-[11px] text-slate-400 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#C9A227]" />
                    <span>{article.readTime}</span>
                  </span>
                </div>

                <h3 className="font-bold text-lg text-slate-900 mb-2.5 leading-snug hover:text-[#A67C00] transition-colors">
                  {article.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#A67C00]">
                <span>قراءة المزيد من الإرشادات</span>
                <ArrowLeft className="w-3.5 h-3.5 rtl:rotate-0" />
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};
