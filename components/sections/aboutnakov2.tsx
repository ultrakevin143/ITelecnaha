"use client";
import { RESUME_DATA } from "@/lib/data";
import { User, Download } from "lucide-react";

export function Aboutnakov2() {
  return (
    <section className="space-y-2">
      {/* Container for Name + Picture */}
      <div className="flex flex-col-reverse md:flex-row md:items-center justify-between gap-5">
        
        {/* Left Side: Name and Role */}
        <div className="space-y-2">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
              Kevin C. Mercado
            </h1>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-emerald-500"></span>
              <h2 className="text-xl md:text-2xl font-medium text-emerald-500">
                FrontEnd Developer
              </h2>
            </div>
          </div>

          {/* Download CV Button Added Here */}
          <div className="pt-4">
            <a 
              href="/Kevin_Mercado_CV.pdf" 
              download 
              className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500 text-black font-bold rounded-lg hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </div>
        </div>

        {/* Right Side: Your Picture */}
        <div className="relative group">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-emerald-500/20 shadow-2xl shadow-emerald-500/10 transition-transform duration-500 group-hover:scale-105">
            <img 
              src={RESUME_DATA.profile.avatar} 
              alt={RESUME_DATA.profile.name}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Decorative glow behind photo */}
          <div className="absolute -z-10 inset-0 bg-emerald-500/20 blur-3xl rounded-full opacity-50 group-hover:opacity-80 transition-opacity"></div>
        </div>
      </div>

      {/* About Me Section Below */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <User className="w-5 h-5 text-emerald-500" />
          About Me
        </h2>
        <div className="bg-card text-card-foreground rounded-2xl p-8 leading-relaxed border shadow-sm">
          {RESUME_DATA.profile.about}
        </div>
      </div>
    </section>
  );
}