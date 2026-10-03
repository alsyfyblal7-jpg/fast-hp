import React from 'react';
import { Shield, Clock, Award, Users, CheckCircle2, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { BRAND_NAME, BRAND_SHORT } from '../data';

export const AboutPreview: React.FC = () => {
  const stats = [
    { number: '500+', label: 'مشروع منجز بالرياض', icon: <Award className="w-5 h-5 text-[#C9A227]" /> },
    { number: '10+', label: 'سنوات خبرة واحتراف', icon: <Clock className="w-5 h-5 text-[#C9A227]" /> },
    { number: '100%', label: 'رضا تام للعملاء', icon: <Users className="w-5 h-5 text-[#C9A227]" /> },
    { number: '5 سنوات', label: 'ضمان رسمي معتمد', icon: <Shield className="w-5 h-5 text-[#C9A227]" /> },
  ];

  const features = [
    {
      title: 'سرعة الإنجاز ودقة المواعيد (FAST)',
      desc: 'نلتزم بالجدول الزمني المحدد دون أي تأخير، مع خطة عمل واضحة وتسليم فندقي نظيف في الوقت المتفق عليه.',
      icon: <Clock className="w-6 h-6 text-[#C9A227]" />
    },
    {
      title: 'خامات أصلية 100% معتمدة',
      desc: 'نعتمد فقط أفضل الماركات مثل دهانات أوسكار الأصلية والجزيرة، مع مواد لاصقة ومعاجين ألمانية تضمن استدامة الدهان.',
      icon: <Shield className="w-6 h-6 text-[#C9A227]" />
    },
    {
      title: 'أسعار تنافسية ومعاينة مجانية',
      desc: 'أسعار واضحة ومدروسة بدون أي تكاليف خفية، مع تقديم معاينة فنية وتحديد المقاسات مجاناً بالكامل في موقعك.',
      icon: <Award className="w-6 h-6 text-[#C9A227]" />
    },
    {
      title: 'فريق فني ومعلمون محترفون',
      desc: 'طاقم عمل متمرس يمتلك مهارات عالية في معالجة التشققات، تركيب بديل الرخام، وضبط استواء الأسقف والجدران.',
      icon: <Users className="w-6 h-6 text-[#C9A227]" />
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#fdfbf7] border-b border-slate-200/80" id="about" data-purpose="about-preview">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-[#A67C00] bg-[#C9A227]/15 px-4 py-1.5 rounded-full border border-[#C9A227]/30 inline-flex items-center gap-1.5 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A227]" />
            <span>الجودة والسرعة الفائقة</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1a1a2e] mb-4">
            لماذا عملاء الرياض يختارون {BRAND_SHORT} (إتش بي فاست)؟
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            بأكثر من <strong>10 سنوات</strong> من الخبرة في مجالات الدهانات الداخلية والدهانات الخارجية والترميم الشامل، نفخر في <strong>{BRAND_NAME}</strong> بتقديم أعلى معايير الجودة مع <strong>ضمان حقيقي حتى 5 سنوات</strong>. فريقنا من المحترفين جاهز لتحويل منزلك إلى تحفة فنية بأسرع وقت وأفضل سعر.
          </p>
        </div>

        {/* 4 Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-14">
          {stats.map((s, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white p-6 rounded-2xl sm:rounded-3xl border border-slate-200/80 shadow-md text-center group hover:border-[#C9A227] transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-[#C9A227]/15 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                {s.icon}
              </div>
              <div className="text-2xl sm:text-4xl font-black text-[#1a1a2e] tracking-tight mb-1 font-mono">
                {s.number}
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-500">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#1a1a2e] text-[#C9A227] flex items-center justify-center mb-4 group-hover:bg-[#C9A227] group-hover:text-[#1a1a2e] transition-colors">
                  {f.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                  {f.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {f.desc}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-[#A67C00]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A227]" />
                <span>معيار أساسي في كافة أعمالنا</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
