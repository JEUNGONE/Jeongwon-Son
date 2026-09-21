import React, { useState } from 'react';
import { Home, User, GraduationCap, Sparkles, Briefcase, Mail, Menu, X, FileDown } from 'lucide-react';
import { contactInfo } from '../data/portfolioData';

interface MobileNavProps {
  activeSection: string;
  onOpenResume: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ activeSection, onOpenResume }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'skills', label: 'Skills', icon: Sparkles },
    { id: 'work', label: 'Work', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Top Header */}
      <header className="md:hidden sticky top-0 z-50 bg-[#eeeade]/95 backdrop-blur-md border-b border-[#1a1a1a]/15 px-4 py-3 flex items-center justify-between">
        <a 
          href="#home" 
          onClick={(e) => { e.preventDefault(); scrollTo('home'); }}
          className="flex items-center gap-2"
        >
          <div className="w-8 h-8 rounded-lg bg-[#1c1c1c] text-[#eeeade] flex items-center justify-center font-bold text-sm">
            손
          </div>
          <span className="font-display font-bold text-base tracking-tight text-[#1c1c1c]">
            {contactInfo.name} <span className="text-xs font-normal text-[#6c685f]">Portfolio</span>
          </span>
        </a>

        <div className="flex items-center gap-2">
          <button
            onClick={onOpenResume}
            className="px-3 py-1.5 rounded-full bg-[#1c1c1c] text-[#eeeade] text-xs font-medium flex items-center gap-1.5 hover:bg-[#333] transition-colors"
          >
            <FileDown size={13} />
            <span>CV</span>
          </button>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-9 h-9 rounded-lg border border-[#1a1a1a]/20 flex items-center justify-center text-[#1c1c1c]"
            aria-label="메뉴 열기"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-[57px] z-40 bg-[#eeeade]/98 backdrop-blur-lg flex flex-col p-6 border-b border-[#1a1a1a]/15">
          <div className="flex flex-col gap-3 flex-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`flex items-center gap-3 p-3.5 rounded-xl text-left transition-all ${
                    isActive 
                      ? 'bg-[#1c1c1c] text-[#eeeade] font-semibold' 
                      : 'text-[#1c1c1c] hover:bg-[#1a1a1a]/5 font-medium'
                  }`}
                >
                  <Icon size={20} />
                  <span className="text-base font-display">{item.label}</span>
                </button>
              );
            })}
          </div>

          <div className="pt-4 border-t border-[#1a1a1a]/15 flex flex-col gap-2">
            <button
              onClick={() => { setIsOpen(false); onOpenResume(); }}
              className="w-full py-3 px-4 rounded-xl bg-[#1c1c1c] text-[#eeeade] font-medium text-center flex items-center justify-center gap-2"
            >
              <FileDown size={18} />
              <span>DOWNLOAD CV (이력서 열람)</span>
            </button>
            <p className="text-xs text-center text-[#6c685f] mt-1">
              {contactInfo.email} · {contactInfo.phone}
            </p>
          </div>
        </div>
      )}
    </>
  );
};
