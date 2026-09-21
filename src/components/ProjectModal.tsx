import React from 'react';
import { X, CheckCircle, Sparkles, Code, Calendar } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-[#eeeade] rounded-3xl border border-[#1a1a1a]/20 shadow-2xl p-6 sm:p-8 my-8 max-h-[90vh] overflow-y-auto text-[#1c1c1c]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-[#1c1c1c]/10 hover:bg-[#1c1c1c] hover:text-[#eeeade] flex items-center justify-center transition-colors"
          aria-label="닫기"
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pr-10">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="font-display font-black text-xs px-2.5 py-0.5 rounded-md bg-[#1c1c1c] text-[#eeeade]">
              Project {project.number}
            </span>
            <span className="text-xs font-mono px-2.5 py-0.5 rounded-md bg-[#1c1c1c]/10 text-[#403e39]">
              {project.bootcampLevel}
            </span>
            <span className="text-xs font-mono text-[#6c685f] flex items-center gap-1">
              <Calendar size={12} /> {project.date}
            </span>
          </div>

          <h3 className="font-display font-black text-2xl sm:text-3xl text-[#141414] leading-tight">
            {project.title}
          </h3>
          <p className="text-sm font-medium text-[#555146] mt-1">
            {project.subtitle}
          </p>
        </div>

        {/* Overview Description */}
        <div className="p-4 rounded-2xl bg-[#e6e1d3]/60 border border-[#1a1a1a]/10 mb-6 text-sm text-[#33302a] leading-relaxed">
          {project.description}
        </div>

        {/* Key Metrics / Highlights */}
        {project.metrics && (
          <div className="grid grid-cols-3 gap-3 mb-6">
            {project.metrics.map((m, i) => (
              <div key={i} className="p-3 rounded-xl bg-[#ded8c7] border border-[#1a1a1a]/10 text-center">
                <div className="text-[11px] font-mono text-[#6c685f] uppercase">{m.label}</div>
                <div className="font-display font-bold text-base sm:text-lg text-[#141414] mt-0.5">{m.value}</div>
              </div>
            ))}
          </div>
        )}

        {/* Two Columns: Features & Implementations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Key Features */}
          <div className="p-5 rounded-2xl bg-[#f4f1e8] border border-[#1a1a1a]/10">
            <h4 className="font-display font-bold text-base text-[#141414] mb-3 flex items-center gap-2">
              <Sparkles size={16} className="text-[#1c1c1c]" />
              <span>주요 기능 (Key Features)</span>
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#3a3832]">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1c1c1c] mt-2 shrink-0"></span>
                  <span className="leading-snug">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Implementations */}
          <div className="p-5 rounded-2xl bg-[#f4f1e8] border border-[#1a1a1a]/10">
            <h4 className="font-display font-bold text-base text-[#141414] mb-3 flex items-center gap-2">
              <Code size={16} className="text-[#1c1c1c]" />
              <span>주요 구현 (Implementation)</span>
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#3a3832]">
              {project.implementations.map((impl, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-emerald-700 mt-0.5 shrink-0" />
                  <span className="leading-snug">{impl}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div className="mb-6">
          <div className="text-xs font-mono uppercase tracking-wider text-[#6c685f] mb-2 font-bold">
            // Tech Stack & Architecture Tools
          </div>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, idx) => (
              <span 
                key={idx}
                className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#1c1c1c] text-[#eeeade]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-[#1a1a1a]/15">
          <div className="text-xs text-[#6c685f]">
            Developed with Python, Streamlit & AI Technologies
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-full bg-[#1c1c1c] text-[#eeeade] text-xs font-semibold hover:bg-[#333] transition-colors"
          >
            창 닫기
          </button>
        </div>
      </div>
    </div>
  );
};
