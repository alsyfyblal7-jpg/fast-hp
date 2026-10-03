import React, { useState } from 'react';
import { X, Calculator, MessageCircle, Phone, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { PHONE_NUMBER, WHATSAPP_NUMBER } from '../data';

interface CostEstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectEstimateForBooking: (summary: string) => void;
}

export const CostEstimatorModal: React.FC<CostEstimatorModalProps> = ({
  isOpen,
  onClose,
  onSelectEstimateForBooking,
}) => {
  const [area, setArea] = useState<number>(100);
  const [serviceType, setServiceType] = useState<'plain' | 'decor' | 'gypsum' | 'marble'>('plain');

  if (!isOpen) return null;

  const getEstimatedDays = () => {
    if (area <= 50) return '24 إلى 48 ساعة';
    if (area <= 150) return '2 إلى 3 أيام عمل';
    return '4 إلى 6 أيام عمل';
  };

  const getServiceLabel = () => {
    switch (serviceType) {
      case 'plain': return 'دهانات داخلية سادة ومودرن (أوسكار)';
      case 'decor': return 'بويات ديكورية وتعتيق (روشن، خيال)';
      case 'gypsum': return 'جبس بورد وأسقف معلقة مع إنارة';
      case 'marble': return 'تكسيات بديل الرخام وبديل الخشب WPC';
    }
  };

  const summaryText = `طلب عرض سعر: المساحة ${area}م² - نوع التشطيب: ${getServiceLabel()}`;

  const handleWhatsAppSend = () => {
    const text = `مرحباً إتش بي فاست، أرغب في الحصول على عرض سعر لدهان منزلي:\n• المساحة التقريبية: ${area} متر مربع\n• نوع الخدمة: ${getServiceLabel()}\n• مدة الإنجاز المتوقعة: ${getEstimatedDays()}\n\nيرجى التواصل معي لتحديد موعد المعاينة المجانية وتقديم عرض السعر.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-md w-full p-5 sm:p-6 shadow-2xl relative animate-in zoom-in-95 duration-200 my-auto text-slate-800">
        <button
          onClick={onClose}
          className="absolute top-4 left-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-3 mb-1">
          <div className="w-9 h-9 rounded-xl bg-orange-100 text-[#FF8A00] flex items-center justify-center">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-base text-[#003682]">طلب عرض سعر سريع</h3>
            <p className="text-[11px] text-slate-500">حدد المساحة ونوع التشطيب للحصول على أفضل سعر</p>
          </div>
        </div>

        <div className="mt-4 space-y-4">
          {/* Quick Area Presets & Slider */}
          <div>
            <div className="flex justify-between items-center text-xs font-bold text-slate-700 mb-1.5">
              <span>المساحة الإجمالية بالمتر المربع:</span>
              <span className="text-[#0052B4] font-mono text-base font-extrabold">{area} م²</span>
            </div>

            {/* Quick buttons */}
            <div className="grid grid-cols-5 gap-1 mb-2">
              {[30, 60, 100, 150, 250].map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => setArea(preset)}
                  className={`py-1 text-[11px] font-semibold rounded-lg border transition cursor-pointer ${
                    area === preset
                      ? 'bg-[#0052B4] text-white border-[#0052B4]'
                      : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {preset}م²
                </button>
              ))}
            </div>

            <input 
              type="range" 
              min="15" 
              max="500" 
              step="5"
              value={area}
              onChange={(e) => setArea(Number(e.target.value))}
              className="w-full accent-[#0052B4] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
              <span>15 م²</span>
              <span>150 م²</span>
              <span>300 م²</span>
              <span>500 م²</span>
            </div>
          </div>

          {/* Service Type */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">نوع التشطيب المطلوب:</label>
            <div className="space-y-1.5">
              {[
                { id: 'plain', title: 'دهان مودرن سادة ناعم (أوسكار أصلية)', badge: 'شامل المعجون' },
                { id: 'decor', title: 'بويات ديكورية وتعتيق (روشن، خيال، مارمو)', badge: 'ديكور فاخر' },
                { id: 'gypsum', title: 'جبس بورد وأسقف معلقة وإنارة مخفية', badge: 'شامل الهياكل' },
                { id: 'marble', title: 'تكسيات بديل رخام وبديل خشب WPC', badge: 'طابع فندقي' },
              ].map((s) => (
                <div
                  key={s.id}
                  onClick={() => setServiceType(s.id as any)}
                  className={`p-2.5 rounded-xl border text-xs cursor-pointer flex items-center justify-between transition ${
                    serviceType === s.id
                      ? 'border-[#0052B4] bg-blue-50/70 text-[#003682]'
                      : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span className="font-semibold">{s.title}</span>
                  <span className="text-[10px] bg-white px-2 py-0.5 rounded text-slate-500 border border-slate-200">
                    {s.badge}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Summary Details Badge (Price box removed) */}
          <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 text-xs">
            <div className="flex items-center gap-2 text-slate-700 mb-1 font-semibold">
              <CheckCircle2 className="w-4 h-4 text-[#0052B4] shrink-0" />
              <span>مدة الإنجاز القياسية المتوقعة: <b className="text-slate-900">{getEstimatedDays()}</b></span>
            </div>
            <div className="text-[11px] text-slate-500 leading-relaxed">
              * يشمل المعاينة الفنية المجانية بالموقع، وتغليف الأثاث، وضمان 5 سنوات موثق.
            </div>
          </div>

          {/* Contact Hotline in Modal */}
          <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200 flex items-center justify-between text-xs">
            <span className="text-slate-600 font-medium">للتواصل المباشر:</span>
            <a 
              href={`tel:${PHONE_NUMBER}`}
              className="font-bold text-[#0052B4] hover:underline flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span dir="ltr" className="font-mono">0508029328</span>
            </a>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-2 pt-1">
            <button
              onClick={handleWhatsAppSend}
              className="w-full py-3.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>طلب عرض السعر فوراً عبر الواتساب</span>
            </button>

            <button
              onClick={() => {
                onSelectEstimateForBooking(summaryText);
                onClose();
              }}
              className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-xl transition text-center cursor-pointer flex items-center justify-center gap-1.5"
            >
              <span>تعبئة نموذج طلب عرض السعر بالموقع</span>
              <ArrowLeft className="w-3.5 h-3.5 rtl:rotate-0" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
