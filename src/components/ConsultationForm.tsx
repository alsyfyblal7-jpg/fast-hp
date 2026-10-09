import React, { useState } from 'react';
import { Bell, ArrowLeft, CheckCircle2, MessageCircle, PhoneCall, ShieldCheck, Sparkles, Clock, MapPin } from 'lucide-react';
import { PHONE_NUMBER, WHATSAPP_NUMBER, SERVICES } from '../data';

interface ConsultationFormProps {
  initialService?: string;
  initialNote?: string;
}

// رابط الـ Webhook الخاص بك من Google Apps Script
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyRWln7kATL0aQquuO9aIyfrHrZ2VukcYPzBk-aTQJFxYQqXWuC8q5lC8KEeEnRVoeJ-Q/exec';

export const ConsultationForm: React.FC<ConsultationFormProps> = ({
  initialService = 'interior-paints',
  initialNote = '',
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(initialService);
  const [neighborhood, setNeighborhood] = useState('شمال الرياض');
  const [notes, setNotes] = useState(initialNote);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const getServiceName = (val: string) => {
    const found = SERVICES.find(s => s.id === val);
    return found ? found.title : val;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    setLoading(true);

    try {
      // إرسال البيانات للـ Google Apps Script
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify({
          name: name,
          phone: phone,
          service: getServiceName(service),
          neighborhood: neighborhood,
          notes: notes,
          date: new Date().toLocaleString('ar-SA'),
        }),
      });
    } catch (error) {
      console.error('Error sending data to Webhook:', error);
    } finally {
      setLoading(false);
      setIsSubmitted(true);
    }
  };

  const handleOpenWhatsAppConfirmation = () => {
    const text = `السلام عليكم إتش بي فاست (HB FAST)، قمت بطلب عرض سعر عبر الموقع:\n• الاسم: ${name}\n• رقم الجوال: ${phone}\n• الحي: ${neighborhood}\n• الخدمة المطلوبة: ${getServiceName(service)}${notes ? `\n• تفاصيل: ${notes}` : ''}\n\nيرجى التواصل معي لتحديد موعد المعاينة المجانية بالرياض.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24" data-purpose="consultation-form-section" id="consultation-form">
      <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-3xl lg:rounded-[3rem] p-6 sm:p-10 lg:p-14 shadow-2xl border border-white/10 relative overflow-hidden text-white">
        
        {/* Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A227]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
          
          {/* Right Column: Promotional & Assurance Info */}
          <div className="lg:col-span-5 text-right">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C9A227]/20 text-[#E8D48B] text-xs sm:text-sm font-bold mb-4 border border-[#C9A227]/30">
              <Sparkles className="w-4 h-4 text-[#C9A227] animate-bounce" />
              <span>معاينة فنية ورفع مقاسات مجاناً بالرياض</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-[#C9A227] leading-tight mb-4">
              احصل على عرض سعر لدهان منزلك
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
              أدخل بياناتك وسيقوم مهندس إتش بي فاست (HB FAST) بالتواصل معك خلال 30 دقيقة لرفع المقاسات وتقديم عرض السعر الدقيق والتصميم 3D مجاناً بدون أي التزام مالي.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-white/10 text-[#C9A227] flex items-center justify-center shrink-0 mt-0.5 border border-white/10">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">شهادة ضمان رسمي 5 سنوات</h4>
                  <p className="text-xs text-slate-400">ضمان خطي موثق يشمل ثبات الألوان وعدم تقشر الدهان وجودة التركيب.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-white/10 text-[#C9A227] flex items-center justify-center shrink-0 mt-0.5 border border-white/10">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">خامات أوسكار والجزيرة الأصلية 100%</h4>
                  <p className="text-xs text-slate-400">دهانات بدون روائح صديقة للبيئة وقابلة للغسيل ومقاومة للرطوبة.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-white/10 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 border border-white/10">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">سرعة إنجاز وتسليم نظيف</h4>
                  <p className="text-xs text-slate-400">تغليف كامل للأثاث والأرضيات مع تنظيف شامل بعد انتهاء العمل.</p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-[#C9A227]" />
                <span className="text-slate-300">هل تفضل الاتصال المباشر؟</span>
              </div>
              <a 
                href={`tel:${PHONE_NUMBER}`}
                className="font-bold text-[#E8D48B] hover:underline"
              >
                0508029328
              </a>
            </div>
          </div>

          {/* Left Column: Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-100 text-slate-900">
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="border-b border-slate-100 pb-4 mb-2">
                    <h3 className="font-extrabold text-xl text-[#1a1a2e]">
                      طلب عرض السعر والمعاينة المجانية
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      املأ الحقول التالية وسيتواصل معك مهندس التشطيبات فوراً
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        الاسم الكريم: <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="text" 
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="مثال: فهد القحطاني" 
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/20 outline-hidden text-sm transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        رقم الجوال: <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="tel" 
                        required
                        dir="ltr"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="05XXXXXXXX" 
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/20 outline-hidden text-sm font-mono text-right transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        نوع الخدمة المطلوبة:
                      </label>
                      <select 
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/20 outline-hidden text-sm bg-white cursor-pointer transition"
                      >
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.id}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        الحي داخل الرياض:
                      </label>
                      <input 
                        type="text" 
                        value={neighborhood}
                        onChange={(e) => setNeighborhood(e.target.value)}
                        placeholder="مثال: حي النرجس، الملقا، الياسمين" 
                        className="w-full