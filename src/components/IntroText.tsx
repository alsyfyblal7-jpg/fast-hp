import React from 'react';
import { MapPin, CheckCircle, Sparkles, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { BRAND_NAME, BRAND_SHORT } from '../data';

export const IntroText: React.FC = () => {
  const neighborhoods = [
    'حي النرجس', 'حي الملقا', 'حي الياسمين', 'حي الصحافة',
    'حي حطين', 'حي العارض', 'شمال الرياض', 'شرق وغرب الرياض'
  ];

  return (
    <section className="bg-white py-14 sm:py-18 border-b border-slate-100" data-purpose="intro-text">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-right">
        
        {/* Header Tag */}
        <div className="flex items-center gap-2 text-xs font-bold text-[#A67C00] mb-3">
          <MapPin className="w-4 h-4 text-[#C9A227]" />
          <span>خدمات {BRAND_SHORT} تغطي جميع أحياء العاصمة الرياض وضواحيها</span>
        </div>

        {/* Intro Paragraphs */}
        <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
          <p>
            هل تبحث عن مقاول موثوق في <strong>الرياض</strong> لتحويل منزلك إلى مساحة أنيقة تعكس ذوقك الرفيع؟ نحن في <strong>{BRAND_NAME} ({BRAND_SHORT})</strong> فريق متخصص في <strong className="text-[#A67C00]">الدهانات الداخلية</strong> و<strong className="text-[#A67C00]">الدهانات الخارجية</strong> وخدمات التشطيب المتكاملة، نعمل في جميع أحياء العاصمة بما في ذلك <strong>حي النرجس</strong> و<strong>حي الملقا</strong> و<strong>حي الياسمين</strong> و<strong>حي الصحافة</strong> ومناطق <strong>شمال الرياض</strong> المختلفة.
          </p>

          <p>
            نتميز بتقديم حلول ديكورية شاملة تجمع بين الجودة العالية والأسعار التنافسية، بدءاً من أحدث تقنيات الدهان التي تضفي على جدرانك لمسة فنية بخامات أوسكار والجزيرة الأصلية، مروراً بتركيب أسقف الجبس بورد العصرية وتصاميم الفوم والبانوهات الجدارية، وصولاً إلى تركيب بديل الرخام الفاخر وبديل الخشب الأنيق WPC اللذين يمنحان منزلك طابعاً فندقياً استثنائياً.
          </p>

          <p>
            سواء كنت تسكن في فلل <strong>حي النرجس</strong> الراقية، أو شقق <strong>حي الملقا</strong> الحديثة، أو منازل <strong>حي الياسمين</strong> الهادئة، فإننا نصل إليك أينما كنت في <strong>الرياض</strong> ونقدم لك استشارة مجانية وتقييم شامل لمشروعك. فريقنا من الفنيين المحترفين يضمن لك تنفيذاً متقناً يلتزم بأعلى معايير الجودة في الترميم والتشطيب، مع ضمان حقيقي يمتد لـ 5 سنوات يمنحك راحة البال.
          </p>
        </div>

        {/* Riyadh Neighborhoods Quick Pills */}
        <div className="mt-8 pt-6 border-t border-slate-100">
          <span className="text-xs font-bold text-slate-500 block mb-3">
            نصلك أينما كنت في الرياض للمعاينة المجانية الفورية من مهندسي {BRAND_SHORT}:
          </span>
          <div className="flex flex-wrap gap-2">
            {neighborhoods.map((n, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#fdfbf7] border border-[#E8D48B]/60 text-xs font-bold text-slate-800 shadow-2xs hover:border-[#C9A227] transition"
              >
                <CheckCircle className="w-3.5 h-3.5 text-[#C9A227]" />
                <span>{n}</span>
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
