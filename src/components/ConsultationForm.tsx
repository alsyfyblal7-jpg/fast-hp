import React, { useState } from 'react';
import { Bell, ArrowLeft, CheckCircle2, MessageCircle, PhoneCall, ShieldCheck, Sparkles, Clock } from 'lucide-react';
import { PHONE_NUMBER, WHATSAPP_NUMBER } from '../data';

interface ConsultationFormProps {
  initialService?: string;
  initialNote?: string;
}

export const ConsultationForm: React.FC<ConsultationFormProps> = ({
  initialService = 'interior-paints',
  initialNote = '',
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(initialService);
  const [cityNeighborhood, setCityNeighborhood] = useState('الرياض');
  const [notes, setNotes] = useState(initialNote);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setIsSubmitted(true);
  };

  const getServiceName = (val: string) => {
    switch (val) {
      case 'interior-paints': return 'دهانات داخلية وتعتيق مودرن';
      case 'exterior-paints': return 'دهانات خارجية وبروفايل فيلا';
      case 'gypsum-decor': return 'جبس بورد وأسقف معلقة';
      case 'marble-wood-alt': return 'بديل الرخام وبديل الخشب';
      case 'full-renovation': return 'تشطيب وتجديد كامل للمنزل';
      case 'waterproofing': return 'عزل أسطح ومعالجة رطوبة';
      default: return val;
    }
  };

  const handleOpenWhatsAppConfirmation = () => {
    const text = `السلام عليكم إتش بي فاست، قمت بحجز موعد معاينة مجانية عبر الموقع:\n• الاسم: ${name}\n• رقم الجوال: ${phone}\n• المدينة/الحي: ${cityNeighborhood}\n• الخدمة المطلوبة: ${getServiceName(service)}${notes ? `\n• تفاصيل إضافية: ${notes}` : ''}\n\nيرجى تأكيد موعد زيارة المهندس للمعاينة.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24" data-purpose="consultation-form-section" id="consultation-form">
      <div className="bg-gradient-to-br from-white via-blue-50/30 to-orange-50/20 rounded-3xl lg:rounded-[3rem] p-6 sm:p-10 lg:p-14 shadow-2xl border border-blue-100 relative overflow-hidden">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Right Column: Promotional & Assurance Info (5 cols on lg) */}
          <div className="lg:col-span-5 text-right">
            {/* Accent badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 text-[#FF8A00] text-xs sm:text-sm font-bold mb-4">
              <Bell className="w-4 h-4 fill-current animate-bounce" />
              <span>عرض محدود: معاينة وتصميم 3D مجاناً</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-[#003682] leading-tight mb-4">
              احصل على عرض سعر لدهان منزلك
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
              أدخل بياناتك وسيقوم مهندس التشطيبات بالتواصل معك في غضون 30 دقيقة لرفع المقاسات وتقديم عرض السعر والتصميم 3D مجاناً بدون أي التزام مالي.
            </p>

            {/* Value checklist */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-blue-100 text-[#0052B4] flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">شهادة ضمان رسمي 5 سنوات</h4>
                  <p className="text-xs text-slate-500">ضمان خطي موثق يشمل ثبات الألوان وعدم تقشر البوية وجودة التركيب.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-amber-100 text-[#FF8A00] flex items-center justify-center shrink-0 mt-0.5">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">تصميم وتنسيق ألوان 3D</h4>
                  <p className="text-xs text-slate-500">نساعدك على رؤية النتيجة المتوقعة قبل بدء سحب المعجون والدهان.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">حضور سريع في نفس اليوم</h4>
                  <p className="text-xs text-slate-500">طواقم هندسية تغطي كافة أحياء الرياض والمناطق المجاورة يومياً.</p>
                </div>
              </div>
            </div>

            {/* Direct hotline */}
            <div className="pt-6 border-t border-slate-200/80 flex items-center gap-4 text-xs sm:text-sm text-slate-600">
              <div className="font-bold">أو تواصل مباشرة عبر الهاتف:</div>
              <a 
                href={`tel:${PHONE_NUMBER}`}
                className="font-mono font-bold text-[#0052B4] hover:underline" 
                dir="ltr"
              >
                0508029328
              </a>
            </div>
          </div>

          {/* Left Column: Interactive Lead Capture Form (7 cols on lg) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 lg:p-10 rounded-3xl shadow-card border border-slate-100">
            {isSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 sm:p-8 text-center animate-in zoom-in-95 duration-200">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="font-extrabold text-xl sm:text-2xl text-emerald-950 mb-2">
                  تم استلام طلب المعاينة بنجاح يا {name}!
                </h3>
                <p className="text-sm text-emerald-800 leading-relaxed mb-6 max-w-md mx-auto">
                  سيقوم مهندس الديكور والتشطيبات بالتواصل معك على الرقم <b dir="ltr" className="font-mono text-emerald-900">{phone}</b> خلال أقل من 30 دقيقة لتأكيد موعد الزيارة المجانية.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
                  <button
                    onClick={handleOpenWhatsAppConfirmation}
                    className="flex-1 py-3.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs transition flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>متابعة فورية بالواتساب</span>
                  </button>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setName('');
                      setPhone('');
                      setNotes('');
                    }}
                    className="py-3 px-6 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-xs sm:text-sm rounded-xl border border-slate-200 transition cursor-pointer"
                  >
                    طلب جديد
                  </button>
                </div>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Input: Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5" htmlFor="clientName">
                      الاسم الكريم <span className="text-red-500">*</span>
                    </label>
                    <input 
                      id="clientName" 
                      type="text" 
                      required 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="مثال: أحمد عبد الله" 
                      className="w-full text-sm px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#0052B4] focus:border-[#0052B4] bg-slate-50/50 hover:bg-white transition"
                    />
                  </div>

                  {/* Input: Phone Number */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5" htmlFor="clientPhone">
                      رقم الجوال (واتساب) <span className="text-red-500">*</span>
                    </label>
                    <input 
                      id="clientPhone" 
                      type="tel" 
                      required 
                      dir="ltr"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="05XXXXXXXX" 
                      className="w-full text-sm px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#0052B4] focus:border-[#0052B4] bg-slate-50/50 hover:bg-white text-right font-mono transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Input: City / District */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5" htmlFor="clientCity">
                      المدينة / الحي
                    </label>
                    <input 
                      id="clientCity" 
                      type="text" 
                      value={cityNeighborhood}
                      onChange={(e) => setCityNeighborhood(e.target.value)}
                      placeholder="مثال: الرياض - حي الملقا / النرجس" 
                      className="w-full text-sm px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#0052B4] focus:border-[#0052B4] bg-slate-50/50 hover:bg-white transition"
                    />
                  </div>

                  {/* Input: Service Selected */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5" htmlFor="serviceType">
                      الخدمة المطلوبة
                    </label>
                    <select 
                      id="serviceType"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full text-sm px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#0052B4] focus:border-[#0052B4] bg-slate-50/50 hover:bg-white transition"
                    >
                      <option value="interior-paints">دهانات داخلية وتعتيق مودرن</option>
                      <option value="exterior-paints">دهانات خارجية وبروفايل فيلا</option>
                      <option value="gypsum-decor">جبس بورد وأسقف معلقة</option>
                      <option value="marble-wood-alt">بديل الرخام وبديل الخشب</option>
                      <option value="full-renovation">تشطيب وتجديد كامل للمنزل</option>
                      <option value="waterproofing">عزل أسطح ومعالجة رطوبة</option>
                    </select>
                  </div>
                </div>

                {/* Optional Notes */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5" htmlFor="clientNotes">
                    ملاحظات أو مواصفات إضافية (اختياري)
                  </label>
                  <textarea 
                    id="clientNotes"
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="مثال: أرغب بدهان شقة 120م² وتنسيق جدار صالة بديل رخام WPC"
                    className="w-full text-sm px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#0052B4] focus:border-[#0052B4] bg-slate-50/50 hover:bg-white resize-none transition"
                  />
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  className="w-full py-4 rounded-2xl bg-[#FF8A00] hover:bg-[#E57900] text-white font-extrabold text-sm sm:text-base tracking-wide shadow-glow-orange active:scale-98 transition mt-3 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>تأكيد طلب المعاينة الفنية المجانية</span>
                  <ArrowLeft className="w-5 h-5 rtl:rotate-0" />
                </button>

                <p className="text-xs text-center text-slate-400 mt-2">
                  🔒 خصوصيتك في أمان تام. لا نشارك بيانات الاتصال مع أي طرف خارجي.
                </p>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
