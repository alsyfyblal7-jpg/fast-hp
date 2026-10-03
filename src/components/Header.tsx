import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X, ArrowLeft, Sparkles } from 'lucide-react';
import { ASSETS, BRAND_NAME, PHONE_NUMBER, WHATSAPP_NUMBER, TIKTOK_URL } from '../data';

interface HeaderProps {
  onOpenConsultation: () => void;
  onOpenEstimator: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenConsultation,
  onOpenEstimator,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 text-slate-800 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Official HP FAST Logo uploaded by the user */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="h-12 w-auto max-w-[190px] sm:max-w-[220px] overflow-hidden flex items-center">
            <img 
              src={ASSETS.logo} 
              alt={BRAND_NAME}
              className="h-full w-auto object-contain group-hover:scale-103 transition-transform duration-200"
              loading="eager"
            />
          </div>
        </a>

        {/* Desktop Navigation matching screenshot */}
        <nav className="hidden xl:flex items-center gap-6 text-sm font-semibold text-slate-700">
          <a href="#" className="text-[#C9A227] font-bold transition-colors">
            الرئيسية
          </a>
          <a href="#about" className="hover:text-[#C9A227] transition-colors">
            من نحن
          </a>
          <a href="#services" className="hover:text-[#C9A227] transition-colors">
            دهانات داخلية
          </a>
          <a href="#services" className="hover:text-[#C9A227] transition-colors">
            شيبورد
          </a>
          <a href="#services" className="hover:text-[#C9A227] transition-colors">
            ترميمات
          </a>
          <a href="#services" className="hover:text-[#C9A227] transition-colors">
            دهانات خارجية
          </a>
          <a href="#services" className="hover:text-[#C9A227] transition-colors">
            باركيه
          </a>
          <a href="#interactive-studio" className="hover:text-[#C9A227] transition-colors flex items-center gap-1 text-[#0052B4]">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A227]" />
            <span>استوديو الدهان</span>
          </a>
          <a href="#consultation-form" className="hover:text-[#C9A227] transition-colors">
            تواصل معنا
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          {/* TikTok Header Icon */}
          <a
            href={TIKTOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl bg-black hover:bg-slate-800 text-white flex items-center justify-center transition hover:scale-105 active:scale-95 shadow-xs"
            title="تابعنا على تيك توك: @oscar_paints05"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49 6.27 6.27 0 0 0 1.96-4.49V8.89a8.28 8.28 0 0 0 5.21 1.83V7.27a4.84 4.84 0 0 1-1.4-.58z"/>
            </svg>
          </a>

          {/* Quick Call */}
          <a 
            href={`tel:${PHONE_NUMBER}`}
            className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-[#C9A227] hover:text-white text-slate-800 text-xs font-bold transition duration-200 border border-slate-200 shadow-2xs"
            title="اتصال هاتفي مباشر"
          >
            <Phone className="w-3.5 h-3.5 fill-current text-[#C9A227]" />
            <span dir="ltr" className="font-mono">0508029328</span>
          </a>

          {/* WhatsApp */}
          <a 
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('مرحبا إتش بي فاست، أرغب في طلب معاينة مجانية لدهانات وتشطيبات منزلي بالرياض')}`}
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-2 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-xl text-xs font-bold shadow-xs active:scale-95 transition"
            title="محادثة واتساب فورية"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span className="hidden md:inline">واتساب</span>
          </a>

          {/* Consultation Button */}
          <button
            onClick={onOpenConsultation}
            className="hidden lg:flex items-center gap-1.5 px-3.5 py-2 bg-[#C9A227] hover:bg-[#A67C00] text-white font-bold text-xs rounded-xl shadow-xs transition active:scale-95 cursor-pointer"
          >
            <span>طلب عرض سعر</span>
            <ArrowLeft className="w-3.5 h-3.5 rtl:rotate-0" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center hover:bg-slate-200 transition cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-t border-slate-200 px-4 py-5 space-y-2.5 animate-in slide-in-from-top-2 duration-200 shadow-xl">
          <a 
            href="#" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold text-[#C9A227]"
          >
            الرئيسية
          </a>
          <a 
            href="#about" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-slate-800 hover:text-[#C9A227]"
          >
            من نحن
          </a>
          <a 
            href="#services" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-slate-800 hover:text-[#C9A227]"
          >
            دهانات داخلية وخارجية
          </a>
          <a 
            href="#services" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-slate-800 hover:text-[#C9A227]"
          >
            شيبورد وبديل رخام وخشب
          </a>
          <a 
            href="#services" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-slate-800 hover:text-[#C9A227]"
          >
            ترميمات وتشطيب كامل
          </a>
          <a 
            href="#interactive-studio" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold text-[#0052B4]"
          >
            استوديو الدهان التفاعلي بالرول
          </a>
          <a 
            href={TIKTOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 py-2 text-sm font-bold text-black"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49 6.27 6.27 0 0 0 1.96-4.49V8.89a8.28 8.28 0 0 0 5.21 1.83V7.27a4.84 4.84 0 0 1-1.4-.58z"/>
            </svg>
            <span>حسابنا على تيك توك: @oscar_paints05</span>
          </a>
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3 bg-[#C9A227] text-white font-bold text-xs rounded-xl text-center"
            >
              احصل على عرض سعر لدهان منزلك
            </button>
            <a 
              href={`tel:${PHONE_NUMBER}`}
              className="w-full py-2.5 bg-slate-100 text-slate-800 font-bold text-xs rounded-xl text-center flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#C9A227]" />
              <span>اتصال مباشر: 0508029328</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
