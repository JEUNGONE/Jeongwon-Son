import React from 'react';
import { Home, User, GraduationCap, Sparkles, Briefcase, Mail, Github, Phone } from 'lucide-react';
import { contactInfo } from '../data/portfolioData';

interface SidebarProps {
  activeSection: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeSection }) => {
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
  };

  return (
    <aside className="hidden md:flex fixed left-0 top-0 bottom-0 w-[88px] z-40 flex-col justify-between items-center py-6 bg-[#eeeade] border-r border-[#1a1a1a]/15 select-none">
      {/* Brand Logo Symbol */}
      <a 
        href="#home" 
        onClick={(e) => { e.preventDefault(); scrollTo('home'); }}
        className="w-12 h-12 flex items-center justify-center rounded-xl hover:bg-[#1a1a1a]/5 transition-colors group cursor-pointer"
        title="손정원 Portfolio"
      >
        <svg className="w-8 h-8 text-[#1c1c1c] transition-transform group-hover:scale-105" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 12C8 9.79086 9.79086 8 12 8H16C18.2091 8 20 9.79086 20 12C20 14.2091 18.2091 16 16 16H12C9.79086 16 8 17.7909 8 20C8 22.2091 9.79086 24 12 24H16C18.2091 24 20 22.2091 20 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="23" cy="9" r="2.5" fill="currentColor"/>
          <circle cx="9" cy="23" r="2.5" fill="currentColor"/>
        </svg>
      </a>

      {/* Navigation items */}
      <nav className="flex flex-col gap-6 items-center">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`group flex flex-col items-center gap-1 transition-all ${
                isActive ? 'text-[#1c1c1c] font-semibold' : 'text-[#6c685f] hover:text-[#1c1c1c]'
              }`}
              title={item.label}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                isActive ? 'bg-[#1c1c1c] text-[#eeeade] shadow-sm' : 'group-hover:bg-[#1a1a1a]/5'
              }`}>
                <Icon size={18} strokeWidth={isActive ? 2.3 : 1.8} />
              </div>
              <span className="text-[11px] font-medium tracking-tight">
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>

      {/* Social / Contact icon links */}
      <div className="flex flex-col gap-3 items-center border-t border-[#1a1a1a]/15 pt-4 w-12">
        <a 
          href={`mailto:${contactInfo.email}`} 
          className="w-8 h-8 rounded-full flex items-center justify-center text-[#6c685f] hover:text-[#1c1c1c] hover:bg-[#1a1a1a]/10 transition-colors"
          title={`Email: ${contactInfo.email}`}
        >
          <Mail size={15} />
        </a>
        <a 
          href={`tel:${contactInfo.phone.replace(/[^0-9+]/g, '')}`} 
          className="w-8 h-8 rounded-full flex items-center justify-center text-[#6c685f] hover:text-[#1c1c1c] hover:bg-[#1a1a1a]/10 transition-colors"
          title={`Call: ${contactInfo.phone}`}
        >
          <Phone size={15} />
        </a>
        <a 
          href={contactInfo.githubUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="w-8 h-8 rounded-full flex items-center justify-center text-[#6c685f] hover:text-[#1c1c1c] hover:bg-[#1a1a1a]/10 transition-colors"
          title="GitHub"
        >
          <Github size={15} />
        </a>
      </div>
    </aside>
  );
};
