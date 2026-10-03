import React from 'react';
import { ClipboardList, MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data';

interface StickyBottomBarProps {
  onOpenConsultation: () => void;
}

export const StickyBottomBar: React.FC<StickyBottomBarProps> = ({ onOpenConsultation }) => {
  return (
    <div 
      className="md:hidden fixed bottom-0 inset-x-0 bg-white/95 backdrop-blur-md border-t border-slate-200 px-4 py-2.5 z-40 shadow-2xl flex items-center gap-3 transition-transform" 
      data-purpose="mobile-fixed-bottom-bar"
    >
      <button 
        onClick={onOpenConsultation}
        className="flex-1 py-3 bg-[#0052B4] hover:bg-[#003682] text-white font-bold text-xs text-center rounded-xl transition active:scale-98 shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
      >
        <ClipboardList className="w-4 h-4" />
        <span>طلب معاينة فنية</span>
      </button>

      <a 
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('أهلاً إتش بي فاست، أرغب في استشارة سريعة ومعاينة مجانية حول الدهانات والديكورات')}`}
        target="_blank" 
        rel="noopener noreferrer"
        className="flex-1 py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs text-center rounded-xl transition active:scale-98 shadow-xs flex items-center justify-center gap-1.5"
      >
        <MessageCircle className="w-4 h-4 fill-current" />
        <span>محادثة واتساب</span>
      </a>
    </div>
  );
};
