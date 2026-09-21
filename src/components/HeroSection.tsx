import React from 'react';
import { ArrowUpRight, ChevronRight } from 'lucide-react';

interface HeroSectionProps {
  onExploreWork: () => void;
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreWork, onOpenResume }) => {
  return (
    <section id="home" className="pt-8 md:pt-14 pb-16 px-4 md:px-8 max-w-6xl mx-auto">
      {/* Top Location & Info */}
      <div className="flex items-center justify-end gap-4 mb-6">
        <div className="flex items-center gap-3 text-xs text-[#6c685f]">
          <span className="font-mono">Busan, South Korea</span>
          <span>·</span>
          <span className="font-mono">BUFS Software '24~</span>
        </div>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Big Editorial Typography & Dedicated Photo Slot */}
        <div className="lg:col-span-7 flex flex-col">
          {/* Big Typography */}
          <div>
            <h1 className="font-display font-black text-5xl sm:text-7xl xl:text-8xl tracking-tight text-[#141414] leading-[0.92] select-none">
              <span className="block">Jeongwon</span>
              <span className="block sm:ml-8 text-[#2c2b29]">
                Son
              </span>
            </h1>
            <div className="mt-3 text-xl sm:text-2xl font-display font-medium text-[#6c685f] tracking-wide">
              손정원 <span className="text-sm font-normal font-sans ml-2 text-[#8b877b]">| Software Major Student</span>
            </div>
          </div>

          {/* Photo Slot: 손정원 여권 파일.jpg */}
          <div className="mt-6 w-full max-w-sm">
            <div className="rounded-2xl overflow-hidden bg-white border border-[#1a1a1a]/15 shadow-sm p-2">
              <img 
                src="/손정원 여권 파일.jpg" 
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.dataset.tried) {
                    target.dataset.tried = "true";
                    target.src = "/profile.jpg";
                  }
                }}
                alt="손정원 (Jeongwon Son)" 
                className="w-full h-auto max-h-[380px] object-contain rounded-xl mx-auto block"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Introduction & CTA */}
        <div className="lg:col-span-5 flex flex-col justify-center pt-2 lg:pt-0">
          <div className="space-y-5">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#6c685f] block mb-2">
                // Software Major Student | AI & Web Development
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#141414] leading-snug">
                Hi, I'm an <span className="underline decoration-2 decoration-[#1c1c1c]/40 underline-offset-4">AI & Web Developer</span> building real-world services.
              </h2>
            </div>

            <p className="text-[#403e39] text-sm sm:text-base leading-relaxed">
              안녕하세요, <strong className="text-[#141414] font-semibold">손정원</strong>입니다.
              AI와 웹 기술에 깊은 관심을 가지고, 단순 이론에 그치지 않고 RAG, LangChain, LLM API, Streamlit, n8n을 결합하여 사용자의 실제 문제를 해결하는 유용한 웹 서비스를 직접 구현합니다.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onExploreWork}
                className="px-6 py-3 rounded-full bg-[#1c1c1c] text-[#eeeade] text-sm font-medium hover:bg-[#333] transition-all flex items-center gap-2 group shadow-sm"
              >
                <span>Explore my work</span>
                <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onOpenResume}
                className="px-5 py-3 rounded-full border border-[#1a1a1a]/30 hover:border-[#1a1a1a] text-sm font-medium text-[#1c1c1c] hover:bg-[#1a1a1a]/5 transition-all flex items-center gap-1.5"
              >
                <span>이력서 보기 (CV)</span>
                <ArrowUpRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Divider Line */}
      <div className="mt-14 pt-8 border-t border-[#1a1a1a]/15"></div>
    </section>
  );
};
