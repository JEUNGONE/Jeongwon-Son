import React, { useState, useRef, useEffect } from 'react';
import { ArrowUpRight, ChevronRight, Image as ImageIcon, Upload, RefreshCw, X } from 'lucide-react';
import { contactInfo } from '../data/portfolioData';

interface HeroSectionProps {
  onExploreWork: () => void;
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreWork, onOpenResume }) => {
  const [imageSrc, setImageSrc] = useState<string | null>(() => {
    return localStorage.getItem('user_profile_photo') || null;
  });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Check if a static file exists in /profile.jpg or /손정원 여권 파일.jpg
  useEffect(() => {
    if (!imageSrc) {
      const img1 = new Image();
      img1.src = '/profile.jpg';
      img1.onload = () => setImageSrc('/profile.jpg');
      img1.onerror = () => {
        const img2 = new Image();
        img2.src = '/손정원 여권 파일.jpg';
        img2.onload = () => setImageSrc('/손정원 여권 파일.jpg');
      };
    }
  }, [imageSrc]);

  const handleFile = (file: File) => {
    if (!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setImageSrc(reader.result);
        try {
          localStorage.setItem('user_profile_photo', reader.result);
        } catch {
          // Ignore localStorage quota errors
        }
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleRemoveImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImageSrc(null);
    localStorage.removeItem('user_profile_photo');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

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

          {/* Dedicated Photo Slot Container */}
          <div className="mt-6 w-full max-w-sm">
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleFileInputChange} 
              accept="image/*" 
              className="hidden" 
            />

            {imageSrc ? (
              /* Display loaded image with clean frame & controls */
              <div className="relative group rounded-2xl overflow-hidden bg-white border border-[#1a1a1a]/15 shadow-sm p-2">
                <img 
                  src={imageSrc} 
                  alt="손정원 프로필 사진" 
                  className="w-full h-auto max-h-[380px] object-contain rounded-xl mx-auto block"
                />
                
                {/* Overlay actions on hover */}
                <div className="absolute top-4 right-4 flex items-center gap-2 opacity-90 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="px-2.5 py-1.5 rounded-lg bg-black/70 hover:bg-black text-white text-xs font-medium backdrop-blur-xs flex items-center gap-1.5 transition-colors shadow-xs"
                    title="다른 사진으로 변경"
                  >
                    <RefreshCw size={12} />
                    <span>사진 변경</span>
                  </button>
                  <button
                    onClick={handleRemoveImage}
                    className="p-1.5 rounded-lg bg-red-600/80 hover:bg-red-600 text-white transition-colors shadow-xs"
                    title="사진 지우기"
                  >
                    <X size={14} />
                  </button>
                </div>
              </div>
            ) : (
              /* Empty Placeholder Slot with click & drag-and-drop */
              <div
                onClick={() => fileInputRef.current?.click()}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                className={`relative cursor-pointer rounded-2xl border-2 border-dashed p-6 sm:p-8 flex flex-col items-center justify-center text-center transition-all duration-200 ${
                  isDragging
                    ? 'border-[#1c1c1c] bg-[#ded8c7]/50 scale-[1.01]'
                    : 'border-[#1a1a1a]/25 hover:border-[#1a1a1a]/60 bg-[#e6e1d3]/40 hover:bg-[#e6e1d3]/70'
                }`}
                style={{ minHeight: '260px' }}
              >
                <div className="w-12 h-12 rounded-full bg-[#1a1a1a]/10 flex items-center justify-center text-[#1c1c1c] mb-3">
                  <ImageIcon size={24} />
                </div>

                <div className="text-sm font-bold text-[#141414] font-display">
                  프로필 사진 영역
                </div>

                <p className="text-xs text-[#6c685f] mt-1.5 max-w-[220px] leading-relaxed">
                  클릭하거나 이미지를 여기로 드래그하여 바로 등록할 수 있습니다.
                </p>

                <div className="mt-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#eeeade] border border-[#1a1a1a]/15 text-[11px] font-mono text-[#4a473e]">
                  <Upload size={12} />
                  <span>JPG / PNG 파일 지원</span>
                </div>
              </div>
            )}
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
