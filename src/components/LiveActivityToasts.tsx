import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, MapPin, Sparkles, X, Clock } from 'lucide-react';

interface ActivityItem {
  id: number;
  text: string;
  time: string;
  location: string;
  type: 'order' | 'delivery' | 'inspection';
}

const ACTIVITIES: ActivityItem[] = [
  {
    id: 1,
    text: 'طلب معاينة دهانات أوسكار لشقة دوبلكس',
    location: 'الرياض - حي النرجس',
    time: 'قبل 4 دقائق',
    type: 'inspection',
  },
  {
    id: 2,
    text: 'اعتماد تنفيذ بديل رخام وبديل خشب لصالون رئيسي',
    location: 'الرياض - حي حطين',
    time: 'قبل 11 دقيقة',
    type: 'order',
  },
  {
    id: 3,
    text: 'تسليم فيلا كاملة ودهانات أوف وايت بضمان 5 سنوات',
    location: 'الرياض - حي الياسمين',
    time: 'قبل 24 دقيقة',
    type: 'delivery',
  },
  {
    id: 4,
    text: 'مهندس المعاينة الفنية المجانية متواجد الآن',
    location: 'الرياض - حي الملقا',
    time: 'الآن',
    type: 'inspection',
  },
];

export const LiveActivityToasts: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [isDismissed, setIsDismissed] = useState<boolean>(false);

  useEffect(() => {
    if (isDismissed) return;

    const interval = setInterval(() => {
      // Toggle visibility to trigger smooth slide-in
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % ACTIVITIES.length);
        setIsVisible(true);
      }, 600);
    }, 9000);

    return () => clearInterval(interval);
  }, [isDismissed]);

  if (isDismissed) return null;

  const current = ACTIVITIES[currentIndex];

  return (
    <div className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-40 pointer-events-none">
      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.95 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="pointer-events-auto bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-2xl border border-slate-200/90 max-w-xs sm:max-w-sm flex items-start gap-3 relative text-right text-slate-800"
          >
            <button
              onClick={() => setIsDismissed(true)}
              className="absolute -top-1.5 -left-1.5 w-5 h-5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-400 flex items-center justify-center cursor-pointer shadow-xs"
              title="إغلاق"
            >
              <X className="w-3 h-3" />
            </button>

            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#A67C00] to-[#C9A227] text-[#1a1a2e] flex items-center justify-center shrink-0 shadow-xs mt-0.5">
              {current.type === 'delivery' ? (
                <ShieldCheck className="w-5 h-5 text-white" />
              ) : current.type === 'order' ? (
                <Sparkles className="w-5 h-5 text-white" />
              ) : (
                <MapPin className="w-5 h-5 text-white" />
              )}
            </div>

            <div className="flex-1">
              <div className="text-xs font-bold text-slate-900 leading-snug">
                {current.text}
              </div>
              <div className="flex items-center gap-2 mt-1 text-[11px] text-slate-500 font-medium">
                <span className="text-[#1A1A1A] font-semibold">{current.location}</span>
                <span>•</span>
                <span className="text-emerald-600 flex items-center gap-1 font-mono">
                  <Clock className="w-3 h-3" />
                  {current.time}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
