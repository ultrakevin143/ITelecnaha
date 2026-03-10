"use client";
import { RESUME_DATA } from "@/lib/data";
import { Terminal } from "lucide-react";

export function Skills() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <Terminal className="w-5 h-5 text-emerald-500" />
        Skills
      </h2>
      <div className="flex flex-wrap gap-3">
        {RESUME_DATA.skills.map((skill) => (
          <span 
            key={skill} 
            className="px-4 py-2 border rounded-lg text-sm font-medium transition-colors cursor-default bg-card text-card-foreground hover:border-emerald-500/50 hover:text-emerald-500 shadow-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}