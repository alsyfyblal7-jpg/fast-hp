import React from 'react';
import { Paintbrush, Layers, LayoutGrid, ShieldAlert, CheckCircle, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';
import { SERVICES } from '../data';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectService: (serviceId: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getIcon = (type: ServiceItem['iconType']) => {
    switch (type) {
      case 'paint':
        return <Paintbrush className="w-7 h-7 stroke-[1.8]" />;
      case 'gypsum':
        return <Layers className="w-7 h-7 stroke-[1.8]" />;
      case 'panels':
        return <LayoutGrid className="w-7 h-7 stroke-[1.8]" />;
      case 'shield':
        return <ShieldAlert className="w-7 h-7 stroke-[1.8]" />;
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24" data-purpose="services" id="services">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-bold uppercase tracking-wider text-[#FF8A00] bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-100"
        >
          خدماتنا المتخصصة
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl font-extrabold text-[#003682] mt-3"
        >
          حلول شاملة للدهان والديكور الراقي
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-sm sm:text-base text-slate-500 mt-2"
        >
          نغطي كافة أعمال التشطيب والتجديد للمنازل والفلل والمشاريع التجارية بأعلى معايير الحرفية والسرعة
        </motion.p>
      </div>

      {/* Services Grid (4 Columns on Desktop with Staggered Motion) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SERVICES.map((service, idx) => {
          return (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8, scale: 1.01 }}
              className="bg-white rounded-3xl p-6 shadow-card border border-slate-100 hover:border-blue-300 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group cursor-default relative overflow-hidden"
            >
              {/* Subtle hover gradient accent on top border */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#FF8A00] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Icon & Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-14 h-14 rounded-2xl ${service.bgClass} ${service.colorClass} flex items-center justify-center transition-transform group-hover:scale-110 duration-300 shadow-xs`}>
                    {getIcon(service.iconType)}
                  </div>
                  {service.badge && (
                    <span className="text-xs font-bold text-[#FF8A00] bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-100">
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Title & Description */}
                <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-[#0052B4] transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="pt-4 border-t border-slate-100 mb-6">
                  <div className="text-xs font-bold text-slate-800 mb-2.5">ما يشمله العمل:</div>
                  <ul className="space-y-2">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-600 leading-snug">
                        <CheckCircle className="w-3.5 h-3.5 text-[#0052B4] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onSelectService(service.id)}
                className="w-full py-3 bg-blue-50 hover:bg-[#0052B4] text-[#0052B4] hover:text-white font-bold text-xs rounded-xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-xs active:scale-98"
              >
                <span>طلب معاينة لهذه الخدمة</span>
                <ArrowLeft className="w-3.5 h-3.5 rtl:rotate-0 group-hover:-translate-x-1 transition-transform" />
              </button>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
