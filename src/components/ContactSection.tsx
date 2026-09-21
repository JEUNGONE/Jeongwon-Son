import React, { useState } from 'react';
import { Mail, Phone, MapPin, Check, Copy, ArrowUp } from 'lucide-react';
import { contactInfo } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="py-16 px-4 md:px-8 max-w-5xl mx-auto border-t border-[#1a1a1a]/15">
      {/* Editorial Watermark Heading */}
      <div className="text-center mb-12">
        <span className="text-xs font-mono uppercase tracking-widest text-[#6c685f] block mb-2 font-bold">
          // Let's build something extraordinary
        </span>
        <h2 className="font-display font-black text-3xl sm:text-5xl text-[#141414] tracking-tight">
          Feel free to ask any question
        </h2>
      </div>

      {/* Direct Contact Cards Grid */}
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Email Card */}
          <div className="p-5 rounded-2xl bg-[#e6e1d3]/60 border border-[#1a1a1a]/10 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-[#1c1c1c] text-[#eeeade] flex items-center justify-center mb-3">
                <Mail size={18} />
              </div>
              <div className="text-[10px] font-mono uppercase text-[#6c685f]">Email Address</div>
              <a 
                href={`mailto:${contactInfo.email}`} 
                className="text-sm font-semibold text-[#141414] hover:underline mt-0.5 block truncate"
                title={contactInfo.email}
              >
                {contactInfo.email}
              </a>
            </div>
            <button
              onClick={() => handleCopy(contactInfo.email, 'email')}
              className="mt-3 self-start px-2.5 py-1 rounded-lg border border-[#1a1a1a]/15 text-xs text-[#555146] hover:text-[#1c1c1c] hover:bg-[#1a1a1a]/5 flex items-center gap-1.5 transition-colors"
            >
              {copiedField === 'email' ? (
                <>
                  <Check size={12} className="text-emerald-600" />
                  <span className="text-emerald-700 font-medium">복사됨</span>
                </>
              ) : (
                <>
                  <Copy size={12} />
                  <span>이메일 복사</span>
                </>
              )}
            </button>
          </div>

          {/* Phone Card */}
          <div className="p-5 rounded-2xl bg-[#e6e1d3]/60 border border-[#1a1a1a]/10 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-[#1c1c1c] text-[#eeeade] flex items-center justify-center mb-3">
                <Phone size={18} />
              </div>
              <div className="text-[10px] font-mono uppercase text-[#6c685f]">Phone Number</div>
              <a 
                href={`tel:${contactInfo.phone.replace(/[^0-9+]/g, '')}`} 
                className="text-sm font-semibold text-[#141414] hover:underline mt-0.5 block"
              >
                {contactInfo.phone}
              </a>
            </div>
            <button
              onClick={() => handleCopy(contactInfo.phone, 'phone')}
              className="mt-3 self-start px-2.5 py-1 rounded-lg border border-[#1a1a1a]/15 text-xs text-[#555146] hover:text-[#1c1c1c] hover:bg-[#1a1a1a]/5 flex items-center gap-1.5 transition-colors"
            >
              {copiedField === 'phone' ? (
                <>
                  <Check size={12} className="text-emerald-600" />
                  <span className="text-emerald-700 font-medium">복사됨</span>
                </>
              ) : (
                <>
                  <Copy size={12} />
                  <span>전화번호 복사</span>
                </>
              )}
            </button>
          </div>

          {/* Location Card */}
          <div className="p-5 rounded-2xl bg-[#e6e1d3]/60 border border-[#1a1a1a]/10 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-[#1c1c1c] text-[#eeeade] flex items-center justify-center mb-3">
                <MapPin size={18} />
              </div>
              <div className="text-[10px] font-mono uppercase text-[#6c685f]">Location</div>
              <div className="text-sm font-semibold text-[#141414] mt-0.5">
                {contactInfo.location}
              </div>
            </div>
            <div className="mt-3 text-[11px] font-mono text-[#6c685f]">
              부산외대 소프트웨어전공
            </div>
          </div>
        </div>

        {/* Quick Links & Deployment Info */}
        <div className="grid grid-cols-2 gap-6 p-6 rounded-2xl bg-[#e6e1d3]/40 border border-[#1a1a1a]/10 text-xs">
          <div>
            <div className="font-display font-bold text-sm text-[#141414] mb-2">Sections</div>
            <ul className="space-y-1.5 text-[#555146]">
              <li><a href="#home" className="hover:text-[#1c1c1c] hover:underline">Home</a></li>
              <li><a href="#about" className="hover:text-[#1c1c1c] hover:underline">Biography</a></li>
              <li><a href="#education" className="hover:text-[#1c1c1c] hover:underline">Education</a></li>
              <li><a href="#skills" className="hover:text-[#1c1c1c] hover:underline">My advantages</a></li>
              <li><a href="#work" className="hover:text-[#1c1c1c] hover:underline">Projects & Work</a></li>
            </ul>
          </div>

          <div>
            <div className="font-display font-bold text-sm text-[#141414] mb-2">Deployment</div>
            <ul className="space-y-1.5 text-[#555146]">
              <li><span className="font-mono text-[11px] text-emerald-700">✓ GitHub Ready</span></li>
              <li><span className="font-mono text-[11px] text-emerald-700">✓ Vercel Deployable</span></li>
              <li><span className="font-mono text-[11px] text-emerald-700">✓ Clean SPA Build</span></li>
              <li><span className="font-mono text-[11px] text-emerald-700">✓ Mobile Responsive</span></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer Credits */}
      <div className="mt-16 pt-8 border-t border-[#1a1a1a]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6c685f]">
        <div>
          © 2026 손정원 (Jeongwon Son). All rights reserved.
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-[#1c1c1c] transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </section>
  );
};
