import React from 'react';
import { Phone, MessageCircle, ClipboardList } from 'lucide-react';
import { PHONE_NUMBER, WHATSAPP_NUMBER } from '../data';

interface StickyBottomBarProps {
  onOpenConsultation: () => void;
}

export const StickyBottomBar: React.FC<StickyBottomBarProps> = ({ onOpenConsultation }) => {
  return (
    <div 
      className="md:hidden fixed bottom-0 inset-x-0 bg-[#1a1a2e]/95 backdrop-blur-md border-t border-white/10 px-3 py-2.5 z-40 shadow-2xl flex items-center gap-2" 
      data-purpose="mobile-fixed-bottom-bar"
    >
      <button 
        onClick={onOpenConsultation}
        className="flex-1 py-3 bg-[#C9A227] hover:bg-[#A67C00] text-[#1a1a2e] font-black text-xs text-center rounded-xl transition active:scale-98 shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
      >
        <ClipboardList className="w-4 h-4" />
        <span>طلب عرض سعر</span>
      </button>

      <a 
        href={`tel:${PHONE_NUMBER}`}
        className="w-11 h-11 bg-white/10 text-[#E8D48B] rounded-xl flex items-center justify-center active:scale-95 border border-white/10"
        title="اتصال مباشر"
      >
        <Phone className="w-4 h-4 fill-current" />
      </a>

      <a 
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('السلام عليكم ترميم ديكور، أرغب في استشارة ومعاينة مجانية لدهانات وتشطيبات منزلي بالرياض')}`}
        target="_blank" 
        rel="noopener noreferrer"
        className="flex-1 py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs text-center rounded-xl transition active:scale-98 shadow-md flex items-center justify-center gap-1.5"
      >
        <MessageCircle className="w-4 h-4 fill-current" />
        <span>واتساب</span>
      </a>
    </div>
  );
};
