import React, { useState } from 'react';
import { 
  BrainCircuit, Database, Sparkles, Cpu, Bot, Code2, 
  Layout, Workflow, Terminal, CheckCircle
} from 'lucide-react';
import { skillItems } from '../data/portfolioData';
import { SkillItem } from '../types';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Advantages' },
    { id: 'agentic', label: 'Agentic & RAG' },
    { id: 'llm', label: 'LLM Models' },
    { id: 'tools', label: 'Tools (Cursor)' },
    { id: 'web', label: 'Web & Automation' },
    { id: 'languages', label: 'Languages' },
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'BrainCircuit': return <BrainCircuit className="w-6 h-6" />;
      case 'Database': return <Database className="w-6 h-6" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6" />;
      case 'Cpu': return <Cpu className="w-6 h-6" />;
      case 'Bot': return <Bot className="w-6 h-6" />;
      case 'Code2': return <Code2 className="w-6 h-6" />;
      case 'Layout': return <Layout className="w-6 h-6" />;
      case 'Workflow': return <Workflow className="w-6 h-6" />;
      case 'Terminal': return <Terminal className="w-6 h-6" />;
      default: return <Sparkles className="w-6 h-6" />;
    }
  };

  const filteredSkills = selectedCategory === 'all' 
    ? skillItems 
    : skillItems.filter(s => s.category === selectedCategory);

  return (
    <section id="skills" className="py-14 px-4 md:px-8 max-w-6xl mx-auto border-t border-[#1a1a1a]/15">
      {/* Section Header matching "My advantages" in reference image */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h2 className="font-display font-black text-4xl sm:text-5xl text-[#141414] tracking-tight">
          My advantages
        </h2>
        <p className="text-sm font-mono text-[#6c685f] mt-2">
          // Technical Skills, Frameworks & Tooling Stack
        </p>
        
        {/* Category filter pills */}
        <div className="flex flex-wrap justify-center gap-2 mt-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#1c1c1c] text-[#eeeade] shadow-xs'
                  : 'bg-[#e6e1d3]/60 text-[#403e39] hover:bg-[#1a1a1a]/10 border border-[#1a1a1a]/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Circular Competence Gauge Cards matching the reference image layout */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 justify-items-center mb-12">
        {filteredSkills.map((skill, idx) => (
          <div 
            key={idx} 
            className="flex flex-col items-center select-none w-full max-w-[140px]"
          >
            {/* Circular badge with border matching the image */}
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full border-2 border-[#1a1a1a]/30 bg-[#eeeade] flex flex-col items-center justify-center p-2">
              
              {/* Subtle circular progress ring background */}
              <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 100 100">
                <circle 
                  cx="50" cy="50" r="46" 
                  fill="none" 
                  stroke="rgba(26,26,26,0.08)" 
                  strokeWidth="3" 
                />
                <circle 
                  cx="50" cy="50" r="46" 
                  fill="none" 
                  stroke="#1c1c1c" 
                  strokeWidth="3" 
                  strokeDasharray="289"
                  strokeDashoffset={289 - (289 * skill.percentage) / 100}
                  strokeLinecap="round"
                />
              </svg>

              {/* Icon */}
              <div className="text-[#1c1c1c] mb-1">
                {getIcon(skill.iconName)}
              </div>

              {/* Percentage matching 92%, 62%, etc. in reference image */}
              <span className="font-display font-black text-lg sm:text-xl text-[#141414] tracking-tight">
                {skill.percentage}%
              </span>
            </div>

            {/* Label below circle matching Figma, Webflow, etc. in reference */}
            <div className="text-center mt-3">
              <div className="font-display font-bold text-xs sm:text-sm text-[#141414] leading-tight">
                {skill.name}
              </div>
              <div className="text-[10px] font-mono text-[#6c685f] mt-0.5">
                {skill.categoryLabel}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Detailed Technical Skills Structured Accordion / Grid based on User Prompt */}
      <div className="bg-[#e6e1d3]/40 rounded-3xl p-6 sm:p-8 border border-[#1a1a1a]/10">
        <h3 className="text-sm font-mono uppercase tracking-widest text-[#6c685f] mb-6 font-bold flex items-center gap-2">
          <Sparkles size={16} />
          <span>Core Competence Directory</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Group 1: Agentic & Gen AI Systems */}
          <div className="p-4 rounded-2xl bg-[#eeeade] border border-[#1a1a1a]/10">
            <h4 className="font-display font-bold text-base text-[#141414] mb-2 flex items-center justify-between">
              <span>Agentic & Gen AI</span>
              <span className="text-[11px] font-mono text-[#6c685f]">Core Domain</span>
            </h4>
            <ul className="space-y-2 text-xs text-[#33302a]">
              <li className="flex items-start gap-2">
                <CheckCircle size={13} className="text-emerald-700 mt-0.5 shrink-0" />
                <span><strong>LangChain:</strong> RAG 파이프라인, 체인 구성, 프롬프트 템플릿 관리</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={13} className="text-emerald-700 mt-0.5 shrink-0" />
                <span><strong>RAG (검색 증강 생성):</strong> FAISS 벡터DB 검색, 문서 청킹 및 임베딩</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={13} className="text-emerald-700 mt-0.5 shrink-0" />
                <span><strong>Prompt Engineering:</strong> Few-shot, 구조화 출력(JSON), 도메인 맞춤 페르소나</span>
              </li>
            </ul>
          </div>

          {/* Group 2: LLM Models & Tools */}
          <div className="p-4 rounded-2xl bg-[#eeeade] border border-[#1a1a1a]/10">
            <h4 className="font-display font-bold text-base text-[#141414] mb-2 flex items-center justify-between">
              <span>LLMs & Dev Tools</span>
              <span className="text-[11px] font-mono text-[#6c685f]">Models & IDE</span>
            </h4>
            <ul className="space-y-2 text-xs text-[#33302a]">
              <li className="flex items-start gap-2">
                <CheckCircle size={13} className="text-emerald-700 mt-0.5 shrink-0" />
                <span><strong>Anthropic Claude:</strong> Claude 3.5 Sonnet 활용 정밀 텍스트 분석 및 추천</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={13} className="text-emerald-700 mt-0.5 shrink-0" />
                <span><strong>Google Gemini:</strong> Gemini API 연동, 고속 추론 및 다양한 태스크 활용</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={13} className="text-emerald-700 mt-0.5 shrink-0" />
                <span><strong>Cursor:</strong> AI 페어 프로그래밍을 통한 고속 웹 애플리케이션 개발</span>
              </li>
            </ul>
          </div>

          {/* Group 3: Web & Automation & Languages */}
          <div className="p-4 rounded-2xl bg-[#eeeade] border border-[#1a1a1a]/10 md:col-span-2 lg:col-span-1">
            <h4 className="font-display font-bold text-base text-[#141414] mb-2 flex items-center justify-between">
              <span>Web, Automation & Python</span>
              <span className="text-[11px] font-mono text-[#6c685f]">Production</span>
            </h4>
            <ul className="space-y-2 text-xs text-[#33302a]">
              <li className="flex items-start gap-2">
                <CheckCircle size={13} className="text-emerald-700 mt-0.5 shrink-0" />
                <span><strong>Streamlit:</strong> 인터랙티브 AI 웹 서비스 UI 설계 및 실시간 배포</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={13} className="text-emerald-700 mt-0.5 shrink-0" />
                <span><strong>n8n:</strong> 다중 API 오케스트레이션 및 이메일 자동 발송 워크플로우</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={13} className="text-emerald-700 mt-0.5 shrink-0" />
                <span><strong>Python:</strong> 데이터 전처리 파이프라인, API 연동, 서비스 백엔드 로직</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
