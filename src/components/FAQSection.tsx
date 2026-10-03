import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '../data';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(prev => (prev === idx ? null : idx));
  };

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20" data-purpose="faq-section" id="faq">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs font-bold text-[#0052B4] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
          الأسئلة الشائعة
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#003682] mt-3">
          إجابات عن استفساراتك
        </h2>
        <p className="text-sm sm:text-base text-slate-500 mt-2">
          كل ما ترغب بمعرفته قبل البدء بتجديد دهانات وديكورات منزلك أو مشروعك
        </p>
      </div>

      <div className="space-y-4">
        {FAQS.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index}
              className="bg-white rounded-2xl sm:rounded-3xl border border-slate-100 shadow-xs overflow-hidden transition-all duration-200"
            >
              <button
                type="button"
                onClick={() => toggle(index)}
                className="w-full p-5 sm:p-6 text-right flex items-center justify-between gap-4 select-none hover:bg-slate-50 transition cursor-pointer"
              >
                <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                  {faq.q}
                </span>
                <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#0052B4]' : ''}`} />
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/40 animate-in fade-in duration-150">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
