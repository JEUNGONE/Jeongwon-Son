import React from 'react';

export const MarqueeTicker: React.FC = () => {
  const items = [
    'AI & Web Development',
    'LangChain & RAG',
    'Prompt Engineering',
    'Streamlit & n8n',
    'Python Ecosystem',
    'Cursor AI Tooling',
    'Software Major Student',
    'Fast Prototyping',
  ];

  return (
    <div className="w-full bg-[#161616] text-[#eeeade] py-4 overflow-hidden select-none border-y border-black/30 my-8">
      <div className="flex whitespace-nowrap animate-marquee">
        {/* Render twice for continuous loop */}
        {[...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center mx-4 sm:mx-6">
            <span className="font-display font-bold text-sm sm:text-base tracking-wide uppercase text-white/90">
              {item}
            </span>
            <span className="mx-6 w-8 h-[2px] bg-white/25"></span>
          </div>
        ))}
      </div>
    </div>
  );
};
