import React, { useState } from 'react';
import { ArrowLeft, Clock, CheckCircle2, Sparkles, MapPin, Maximize2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '../data';
import { ProjectItem } from '../types';

interface PortfolioProps {
  onBookProjectLikeThis: (projectTitle: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onBookProjectLikeThis }) => {
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-slate-200" id="projects" data-purpose="projects-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-[#A67C00] bg-[#C9A227]/15 px-4 py-1.5 rounded-full border border-[#C9A227]/30 inline-flex items-center gap-1.5 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A227]" />
            <span>معرض المشاريع الحية</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1a1a2e] mb-3">
            من أعمالنا المنجزة في الرياض
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            نماذج واقعية من تسليماتنا في فلل وشقق أحياء النرجس والملقا والياسمين وشمال الرياض
          </p>
        </div>

        {/* 4 Projects Grid matching tarmim-decor.com */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-[#fdfbf7] rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image Container with Zoom Click */}
                <div
                  className="relative h-60 bg-slate-900 overflow-hidden cursor-pointer"
                  onClick={() => setActiveModalProject(project)}
                >
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                  {/* Location badge */}
                  <span className="absolute top-3 right-3 bg-[#1a1a2e]/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-lg backdrop-blur-xs flex items-center gap-1 border border-white/10">
                    <MapPin className="w-3 h-3 text-[#C9A227]" />
                    <span>{project.location}</span>
                  </span>

                  {project.badge && (
                    <span className="absolute bottom-3 right-3 bg-[#C9A227] text-[#1a1a2e] text-[10px] font-black px-2.5 py-1 rounded-md shadow-sm">
                      {project.badge}
                    </span>
                  )}

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <span className="bg-white/95 text-slate-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>تكبير الصورة</span>
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5">
                  <h3 className="font-extrabold text-[#1a1a2e] text-base mb-2 group-hover:text-[#A67C00] transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    {project.description}
                  </p>

                  <div className="space-y-1 mb-4">
                    {project.specs.map((s, si) => (
                      <div key={si} className="text-[11px] text-slate-500 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" />
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-5 pt-0 border-t border-slate-200/60 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 flex items-center gap-1 font-mono">
                  <Clock className="w-3 h-3 text-[#C9A227]" />
                  <span>{project.duration}</span>
                </span>
                <button
                  onClick={() => onBookProjectLikeThis(project.title)}
                  className="text-xs font-bold text-[#A67C00] hover:text-[#C9A227] flex items-center gap-1 transition cursor-pointer"
                >
                  <span>طلب نفس التنفيذ</span>
                  <ArrowLeft className="w-3 h-3 rtl:rotate-0" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative"
            >
              <div className="relative h-80 bg-slate-950">
                <img
                  src={activeModalProject.imageUrl}
                  alt={activeModalProject.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="absolute top-4 left-4 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/90 transition cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-slate-900 mb-2">{activeModalProject.title}</h3>
                <p className="text-xs text-slate-600 mb-4">{activeModalProject.description}</p>
                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      const t = activeModalProject.title;
                      setActiveModalProject(null);
                      onBookProjectLikeThis(t);
                    }}
                    className="flex-1 py-3 bg-[#C9A227] hover:bg-[#A67C00] text-[#1a1a2e] font-black text-xs rounded-xl"
                  >
                    طلب معاينة لنفس التصميم
                  </button>
                  <button
                    onClick={() => setActiveModalProject(null)}
                    className="px-5 py-3 bg-slate-100 text-slate-700 font-bold text-xs rounded-xl"
                  >
                    إغلاق
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
