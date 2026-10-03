import React from 'react';
import { Phone, MessageCircle, MapPin, ShieldCheck, Clock, ArrowLeft } from 'lucide-react';
import { ASSETS, BRAND_NAME, BRAND_SHORT, PHONE_NUMBER, WHATSAPP_NUMBER, TIKTOK_URL } from '../data';

interface FooterProps {
  onOpenEstimator?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEstimator }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1a2e] text-white pt-16 pb-12 border-t-4 border-[#C9A227]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4 Columns Desktop Grid matching tarmim-decor.com */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          
          {/* Col 1: About Institution */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-12 w-auto max-w-[190px] overflow-hidden flex items-center">
                <img 
                  src={ASSETS.logo} 
                  alt={BRAND_NAME} 
                  className="h-full w-auto object-contain"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
              مؤسسة <strong>{BRAND_NAME}</strong> متخصصة في أعمال الدهانات والتشطيبات الداخلية والخارجية والترميم الشامل في الرياض. نلتزم بأعلى معايير الجودة وخامات أوسكار والجزيرة الأصلية مع ضمان رسمي 5 سنوات.
            </p>

            <div className="inline-flex items-center gap-2 text-xs text-[#E8D48B] bg-white/5 px-3 py-1.5 rounded-xl border border-white/10">
              <ShieldCheck className="w-4 h-4 text-[#C9A227]" />
              <span>ضمان رسمي معتمد 5 سنوات</span>
            </div>
          </div>

          {/* Col 2: Contact Info */}
          <div>
            <h4 className="text-sm font-bold text-[#C9A227] mb-5 tracking-wider">
              تواصل معنا
            </h4>
            <div className="space-y-3.5 text-xs sm:text-sm">
              <a 
                href={`tel:${PHONE_NUMBER}`}
                className="flex items-center gap-3 text-slate-200 hover:text-[#C9A227] transition"
              >
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-[#C9A227]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block font-normal">الاتصال الهاتفي المباشر:</span>
                  <span dir="ltr" className="font-mono font-bold">0508029328</span>
                </div>
              </a>

              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('السلام عليكم إتش بي فاست، أرغب في استشارة ومعاينة مجانية لدهانات وتشطيبات منزلي بالرياض')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-200 hover:text-[#25D366] transition"
              >
                <div className="w-8 h-8 rounded-lg bg-[#25D366]/20 flex items-center justify-center shrink-0 text-[#25D366]">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block font-normal">واتساب على مدار 24 ساعة:</span>
                  <span dir="ltr" className="font-mono font-bold">0508029328</span>
                </div>
              </a>

              <div className="flex items-center gap-3 text-slate-200">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-[#C9A227]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block font-normal">المنطقة والخدمة:</span>
                  <span>الرياض • نخدم كافة الأحياء وضواحيها</span>
                </div>
              </div>

              <a 
                href={TIKTOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-200 hover:text-white transition group"
              >
                <div className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center shrink-0 border border-white/20 group-hover:scale-105 transition-transform">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49 6.27 6.27 0 0 0 1.96-4.49V8.89a8.28 8.28 0 0 0 5.21 1.83V7.27a4.84 4.84 0 0 1-1.4-.58z"/>
                  </svg>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block font-normal">تيك توك الرسمي:</span>
                  <span dir="ltr" className="font-mono font-bold text-[#E8D48B]">@oscar_paints05</span>
                </div>
              </a>
            </div>
          </div>

          {/* Col 3: Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-[#C9A227] mb-5 tracking-wider">
              روابط سريعة
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <li>
                <a href="#" className="hover:text-white transition flex items-center gap-1.5">
                  <span className="text-[#C9A227]">›</span>
                  <span>الصفحة الرئيسية</span>
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition flex items-center gap-1.5">
                  <span className="text-[#C9A227]">›</span>
                  <span>من نحن ولماذا تختارنا</span>
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition flex items-center gap-1.5">
                  <span className="text-[#C9A227]">›</span>
                  <span>خدماتنا الـ 12 المتميزة</span>
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition flex items-center gap-1.5">
                  <span className="text-[#C9A227]">›</span>
                  <span>معرض الأعمال المنجزة</span>
                </a>
              </li>
              <li>
                <a href="#articles" className="hover:text-white transition flex items-center gap-1.5">
                  <span className="text-[#C9A227]">›</span>
                  <span>معلومات تهمك واستشارات</span>
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition flex items-center gap-1.5">
                  <span className="text-[#C9A227]">›</span>
                  <span>الأسئلة الشائعة</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Top Services */}
          <div>
            <h4 className="text-sm font-bold text-[#C9A227] mb-5 tracking-wider">
              خدماتنا الرئيسية
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" />
                <span>دهانات داخلية وخارجية (أوسكار)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" />
                <span>تركيب الشيبورد وخلفيات الشاشة</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" />
                <span>بديل الرخام الفاخر وبديل الخشب WPC</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" />
                <span>ديكورات الفوم والبانوهات والجبس بورد</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" />
                <span>تركيب الباركيه وترميم وتشطيب شامل</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" />
                <span>عزل الأسطح والتسربات والرطوبة</span>
              </li>
            </ul>

            <div className="mt-5 p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-[#E8D48B]">
              ⚡ سرعة استجابة فائقة (FAST) ومعاينة مجانية في نفس اليوم بالرياض.
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            جميع الحقوق محفوظة © {currentYear} {BRAND_NAME} ({BRAND_SHORT}) - مقاول دهانات وديكورات الرياض.
          </div>
          <div className="text-[#E8D48B] font-bold text-sm tracking-wide bg-white/5 px-3 py-1 rounded-lg border border-white/10">
            تطوير وبرمجة بلال الصيفي
          </div>
          <div className="flex items-center gap-3">
            <a href="#consultation-form" className="hover:text-white transition">طلب مقايسة وعرض سعر</a>
            <span>•</span>
            <a href={`tel:${PHONE_NUMBER}`} className="hover:text-white transition">اتصل بنا</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
