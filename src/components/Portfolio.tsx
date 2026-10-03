import React, { useState } from 'react';
import { Maximize2, X, Clock, CheckCircle, ArrowLeft } from 'lucide-react';
import { PROJECTS } from '../data';
import { ProjectItem } from '../types';

interface PortfolioProps {
  onBookProjectLikeThis: (projectTitle: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onBookProjectLikeThis }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'interior' | 'decor'>('all');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const filteredProjects = activeTab === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeTab);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24" data-purpose="portfolio" id="portfolio">
      
      {/* Header and Filter Row */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#0052B4] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
            أحدث التشطيبات
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#003682] mt-3">
            معرض الإنجازات الحديثة
          </h2>
          <p className="text-sm sm:text-base text-slate-500 mt-2">
            نماذج واقعية من تسليماتنا المتميزة في الفلل والشقق السكنية بالمملكة
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 p-1.5 bg-slate-100 rounded-2xl self-start md:self-auto overflow-x-auto hide-scrollbar">
          <button
            onClick={() => setActiveTab('all')}
            className={`py-2 px-4 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'all' ? 'bg-white text-[#003682] shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            كافة الأعمال ({PROJECTS.length})
          </button>
          <button
            onClick={() => setActiveTab('interior')}
            className={`py-2 px-4 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'interior' ? 'bg-white text-[#003682] shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            دهانات داخلية
          </button>
          <button
            onClick={() => setActiveTab('decor')}
            className={`py-2 px-4 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'decor' ? 'bg-white text-[#003682] shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            بديل رخام وخشب
          </button>
        </div>
      </div>

      {/* Projects Grid (3 Columns on Desktop) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div 
            key={project.id}
            className="bg-white rounded-3xl overflow-hidden shadow-card border border-slate-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 group flex flex-col justify-between"
          >
            <div>
              {/* Image Container */}
              <div 
                className="relative h-60 sm:h-64 bg-slate-900 cursor-pointer overflow-hidden"
                onClick={() => setActiveModalProject(project)}
              >
                <img 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  loading="lazy" 
                  referrerPolicy="no-referrer"
                  src={project.imageUrl} 
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                <span className="absolute top-4 right-4 bg-[#00255A]/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-xl border border-white/20">
                  {project.location}
                </span>

                {project.badge && (
                  <span className="absolute top-4 left-4 bg-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-xs">
                    {project.badge}
                  </span>
                )}

                <button
                  type="button"
                  aria-label="تكبير الصورة"
                  className="absolute bottom-4 left-4 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-bold text-slate-900 text-base sm:text-lg leading-snug mb-2">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Specs chips */}
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {project.specs.map((spec, i) => (
                    <span key={i} className="text-[11px] bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Card Footer */}
            <div className="px-6 pb-6 pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-slate-400 flex items-center gap-1.5 text-xs">
                <Clock className="w-3.5 h-3.5 text-[#FF8A00]" />
                <span>{project.duration}</span>
              </span>

              <button
                onClick={() => onBookProjectLikeThis(project.title)}
                className="font-bold text-[#0052B4] hover:text-[#003682] text-xs sm:text-sm flex items-center gap-1 transition cursor-pointer"
              >
                <span>طلب نفس التصميم</span>
                <ArrowLeft className="w-3.5 h-3.5 rtl:rotate-0" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox / Detail Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="relative h-80 sm:h-96 bg-slate-950">
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
              <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs sm:text-sm px-3.5 py-1.5 rounded-xl backdrop-blur-md">
                {activeModalProject.location}
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <h3 className="font-bold text-lg sm:text-xl text-slate-900 mb-2">
                {activeModalProject.title}
              </h3>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                {activeModalProject.description}
              </p>

              <div className="bg-slate-50 p-4 rounded-2xl mb-6 border border-slate-100">
                <div className="text-xs font-bold text-slate-700 mb-2">المواصفات الفنية المعتمدة:</div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-600">
                  {activeModalProject.specs.map((spec, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#0052B4] shrink-0" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => {
                    const title = activeModalProject.title;
                    setActiveModalProject(null);
                    onBookProjectLikeThis(title);
                  }}
                  className="flex-1 py-3.5 bg-[#FF8A00] hover:bg-[#E57900] text-white font-bold text-sm rounded-xl transition cursor-pointer text-center"
                >
                  طلب معاينة وتطبيق هذا النموذج
                </button>
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="px-6 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm rounded-xl transition cursor-pointer"
                >
                  إغلاق
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
