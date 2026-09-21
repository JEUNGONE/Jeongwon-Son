import React from 'react';
import { Download, FileText } from 'lucide-react';

interface DownloadCVBarProps {
  onOpenResume: () => void;
}

export const DownloadCVBar: React.FC<DownloadCVBarProps> = ({ onOpenResume }) => {
  return (
    <div 
      onClick={onOpenResume}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onOpenResume();
        }
      }}
      className="hidden lg:flex fixed right-0 top-0 bottom-0 w-[64px] z-40 bg-[#161616] text-[#eeeade] flex-col justify-between items-center py-8 cursor-pointer hover:bg-[#252525] transition-colors border-l border-black/40 group shadow-lg"
      title="이력서 확인 및 다운로드 (Click to view & download CV)"
    >
      {/* Top micro icon */}
      <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white/10 group-hover:bg-white/20 transition-colors">
        <FileText size={15} className="text-white/80" />
      </div>

      {/* Vertical text matching reference design */}
      <div className="flex-1 flex items-center justify-center">
        <div className="tracking-[0.45em] font-extrabold text-[15px] uppercase font-display select-none transition-transform group-hover:scale-105 flex flex-col items-center gap-1.5 text-white/90">
          <span>D</span>
          <span>O</span>
          <span>W</span>
          <span>N</span>
          <span>L</span>
          <span>O</span>
          <span>A</span>
          <span>D</span>
          <span className="my-2 h-4 w-[2px] bg-white/30"></span>
          <span>C</span>
          <span>V</span>
        </div>
      </div>

      {/* Bottom Download Icon */}
      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/15 group-hover:bg-white/30 transition-all group-hover:translate-y-1">
        <Download size={18} className="text-white" />
      </div>
    </div>
  );
};
