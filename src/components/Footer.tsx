import React from 'react';
import { MapPin, Clock, Phone, MessageCircle } from 'lucide-react';
import { ASSETS, PHONE_NUMBER, WHATSAPP_NUMBER } from '../data';

interface FooterProps {
  onOpenEstimator: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEstimator }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#00255A] text-white pt-16 pb-20 md:pb-16 px-4 sm:px-6 lg:px-8 border-t border-[#003682]" data-purpose="footer">
      <div className="max-w-7xl mx-auto">
        
        {/* 4 Columns Grid on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Bio (4 cols on lg) */}
          <div className="lg:col-span-4">
            <div className="h-14 w-40 overflow-hidden flex items-center justify-start mb-4">
              <img 
                alt="شعار إتش بي فاست" 
                className="h-full w-auto object-contain brightness-105" 
                loading="lazy" 
                src={ASSETS.footerLogo} 
              />
            </div>
            <p className="text-sm text-slate-300 leading-relaxed mb-6 max-w-sm">
              إتش بي فاست (HB Fast) للدهانات والديكورات العصرية. نجمع لك بين سرعة التنفيذ الفائقة، والذوق الرفيع، والجودة المضمونة بشهادة معتمدة 5 سنوات.
            </p>
            <div className="flex items-center gap-3">
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#25D366] text-white flex items-center justify-center transition"
                title="واتساب"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
              </a>
              <a 
                href={`tel:${PHONE_NUMBER}`}
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#0052B4] text-white flex items-center justify-center transition"
                title="اتصال هاتفي"
              >
                <Phone className="w-5 h-5 fill-current" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols on lg) */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-base text-white mb-4">روابط سريعة</h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li><a href="#" className="hover:text-white transition">الرئيسية</a></li>
              <li><a href="#services" className="hover:text-white transition">خدماتنا</a></li>
              <li><a href="#palette" className="hover:text-white transition">ألوان 2025</a></li>
              <li><a href="#portfolio" className="hover:text-white transition">معرض الأعمال</a></li>
              <li><a href="#why-us" className="hover:text-white transition">لماذا نحن</a></li>
              <li>
                <button 
                  type="button"
                  onClick={onOpenEstimator}
                  className="hover:text-white transition cursor-pointer text-right"
                >
                  حاسبة التكلفة الفورية
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Specialized Services (3 cols on lg) */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-base text-white mb-4">خدمات التشطيب</h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li><a href="#services" className="hover:text-white transition">دهانات سادة ومودرن (جوتن)</a></li>
              <li><a href="#services" className="hover:text-white transition">ديكورات وتعتيق (روشن، خيال)</a></li>
              <li><a href="#services" className="hover:text-white transition">جبس بورد وأسقف معلقة وإنارة</a></li>
              <li><a href="#services" className="hover:text-white transition">تكسيات بديل الرخام وبديل الخشب</a></li>
              <li><a href="#services" className="hover:text-white transition">عزل الأسطح ومعالجة الرطوبة</a></li>
            </ul>
          </div>

          {/* Col 4: Coverage & Working Hours (3 cols on lg) */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-base text-white mb-4">التغطية وأوقات العمل</h4>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-[#FF8A00] shrink-0 mt-0.5" />
                <span>نغطي كافة أحياء الرياض والمحافظات المجاورة بزيارات ومعاينات مجانية فورية.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-5 h-5 text-[#FF8A00] shrink-0 mt-0.5" />
                <span>ساعات العمل: يومياً من الساعة 8:00 صباحاً حتى 9:00 مساءً.</span>
              </div>
              <div className="flex items-center gap-2.5 pt-1 text-sm">
                <Phone className="w-4 h-4 text-[#FF8A00] shrink-0" />
                <span>رقم التواصل: <a href={`tel:${PHONE_NUMBER}`} className="font-bold font-mono text-white hover:text-amber-300" dir="ltr">0508029328</a></span>
              </div>
              <div className="pt-2 text-xs text-amber-300">
                ⚡ خدمة الطوارئ السريعة ومعاينة نفس اليوم متوفرة.
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            جميع الحقوق محفوظة © {currentYear} إتش بي فاست للدهانات والديكورات (HB Fast).
          </div>

          {/* حقوق التطوير والبرمجة */}
          <div className="text-slate-300 font-medium">
            تطوير وبرمجة <span className="text-[#FF8A00] font-bold">بلال الصيفي</span>
          </div>

          <div className="flex items-center gap-4">
            <a href="#consultation-form" className="hover:text-white transition">طلب مقايسة مجانية</a>
            <span>•</span>
            <a href={`tel:${PHONE_NUMBER}`} className="hover:text-white transition">اتصل بنا</a>
          </div>
        </div>

      </div>
    </footer>
  );
};