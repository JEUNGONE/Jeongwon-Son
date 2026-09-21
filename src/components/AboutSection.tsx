import React, { useState } from 'react';
import { User, MapPin, Mail, Phone, GraduationCap, Check, Copy } from 'lucide-react';
import { contactInfo, specializations } from '../data/portfolioData';

interface AboutSectionProps {
  onContactClick?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="about" className="py-12 px-4 md:px-8 max-w-6xl mx-auto">
      {/* Section Title matching Biography in reference image */}
      <div className="mb-8">
        <h2 className="font-display font-black text-4xl sm:text-5xl text-[#141414] tracking-tight">
          Biography
        </h2>
      </div>

      {/* Speech bubble badge "Hello there!!" */}
      <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#1c1c1c] text-[#eeeade] text-xs font-semibold tracking-wide uppercase mb-6 shadow-xs">
        <span>Hello there!!</span>
      </div>

      {/* Biography Lead Text */}
      <div className="max-w-3xl mb-12">
        <p className="text-base sm:text-lg text-[#33302a] leading-relaxed">
          안녕하세요, <u className="decoration-[#1c1c1c]/40 underline-offset-4 font-semibold text-[#141414]">손정원 (Jeongwon Son)</u>입니다.{' '}
          AI와 웹 기술에 깊은 관심을 가지고 <u className="decoration-[#1c1c1c]/40 underline-offset-4 font-medium text-[#141414]">소프트웨어를 전공</u>하며 
          다양한 AI 기반 웹 서비스를 주도적으로 기획하고 개발하고 있습니다.{' '}
          <span className="font-semibold text-[#141414]">Python</span>을 기반으로 <u className="decoration-[#1c1c1c]/40 underline-offset-4 font-medium text-[#141414]">RAG, LangChain, LLM API, Streamlit, n8n</u> 등을 활용하여 
          문서 검색, 도서 추천, 여행정보 검색과 같은 실제 활용 가능한 서비스를 구현해왔습니다.
        </p>
        <p className="text-base sm:text-lg text-[#33302a] leading-relaxed mt-4">
          새로운 기술을 학습하고 이를 직접 프로젝트에 적용하는 전 과정을 즐기며, 기술을 도구 삼아 사용자의 불편과 문제를 명쾌하게 해결할 수 있는 신뢰받는 개발자로 성장하고 있습니다.
        </p>
      </div>

      {/* Two-Column Grid matching reference layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Personal info */}
        <div className="lg:col-span-7">
          <h3 className="text-sm font-mono uppercase tracking-widest text-[#6c685f] mb-4 font-bold">
            // Personal info
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#e6e1d3]/60 p-5 rounded-2xl border border-[#1a1a1a]/10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#1c1c1c]/10 flex items-center justify-center text-[#1c1c1c]">
                <User size={15} />
              </div>
              <div>
                <div className="text-[11px] text-[#6c685f] uppercase tracking-wider">Name</div>
                <div className="text-sm font-semibold text-[#141414]">{contactInfo.name} ({contactInfo.englishName})</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#1c1c1c]/10 flex items-center justify-center text-[#1c1c1c]">
                <GraduationCap size={15} />
              </div>
              <div>
                <div className="text-[11px] text-[#6c685f] uppercase tracking-wider">Education</div>
                <div className="text-sm font-semibold text-[#141414]">부산외국어대학교 (2024~현재)</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#1c1c1c]/10 flex items-center justify-center text-[#1c1c1c]">
                <MapPin size={15} />
              </div>
              <div>
                <div className="text-[11px] text-[#6c685f] uppercase tracking-wider">Location</div>
                <div className="text-sm font-semibold text-[#141414]">부산, 대한민국</div>
              </div>
            </div>

            <div className="flex items-center justify-between group">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#1c1c1c]/10 flex items-center justify-center text-[#1c1c1c]">
                  <Mail size={15} />
                </div>
                <div>
                  <div className="text-[11px] text-[#6c685f] uppercase tracking-wider">Email</div>
                  <a href={`mailto:${contactInfo.email}`} className="text-sm font-semibold text-[#141414] hover:underline truncate max-w-[170px] block">
                    {contactInfo.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(contactInfo.email, 'email')}
                className="p-1.5 rounded-lg text-[#6c685f] hover:text-[#1c1c1c] hover:bg-[#1a1a1a]/10 transition-colors"
                title="이메일 복사"
              >
                {copiedField === 'email' ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
              </button>
            </div>

            <div className="flex items-center justify-between group sm:col-span-2">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#1c1c1c]/10 flex items-center justify-center text-[#1c1c1c]">
                  <Phone size={15} />
                </div>
                <div>
                  <div className="text-[11px] text-[#6c685f] uppercase tracking-wider">Phone</div>
                  <a href={`tel:${contactInfo.phone.replace(/[^0-9+]/g, '')}`} className="text-sm font-semibold text-[#141414] hover:underline">
                    {contactInfo.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(contactInfo.phone, 'phone')}
                className="p-1.5 rounded-lg text-[#6c685f] hover:text-[#1c1c1c] hover:bg-[#1a1a1a]/10 transition-colors"
                title="전화번호 복사"
              >
                {copiedField === 'phone' ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Specializations & Motto */}
        <div className="lg:col-span-5 space-y-4">
          <h3 className="text-sm font-mono uppercase tracking-widest text-[#6c685f] mb-4 font-bold">
            // My specializations
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {specializations.map((spec, idx) => (
              <div 
                key={idx}
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#1a1a1a]/20 bg-[#eeeade] text-xs sm:text-sm font-medium text-[#1c1c1c] shadow-2xs select-none"
              >
                <span>{spec.title}</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#1c1c1c]/10 text-[#141414]">
                  {spec.projectCount} Projects
                </span>
              </div>
            ))}
          </div>

          <div className="bg-[#eeeade] rounded-2xl p-4 border border-[#1a1a1a]/15 mt-4">
            <div className="text-[11px] font-mono text-[#6c685f] uppercase tracking-wider mb-1">Philosophy</div>
            <p className="text-xs sm:text-sm font-medium text-[#141414] leading-relaxed">
              "새로운 기술을 학습하고 이를 직접 프로젝트에 적용하며, 기술을 도구 삼아 사용자의 문제를 해결하는 개발자"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
