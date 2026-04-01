"use client";

import { RESUME_DATA } from "@/lib/data";

export function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center gap-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex-1 space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 dark:text-emerald-400 dark:bg-emerald-500/10 dark:border-emerald-500/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-emerald-500"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Available for hire
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
          {RESUME_DATA.profile.role}
        </h1>
        
        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
          {RESUME_DATA.profile.bio}
        </p>
      </div>
      
      <div className="relative shrink-0 group">
        <div className="absolute -inset-1 bg-linear-to-r from-emerald-400 to-teal-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
        <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-background shadow-2xl">
          <img 
            src={RESUME_DATA.profile.avatar} 
            alt={RESUME_DATA.profile.name}
            className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
          />
        </div>
      </div>
    </section>
  );
}