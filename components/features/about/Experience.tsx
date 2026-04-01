"use client";
import { RESUME_DATA } from "@/lib/data";
import { Briefcase } from "lucide-react";

export function Experience() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
        <Briefcase className="w-5 h-5 text-emerald-500" />
        Work Experience
      </h2>
      <div className="relative border-l border-border ml-3 space-y-12">
        {RESUME_DATA.experience.map((exp) => (
          <div key={exp.id} className="relative pl-12">
            {/* Timeline Dot */}
            <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Experience Details */}
              <div className="md:col-span-2">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-xl font-bold">{exp.role}</h3>
                  <span className="text-sm font-mono text-emerald-600 bg-emerald-100 border border-emerald-200 dark:text-emerald-400 dark:bg-emerald-500/10 dark:border-emerald-500/20 w-fit mt-2 sm:mt-0 px-3 py-1 rounded-full">
                    {exp.date}
                  </span>
                </div>
                <h4 className="text-lg text-emerald-500/80 mb-4">{exp.company}</h4>
                <p className="text-muted-foreground leading-relaxed max-w-2xl">
                  {exp.description}
                </p>
              </div>
              
              {/* Image Card */}
              <div className="md:col-span-1">
                <div className="bg-card border rounded-xl overflow-hidden shadow-sm">
                  <img 
                    src={exp.imageUrl} 
                    alt={`Workplace image for ${exp.company}`}
                    className="w-full h-auto object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://placehold.co/400x250/1e293b/d1d5db?text=Image+Unavailable";
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}