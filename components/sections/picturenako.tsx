"use client";

import { RESUME_DATA } from "@/lib/data";

export function Pictures() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
          {RESUME_DATA.profile.role}
        </h1>
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