import React from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, GraduationCap, Code2, ExternalLink } from 'lucide-react';
import { contactInfo, educationData, projectsData, skillItems } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm overflow-y-auto no-print">
      <div className="relative w-full max-w-4xl bg-white text-[#111] rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        
        {/* Top Control Bar (Hidden on print) */}
        <div className="flex items-center justify-between px-6 py-3.5 bg-[#f4f2ea] border-b border-[#1a1a1a]/15 shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            <span className="font-display font-bold text-sm text-[#141414]">
              손정원 이력서 / Curriculum Vitae (CV)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-lg bg-[#1c1c1c] text-[#eeeade] text-xs font-medium hover:bg-[#333] transition-colors flex items-center gap-1.5"
              title="이력서 인쇄 또는 PDF 저장"
            >
              <Printer size={14} />
              <span>Print / PDF 다운로드</span>
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg hover:bg-[#1a1a1a]/10 flex items-center justify-center text-[#1c1c1c] transition-colors"
              aria-label="닫기"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Canvas */}
        <div id="printable-resume" className="p-8 sm:p-12 overflow-y-auto font-sans leading-relaxed text-[#222]">
          
          {/* Header */}
          <div className="border-b-2 border-[#1c1c1c] pb-6 mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-black font-display text-[#111] tracking-tight">
                    손정원 <span className="text-lg sm:text-xl font-normal text-[#555]">(Jeongwon Son)</span>
                  </h1>
                  <p className="text-sm font-semibold text-[#333] mt-1">
                    Software Major Student | AI & Web Development
                  </p>
                </div>
              </div>

              <div className="text-xs text-[#555] space-y-1 sm:text-right shrink-0">
                <div>✉️ {contactInfo.email}</div>
                <div>📞 {contactInfo.phone}</div>
                <div>📍 {contactInfo.location}</div>
              </div>
            </div>
          </div>

          {/* About Me / Profile Summary */}
          <div className="mb-6">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#666] mb-2 border-b border-gray-200 pb-1">
              ABOUT ME
            </h2>
            <p className="text-sm text-[#333] leading-relaxed">
              AI와 웹 기술에 관심을 가지고 소프트웨어를 전공하며 다양한 AI 기반 웹 서비스를 개발하고 있습니다. Python을 기반으로 RAG, LangChain, LLM API, Streamlit, n8n 등을 활용하여 문서 검색, 도서 추천, 여행정보 검색과 같은 실제 활용 가능한 서비스를 구현해왔습니다. 새로운 기술을 배우고 이를 직접 프로젝트에 적용하는 과정을 즐기며, 기술을 활용해 사용자의 문제를 해결할 수 있는 서비스를 만드는 개발자로 성장하고 있습니다.
            </p>
          </div>

          {/* Education */}
          <div className="mb-6">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#666] mb-2 border-b border-gray-200 pb-1">
              EDUCATION
            </h2>
            <div className="flex justify-between items-baseline">
              <div>
                <h3 className="text-base font-bold text-[#111]">부산외국어대학교 (BUFS)</h3>
                <p className="text-sm text-[#444]">소프트웨어전공 (재학)</p>
              </div>
              <span className="text-xs font-mono text-[#666]">2024 – 현재</span>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="mb-6">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#666] mb-2 border-b border-gray-200 pb-1">
              TECHNICAL SKILLS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 text-xs">
              <div>
                <strong className="text-[#111]">Agentic & Gen AI Systems:</strong>
                <span className="text-[#444] ml-1.5">LangChain, RAG, Prompt Engineering, FAISS</span>
              </div>
              <div>
                <strong className="text-[#111]">LLM Models & Frameworks:</strong>
                <span className="text-[#444] ml-1.5">Anthropic Claude, Google Gemini, OpenAI API</span>
              </div>
              <div>
                <strong className="text-[#111]">Development Tools:</strong>
                <span className="text-[#444] ml-1.5">Cursor (AI-driven Dev)</span>
              </div>
              <div>
                <strong className="text-[#111]">Web & Automation:</strong>
                <span className="text-[#444] ml-1.5">Streamlit, n8n Workflow Automation</span>
              </div>
              <div className="sm:col-span-2">
                <strong className="text-[#111]">Programming Languages:</strong>
                <span className="text-[#444] ml-1.5">Python (Data pipeline, Preprocessing, Back-end logic)</span>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="mb-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#666] mb-3 border-b border-gray-200 pb-1">
              KEY PROJECTS
            </h2>
            <div className="space-y-5">
              {projectsData.map((project) => (
                <div key={project.id} className="text-xs space-y-1.5">
                  <div className="flex justify-between items-baseline">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm text-[#111]">{project.number}. {project.title}</span>
                      <span className="text-[11px] font-mono text-[#555]">({project.subtitle})</span>
                    </div>
                    <span className="font-mono text-[11px] text-[#666] shrink-0 ml-2">
                      {project.bootcampLevel} · {project.date}
                    </span>
                  </div>

                  <p className="text-[#444]">{project.description}</p>

                  <div className="pt-1">
                    <span className="font-bold text-[#222]">주요 구현 및 성과:</span>
                    <ul className="list-disc list-inside mt-0.5 space-y-0.5 text-[#444]">
                      {project.implementations.map((impl, i) => (
                        <li key={i}>{impl}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-0.5 text-[#555]">
                    <span className="font-semibold text-[#333]">Tech Stack:</span> {project.techStack.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
