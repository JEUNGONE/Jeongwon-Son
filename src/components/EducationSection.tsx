import React from 'react';
import { GraduationCap, BookOpen, Award, CheckCircle2 } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-12 px-4 md:px-8 max-w-6xl mx-auto border-t border-[#1a1a1a]/15">
      {/* Section Header */}
      <div className="mb-10">
        <h2 className="font-display font-black text-4xl sm:text-5xl text-[#141414] tracking-tight">
          Education
        </h2>
        <p className="text-sm font-mono text-[#6c685f] mt-1">
          // Academic Background & Continuous Growth
        </p>
      </div>

      {/* Timeline Layout matching Education in Reference Image */}
      <div className="space-y-8">
        {educationData.map((edu, idx) => (
          <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            {/* Left Column: University Name & Period */}
            <div className="md:col-span-4 flex flex-col md:text-right pr-0 md:pr-4">
              <h3 className="font-display font-bold text-xl sm:text-2xl text-[#141414]">
                부산외국어대학교
              </h3>
              <p className="text-xs font-mono text-[#6c685f] mt-1">
                Busan University of Foreign Studies
              </p>
              <div className="mt-2 inline-block md:ml-auto">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#1c1c1c]/10 text-[#141414] border border-[#1a1a1a]/10">
                  {edu.period}
                </span>
              </div>
            </div>

            {/* Center: Vertical Line with Pin Marker */}
            <div className="hidden md:flex md:col-span-1 justify-center relative self-stretch">
              <div className="w-[1.5px] bg-[#1a1a1a]/25 absolute top-2 bottom-0 left-1/2 -translate-x-1/2"></div>
              <div className="w-4 h-4 rounded-full bg-[#1c1c1c] border-4 border-[#eeeade] z-10 shadow-xs mt-2"></div>
            </div>

            {/* Right Column: Major, Degree & Detailed Highlights */}
            <div className="md:col-span-7 bg-[#e6e1d3]/40 p-6 rounded-2xl border border-[#1a1a1a]/10 space-y-4">
              <div>
                <div className="flex items-center gap-2">
                  <GraduationCap size={18} className="text-[#1c1c1c]" />
                  <h4 className="font-display font-bold text-lg sm:text-xl text-[#141414]">
                    {edu.degree}
                  </h4>
                </div>
                <p className="text-sm text-[#403e39] mt-2 leading-relaxed">
                  {edu.description}
                </p>
              </div>

              {/* Highlights & Key Activities */}
              <div className="pt-2 border-t border-[#1a1a1a]/10">
                <div className="text-xs font-mono uppercase tracking-wider text-[#6c685f] mb-2 font-semibold">
                  Key Focus & Achievements
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#33302a]">
                  {edu.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 size={15} className="text-emerald-700 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bootcamp summary pill */}
              <div className="pt-2 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#1c1c1c] text-[#eeeade]">
                  <Award size={13} />
                  <span>AI 부트캠프 초급 · 중급 · 고급 프로젝트 완료</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
