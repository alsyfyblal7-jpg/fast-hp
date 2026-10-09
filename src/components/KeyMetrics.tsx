import React from 'react';
import { Check, Clock, Smile, Shield } from 'lucide-react';
import { motion } from 'motion/react';

export const KeyMetrics: React.FC = () => {
  const metrics = [
    {
      icon: <Check className="w-6 h-6 stroke-[2.5]" />,
      value: '+1500',
      label: 'مشروع منجز بالمملكة',
      bgClass: 'bg-[#F5EFE7] text-[#1A1A1A]',
      hoverGlow: 'hover:border-[#D8C29D]',
    },
    {
      icon: <Clock className="w-6 h-6 stroke-[2.5]" />,
      value: '+10',
      label: 'سنوات خبرة واحتراف',
      bgClass: 'bg-amber-50 text-[#FF8A00]',
      hoverGlow: 'hover:border-amber-300',
    },
    {
      icon: <Smile className="w-6 h-6 stroke-[2.5]" />,
      value: '99%',
      label: 'نسبة رضا العملاء',
      bgClass: 'bg-emerald-50 text-emerald-600',
      hoverGlow: 'hover:border-emerald-300',
    },
    {
      icon: <Shield className="w-6 h-6 stroke-[2.5]" />,
      value: '100%',
      label: 'خامات أوسكار معتمدة وضمان',
      bgClass: 'bg-orange-50 text-[#FF8A00]',
      hoverGlow: 'hover:border-orange-300',
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 lg:-mt-14 relative z-20" data-purpose="key-metrics">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {metrics.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
            whileHover={{ y: -6, scale: 1.02 }}
            className={`bg-white p-5 lg:p-6 rounded-2xl sm:rounded-3xl shadow-card border border-slate-100 flex items-center gap-4 transition-all duration-300 cursor-default ${item.hoverGlow}`}
          >
            <div className={`w-12 h-12 lg:w-14 lg:h-14 rounded-2xl ${item.bgClass} flex items-center justify-center shrink-0 shadow-inner`}>
              {item.icon}
            </div>
            <div>
              <div className="text-2xl lg:text-3xl font-black text-[#1A1A2E] tabular-nums tracking-tight">
                {item.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-500 font-semibold mt-0.5">
                {item.label}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
