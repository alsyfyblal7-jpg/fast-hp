import React from 'react';
import { Phone, MessageCircle, ArrowLeft } from 'lucide-react';
import { ASSETS, PHONE_NUMBER, WHATSAPP_NUMBER } from '../data';

interface HeaderProps {
  onOpenConsultation: () => void;
  onOpenEstimator: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenConsultation,
  onOpenEstimator,
}) => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Zone 1: Brand Wordmark / Logo */}
        <div className="flex items-center gap-3">
          <a 
            href="#" 
            aria-label="الرئيسية إتش بي فاست للدهانات والديكورات" 
            className="flex items-center gap-3 tap-highlight-transparent group"
          >
            <div className="h-12 w-36 overflow-hidden flex items-center justify-start">
              <img 
                alt="شعار إتش بي فاست للدهانات والديكورات" 
                className="h-full w-auto object-contain object-right group-hover:scale-102 transition-transform duration-200" 
                loading="eager" 
                src={ASSETS.headerLogo} 
              />
            </div>
          </a>
        </div>

        {/* Zone 2: Desktop Navigation Links (Clean single line typography) */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-700">
          <a href="#" className="text-[#0052B4] hover:text-[#003682] hover:-translate-y-0.5 active:translate-y-0 transition-transform">
            الرئيسية
          </a>
          <a href="#services" className="hover:text-[#0052B4] hover:-translate-y-0.5 active:translate-y-0 transition-transform">
            خدماتنا
          </a>
          <a href="#palette" className="hover:text-[#0052B4] hover:-translate-y-0.5 active:translate-y-0 transition-transform">
            ألوان 2025
          </a>
          <a href="#portfolio" className="hover:text-[#0052B4] hover:-translate-y-0.5 active:translate-y-0 transition-transform">
            معرض الأعمال
          </a>
          <a href="#why-us" className="hover:text-[#0052B4] hover:-translate-y-0.5 active:translate-y-0 transition-transform">
            لماذا نحن
          </a>
          <button 
            type="button" 
            onClick={onOpenEstimator}
            className="hover:text-[#0052B4] hover:-translate-y-0.5 active:translate-y-0 transition-transform cursor-pointer"
          >
            حاسبة التكلفة
          </button>
          <a href="#reviews" className="hover:text-[#0052B4] hover:-translate-y-0.5 active:translate-y-0 transition-transform">
            آراء العملاء
          </a>
          <a href="#faq" className="hover:text-[#0052B4] hover:-translate-y-0.5 active:translate-y-0 transition-transform">
            الأسئلة الشائعة
          </a>
        </nav>

        {/* Zone 3: Primary Actions (Phone, WhatsApp, Book Inspection) */}
        <div className="flex items-center gap-3">
          {/* Quick Call */}
          <a 
            href={`tel:${PHONE_NUMBER}`}
            aria-label="اتصل بنا مباشرة" 
            className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-blue-50 text-[#0052B4] text-xs font-bold transition active:scale-95 shadow-xs"
            title="اتصال هاتفي مباشر"
          >
            <Phone className="w-3.5 h-3.5 fill-current" />
            <span dir="ltr" className="font-mono">0508029328</span>
          </a>

          {/* WhatsApp Chat */}
          <a 
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('مرحبا، أرغب في طلب معاينة مجانية للدهانات والديكورات مع إتش بي فاست')}`}
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-2 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-xl text-xs font-bold shadow-xs active:scale-95 transition"
            title="محادثة واتساب فورية"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span className="hidden sm:inline">محادثة واتساب</span>
            <span className="sm:hidden">واتساب</span>
          </a>

          {/* Main Desktop CTA Button */}
          <button
            onClick={onOpenConsultation}
            className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0052B4] hover:bg-[#003682] text-white text-xs font-bold transition active:scale-95 shadow-xs cursor-pointer"
          >
            <span>طلب معاينة مجانية</span>
            <ArrowLeft className="w-3.5 h-3.5 rtl:rotate-0" />
          </button>
        </div>

      </div>
    </header>
  );
};
