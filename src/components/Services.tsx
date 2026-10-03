import React from 'react';
import { ArrowLeft, CheckCircle2, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { SERVICES } from '../data';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectService: (serviceId: string, serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section className="py-16 lg:py-24 bg-[#f8f9fa] border-b border-slate-200" id="services" data-purpose="services-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header matching tarmim-decor.com */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-[#A67C00] bg-[#C9A227]/15 px-4 py-1.5 rounded-full border border-[#C9A227]/30 inline-flex items-center gap-1.5 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A227]" />
            <span>حلول شاملة ومتكاملة</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1a1a2e] mb-3">
            خدماتنا المتميزة في الرياض
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            نقدم باقة واسعة من خدمات الدهانات والديكورات والترميم الشامل بأيدي أمهر المعلمين وتحت إشراف فني متخصص
          </p>
        </div>

        {/* 12 Services Grid matching tarmim-decor.com */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service, idx) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: (idx % 3) * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Service Image from tarmim-decor.com */}
                <div className="relative h-52 sm:h-56 bg-slate-900 overflow-hidden">
                  <img
                    src={service.imageUrl}
                    alt={`${service.title} بالرياض`}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                  
                  {service.badge && (
                    <span className="absolute top-4 right-4 bg-[#C9A227] text-[#1a1a2e] text-xs font-black px-3 py-1 rounded-xl shadow-md">
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-extrabold text-[#1a1a2e] text-lg sm:text-xl mb-2.5 group-hover:text-[#A67C00] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Keywords Pills matching tarmim-decor.com */}
                  {service.keywords && (
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {service.keywords.map((kw, i) => (
                        <span
                          key={i}
                          className="text-[11px] font-bold bg-[#fdfbf7] text-[#A67C00] px-2.5 py-1 rounded-lg border border-[#E8D48B]/50"
                        >
                          {kw}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Features List */}
                  {service.features && (
                    <ul className="space-y-1.5 pt-3 border-t border-slate-100 mb-2">
                      {service.features.slice(0, 3).map((f, fi) => (
                        <li key={fi} className="flex items-center gap-2 text-xs text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A227] shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onSelectService(service.id, service.title)}
                  className="w-full py-3 px-4 rounded-xl bg-slate-100 hover:bg-[#C9A227] text-[#1a1a2e] hover:text-[#1a1a2e] font-bold text-xs flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer shadow-xs group-hover:bg-[#C9A227]"
                >
                  <span>تفاصيل وطلب المعاينة</span>
                  <ArrowLeft className="w-3.5 h-3.5 rtl:rotate-0" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};
