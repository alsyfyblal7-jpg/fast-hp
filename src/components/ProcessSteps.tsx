import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

export const ProcessSteps: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'طلب المعاينة',
      desc: 'تواصل معنا عبر واتساب أو الهاتف أو النموذج المباشر، وسيرد عليك مهندس التشطيبات خلال دقائق لتحديد موعد يناسبك.',
      colorClass: 'bg-[#1A1A1A]',
      borderClass: 'hover:border-[#D8C29D]',
    },
    {
      num: '02',
      title: 'المعاينة الفنية المجانية',
      desc: 'زيارة مجانية للموقع لرفع المقاسات وفحص حالة الجدران والرطوبة بدقة متناهية، وتقديم عرض سعر تفصيلي بدون أي التزام.',
      colorClass: 'bg-[#1A1A1A]',
      borderClass: 'hover:border-[#D8C29D]',
    },
    {
      num: '03',
      title: 'اختيار الألوان والكتالوجات',
      desc: 'مساعدتك في تنسيق درجات الألوان الحديثة (أوف وايت، جريج، بديل الرخام) ورؤية عينات واقعية على جدرانك قبل بدء الدهان.',
      colorClass: 'bg-[#FF8A00]',
      borderClass: 'hover:border-amber-300',
    },
    {
      num: '04',
      title: 'التنفيذ والتسليم بالضمان',
      desc: 'تنفيذ احترافي فائق السرعة مع تغليف الأثاث، وتسليم نظيف تماماً في الموعد المحدد مع تسليمك شهادة الضمان المعتمد 5 سنوات.',
      colorClass: 'bg-[#FF8A00]',
      borderClass: 'hover:border-amber-300',
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20" data-purpose="process-steps">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-bold text-[#1A1A1A] bg-[#F7F3EE] px-3.5 py-1.5 rounded-full border border-[#E8DCCB]"
        >
          آلية العمل السلسة
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl font-extrabold text-[#1A1A2E] mt-3"
        >
          4 خطوات سهلة لتجديد منزلك
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-sm sm:text-base text-slate-500 mt-2"
        >
          عملية مريحة وواضحة من أول اتصال أو استفسار حتى تسليم المفتاح مع شهادة الضمان
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className={`bg-white p-6 rounded-3xl border border-slate-100 shadow-card relative overflow-hidden transition-all duration-300 cursor-default group ${step.borderClass}`}
          >
            <span className="absolute top-4 left-4 text-3xl font-black text-slate-200 select-none font-mono group-hover:text-[#FF8A00]/20 transition-colors">
              {step.num}
            </span>
            <div className={`w-10 h-10 rounded-2xl ${step.colorClass} text-white text-sm font-black flex items-center justify-center mb-4 shadow-xs group-hover:scale-110 transition-transform`}>
              {idx + 1}
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-[#1A1A1A] transition-colors">
              {step.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              {step.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
