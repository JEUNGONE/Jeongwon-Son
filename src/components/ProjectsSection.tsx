import React, { useState } from 'react';
import { Sparkles, ArrowRight, ExternalLink, Code2, Database, MapPin, BookOpen, Layers } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  return (
    <section id="work" className="py-14 px-4 md:px-8 max-w-6xl mx-auto border-t border-[#1a1a1a]/15">
      {/* 1. Work Experience Section matching reference image */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
        {/* Left Column: Title, Description and Big Stats */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-[#141414] tracking-tight leading-tight">
              Work<br className="hidden sm:inline" /> experience
            </h2>
            <p className="text-sm text-[#555146] mt-4 leading-relaxed max-w-md">
              AI 부트캠프 초급부터 고급까지 단계별로 RAG, LangChain, n8n, Streamlit을 활용하여 기획부터 데이터 파이프라인, 프론트엔드 배포까지 전 과정을 직접 구현했습니다.
            </p>
          </div>

          {/* Big numbers matching "04 Companies Worked, 60+ Total Projects" in reference */}
          <div className="grid grid-cols-2 gap-6 pt-4 border-t border-[#1a1a1a]/15">
            <div>
              <div className="font-display font-black text-4xl sm:text-5xl text-[#141414]">03</div>
              <div className="text-xs font-mono text-[#6c685f] mt-1">Bootcamp Projects</div>
            </div>
            <div>
              <div className="font-display font-black text-4xl sm:text-5xl text-[#141414]">100%</div>
              <div className="text-xs font-mono text-[#6c685f] mt-1">Hands-on Implementation</div>
            </div>
          </div>
        </div>

        {/* Right Column: Featured Dark Card matching reference layout */}
        <div className="lg:col-span-7">
          <div className="rounded-3xl bg-[#1c1c1c] text-[#eeeade] p-6 sm:p-8 shadow-xl relative overflow-hidden group">
            {/* Top row */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-white/50">// Featured Project</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              </div>
              <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-white/10 text-white/80 border border-white/15">
                AI Bootcamp Advanced
              </span>
            </div>

            {/* Title & Role */}
            <div className="mb-4">
              <span className="text-xs font-mono text-white/60">02. AI 기반 도서 추천 웹 서비스</span>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-white mt-1">
                AI Book Recommendation System
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-6">
              독후감에서 핵심 주제와 감성을 추출하여 맞춤 도서를 추천하고, 도서마루 및 카카오 맵 API를 연계해 인근 도서관의 실시간 소장 여부와 위치를 원스톱으로 제공합니다.
            </p>

            {/* Key Bullet Points */}
            <div className="space-y-2 text-xs text-white/85 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white/40"></span>
                <span>OpenAI API & 도서마루 API 유기적 연동 및 데이터 수집</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white/40"></span>
                <span>Kakao Map을 활용한 주변 도서관 위치 및 소장 여부 시각화</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white/40"></span>
                <span>Cursor를 활용한 Streamlit 웹 서비스 고속 개발 및 프로덕션 배포</span>
              </div>
            </div>

            {/* Date & CTA button */}
            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <span className="text-xs font-mono text-white/50">Sep. 2026 · AI 부트캠프 고급</span>
              <button
                onClick={() => onSelectProject(projectsData[1])}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-[#1c1c1c] text-xs font-bold hover:bg-white/90 transition-colors"
              >
                <span>상세 아키텍처 보기</span>
                <ArrowRight size={13} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Reflections on my work: Project Grid matching reference visual design */}
      <div className="mt-12">
        <div className="text-center mb-10">
          <h3 className="font-display font-black text-3xl sm:text-4xl text-[#141414] tracking-tight">
            Reflections on my work
          </h3>
          <p className="text-xs sm:text-sm font-mono text-[#6c685f] mt-1">
            // End-to-End AI Web Application Portfolio
          </p>
        </div>

        {/* 3 Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {projectsData.map((project) => (
            <div 
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer flex flex-col justify-between rounded-3xl bg-[#e6e1d3]/40 border border-[#1a1a1a]/15 p-5 sm:p-6 transition-all duration-300 hover:border-[#1a1a1a] hover:-translate-y-1.5 hover:shadow-lg hover:bg-[#e6e1d3]/80"
            >
              <div>
                {/* Visual Thumbnail Card Area matching the reference photo squares */}
                <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-[#242424] mb-5 border border-[#1a1a1a]/10 flex flex-col justify-between p-4 text-white shadow-xs group-hover:scale-[1.01] transition-transform">
                  
                  {/* Subtle decorative background graphic */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2a2825] via-[#1c1c1c] to-[#121212] opacity-90"></div>
                  
                  {/* Category Pill matching "Visual design", "Web development" in reference */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider bg-white/15 text-white backdrop-blur-xs border border-white/20">
                      {project.category}
                    </span>
                    <span className="text-xs font-mono text-white/60">
                      #{project.number}
                    </span>
                  </div>

                  {/* Thumbnail center visual */}
                  <div className="relative z-10 my-auto text-center p-2">
                    {project.id === 'cnn-news-vocabulary-ai' ? (
                      <div className="space-y-1">
                        <div className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-white">
                          CNN News Vocab AI
                        </div>
                        <div className="text-[11px] font-mono text-emerald-400">
                          RAG · LangChain · FAISS
                        </div>
                      </div>
                    ) : project.id === 'ai-book-recommendation' ? (
                      <div className="space-y-1">
                        <div className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-white">
                          AI Book Recommendation
                        </div>
                        <div className="text-[11px] font-mono text-amber-300">
                          독후감 추출 · 도서마루 · Kakao Map
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-1">
                        <div className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-white">
                          Busan Travel System
                        </div>
                        <div className="text-[11px] font-mono text-sky-300">
                          n8n Automation · TourAPI · Places
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Bottom date badge inside thumbnail */}
                  <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-white/50 border-t border-white/10 pt-2">
                    <span>{project.bootcampLevel}</span>
                    <span>{project.date}</span>
                  </div>
                </div>

                {/* Project Title matching bold font below images in reference */}
                <h4 className="font-display font-black text-xl text-[#141414] leading-snug group-hover:text-[#2d2a24] transition-colors">
                  {project.title}
                </h4>

                <p className="text-xs text-[#555146] mt-2 line-clamp-2 leading-relaxed">
                  {project.subtitle}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {project.techStack.slice(0, 3).map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-[#1c1c1c]/10 text-[#33302a]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="px-1.5 py-0.5 rounded-md text-[10px] font-mono bg-[#1c1c1c]/5 text-[#6c685f]">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom Action */}
              <div className="mt-6 pt-4 border-t border-[#1a1a1a]/10 flex items-center justify-between text-xs font-semibold text-[#1c1c1c]">
                <span className="group-hover:underline">상세 아키텍처 및 구현 내용</span>
                <div className="w-7 h-7 rounded-full bg-[#1c1c1c] text-[#eeeade] flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight size={13} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
