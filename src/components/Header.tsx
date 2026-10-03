import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X, ArrowLeft, Sparkles } from 'lucide-react';
import { ASSETS, BRAND_NAME, PHONE_NUMBER, WHATSAPP_NUMBER } from '../data';

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
    <header className="sticky top-0 z-50 bg-[#1a1a2e]/95 backdrop-blur-md border-b border-white/10 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Official HP FAST Logo uploaded by the user */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="h-12 w-auto max-w-[180px] sm:max-w-[210px] overflow-hidden flex items-center">
            <img 
              src={ASSETS.logo} 
              alt={BRAND_NAME}
              className="h-full w-auto object-contain group-hover:scale-103 transition-transform duration-200"
              loading="eager"
            />
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-6 text-sm font-bold text-slate-200">
          <a href="#" className="text-[#C9A227] hover:text-[#E8D48B] transition-colors">
            الرئيسية
          </a>
          <a href="#about" className="hover:text-[#C9A227] transition-colors">
            من نحن
          </a>
          <a href="#services" className="hover:text-[#C9A227] transition-colors">
            خدماتنا
          </a>
          <a href="#interactive-studio" className="hover:text-[#C9A227] transition-colors flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A227]" />
            <span>استوديو الدهان</span>
          </a>
          <a href="#projects" className="hover:text-[#C9A227] transition-colors">
            أعمالنا
          </a>
          <a href="#articles" className="hover:text-[#C9A227] transition-colors">
            معلومات تهمك
          </a>
          <a href="#faq" className="hover:text-[#C9A227] transition-colors">
            الأسئلة الشائعة
          </a>
          <button 
            type="button" 
            onClick={onOpenEstimator}
            className="hover:text-[#C9A227] transition-colors cursor-pointer text-xs bg-white/10 px-3 py-1.5 rounded-xl border border-white/15"
          >
            طلب تسعيرة سريعة
          </button>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5">
          {/* Quick Call */}
          <a 
            href={`tel:${PHONE_NUMBER}`}
            className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-[#C9A227] hover:text-[#1a1a2e] text-[#E8D48B] text-xs font-bold transition duration-200 border border-white/10 shadow-xs"
            title="اتصال هاتفي مباشر"
          >
            <Phone className="w-3.5 h-3.5 fill-current" />
            <span dir="ltr" className="font-mono">0508029328</span>
          </a>

          {/* WhatsApp */}
          <a 
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('مرحبا إتش بي فاست، أرغب في طلب معاينة مجانية لدهانات وتشطيبات منزلي بالرياض')}`}
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-2 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-xl text-xs font-bold shadow-md active:scale-95 transition"
            title="محادثة واتساب فورية"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span className="hidden md:inline">تواصل واتساب</span>
            <span className="md:hidden">واتساب</span>
          </a>

          {/* Consultation Button */}
          <button
            onClick={onOpenConsultation}
            className="hidden lg:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#A67C00] via-[#C9A227] to-[#E8D48B] text-[#1a1a2e] font-black text-xs rounded-xl shadow-md hover:brightness-110 active:scale-95 transition cursor-pointer"
          >
            <span>احصل على عرض سعر</span>
            <ArrowLeft className="w-3.5 h-3.5 rtl:rotate-0" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden w-10 h-10 rounded-xl bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#16213e] border-t border-white/10 px-4 py-6 space-y-3 animate-in slide-in-from-top-2 duration-200">
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
            className="block py-2 text-sm font-bold text-slate-200 hover:text-white"
          >
            من نحن
          </a>
          <a 
            href="#services" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold text-slate-200 hover:text-white"
          >
            خدماتنا
          </a>
          <a 
            href="#interactive-studio" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold text-slate-200 hover:text-white"
          >
            استوديو الدهان التفاعلي
          </a>
          <a 
            href="#projects" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold text-slate-200 hover:text-white"
          >
            معرض أعمالنا
          </a>
          <a 
            href="#articles" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold text-slate-200 hover:text-white"
          >
            معلومات تهمك
          </a>
          <a 
            href="#faq" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold text-slate-200 hover:text-white"
          >
            الأسئلة الشائعة
          </a>
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3 bg-[#C9A227] text-[#1a1a2e] font-black text-xs rounded-xl text-center"
            >
              احصل على عرض سعر لدهان منزلك
            </button>
            <a 
              href={`tel:${PHONE_NUMBER}`}
              className="w-full py-3 bg-white/10 text-white font-bold text-xs rounded-xl text-center"
            >
              اتصال مباشر: 0508029328
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
