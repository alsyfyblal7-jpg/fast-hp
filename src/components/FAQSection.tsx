import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQS } from '../data';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(prev => (prev === idx ? null : idx));
  };

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20" data-purpose="faq-section" id="faq">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-bold text-[#0052B4] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100 inline-flex items-center gap-1.5"
        >
          <HelpCircle className="w-3.5 h-3.5 text-[#0052B4]" />
          <span>الأسئلة الشائعة</span>
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl font-extrabold text-[#003682] mt-3"
        >
          إجابات عن استفساراتك
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-sm sm:text-base text-slate-500 mt-2"
        >
          كل ما ترغب بمعرفته قبل البدء بتجديد دهانات وديكورات منزلك أو مشروعك
        </motion.p>
      </div>

      <div className="space-y-4">
        {FAQS.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className={`bg-white rounded-2xl sm:rounded-3xl border shadow-xs overflow-hidden transition-colors duration-200 ${
                isOpen ? 'border-[#0052B4]/40 shadow-md' : 'border-slate-100 hover:border-slate-200'
              }`}
            >
              <button
                type="button"
                onClick={() => toggle(index)}
                className="w-full p-5 sm:p-6 text-right flex items-center justify-between gap-4 select-none hover:bg-slate-50 transition cursor-pointer"
              >
                <span className={`text-sm sm:text-base font-bold leading-snug transition-colors ${
                  isOpen ? 'text-[#0052B4]' : 'text-slate-900'
                }`}>
                  {faq.q}
                </span>
                <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                  isOpen ? 'rotate-180 text-[#0052B4]' : ''
                }`} />
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
